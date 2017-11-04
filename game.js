Game = function(totalTries) {

	var Word = require("./word.js");

	
	var secretWord;
	var wordList = [];
	var alphabucket = [];
	var triesLeft = totalTries;

	
	this.buildList = function(pathToFile, callback) {
		var fs = require('fs');

		fs.readFileSync(pathToFile, 'utf8').split("\n").forEach(
			function(line, index, arr) {
				if (index === arr.length - 1 && line === "") { return; }
				wordList.push(line.trim());
			}
		);

		callback(null);
	}

	
	this.getDisplayText = function() {
		return secretWord.getDisplayText((this.getTriesLeft() === 0) || this.isOver());
	}
	
	
	this.selectWord = function(callback) {
		secretWord = new Word(wordList[getRandomInt(0, wordList.length)]);
		callback(null);
	}

	
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	
	this.isNewGuess = function(guess) {
		var charcode = guess.toUpperCase().charCodeAt();
		if(alphabucket[charcode - 65] !== true) {
			alphabucket[charcode - 65] = true;
			return true;
		}
		return false;
	}

	this.makeGuess = function(guess, callback) {

		guess = guess.toUpperCase().trim();
		
		if (secretWord.checkMatches(guess)) {
			callback(null, true);
		}
		
		else {
			
			triesLeft--;
			callback(null, false);
		}
	}

	this.isOver = function() {
		return secretWord.isGuessed();
	}

	this.getTriesLeft = function() {
		return triesLeft;
	}
}

module.exports = Game;
//import Letter Object
var Letter = require("./letter.js");

Word = function (word) {
	var actualValue = word.toUpperCase();
	var letterList = [];


	for(var i = 0; i < word.length; i++) {
		letterList[letterList.length] = new Letter([word[i].toUpperCase()]);
	}

	
	this.getDisplayText = function(gameOver) {
		if(gameOver) {
			return actualValue;
		}

		var displayText = "";
		for(var i = 0; i < letterList.length; i++) {
			displayText += letterList[i].getDisplayText() + " ";
		}
		return displayText;
	}

	this.checkMatches = function(guess) {
		var matchFound = false;
		for(var i = 0; i < letterList.length; i++) {
			if(letterList[i].checkMatch(guess)) {
				matchFound = true;
			}
		}
		return matchFound;
	}

	this.isGuessed = function() {
		for (var i = 0; i < letterList.length; i++) {
			if(!letterList[i].isGuessed()) {
				return false;
			}
		}
		return true;
	}
}

module.exports = Word;

Letter = function(lettertext) {
	var guessed = false;
	var trueValue = lettertext;

	
	this.isGuessed = function() {
		return guessed;
	}

	
	function setGuessed(val) {
		guessed = val;
	}

	
	function getTrueValue() {
		return trueValue;
	}


	this.getDisplayText = function() {
		return this.isGuessed() ? trueValue : "_";
	}

	this.checkMatch = function(guess) {
		
		if(!this.isGuessed()) {
			
			if(getTrueValue() == guess) {
				setGuessed(true);
				return true;
			}
			return false;
		}
		return false;
	}
}

module.exports = Letter;
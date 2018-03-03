'use strict';

var BowlingGame = function(){
  this.STARTING_SCORE = 0
  this.totalScore = this.STARTING_SCORE
  this.rollCount = 0;
  this.bonusCounter = 0;
  this.frameCounter = 1;
  this.hasExtraRoll = false;
};

BowlingGame.prototype = {
  roll: function(number){
    if(this.frameCounter > 10){
      this._extraRoll(number);
    }
    if(this.frameCounter === 10){
      this._tenthFrame(number)
    } else {
      if(number + this.firstRoll > 10) {
        throw 'Invalid roll'
      }
      this.totalScore += number;
      this.rollCount += 1;
      if (this.rollCount === 1){
        this.firstRoll = number
      }
      this._addBonus(number);
      this._checkBonusRoll(number);
      if(this.rollCount === 2){
        this._resetForNextFrame()
      }
    }
  },

  _resetForNextFrame: function(){
    this.firstRoll = 0;
    this.rollCount = 0;
    this.frameCounter += 1
  },

  _checkBonusRoll: function(number){
    if(this.rollCount === 1 && number === 10){
      this._strike()
    } else if(this.rollCount === 2 && number + this.firstRoll === 10){
      this._spare()
    }
  },

  _strike: function(){
    this.bonusCounter += 2;
    this._resetForNextFrame()
  },

  _spare: function(){
    this.bonusCounter += 1
  },

  _addBonus: function(number){
    if (this.bonusCounter >= 3){
      this.totalScore += number;
      this.bonusCounter -= 1
    }
    if(this.bonusCounter > 0){
      this.totalScore += number;
      this.bonusCounter -= 1
    }
  },

  _tenthFrame: function(number){
    this.totalScore += number;
    this.rollCount += 1;
    if(this.rollCount === 1){
      this.firstRoll = number
    }
    if(this.rollCount === 1 && number === 10){
      this.hasExtraRoll = true
    } else if (this.rollCount === 2 && number + this.firstRoll === 10){
      this.hasExtraRoll = true
    }
    if(this.rollCount === 2){
      this._resetForNextFrame()
    }
  },

  _extraRoll: function(number){
    if(!this.hasExtraRoll){
      throw 'The game is over'
    } else if(this.hasExtraRoll){
      this.totalScore += number;
      this.hasExtraRoll = false
    }
  }

}

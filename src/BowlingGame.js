'use strict';

var BowlingGame = function(){
  this.STARTING_SCORE = 0
  this.totalScore = this.STARTING_SCORE
  this.rollCount = 0;
  this.bonusCounter = 0;
  this.frameCounter = 1;
};

BowlingGame.prototype = {
  roll: function(number){
    if(this.frameCounter === 10){
      this._tenthFrame(number);
    } else {
      this.totalScore += number;
      this.rollCount += 1;
      if (this.rollCount === 1){
        this.firstRoll = number
      }
      if (this.bonusCounter >= 3){
        this.totalScore += number;
        this.bonusCounter -= 1;
      }
      if(this.bonusCounter > 0){
        this.totalScore += number;
        this.bonusCounter -= 1;
      }
      if(this.rollCount === 1 && number === 10){
        this._strike();
      }
      if(this.rollCount === 2 && number + this.firstRoll === 10){
        this._spare();
      }
      if(this.rollCount === 2){
        this.firstRoll = 0;
        this.rollCount = 0;
        this.frameCounter += 1;
      }
    }
  },

  _strike: function(){
    this.bonusCounter += 2;
    this.rollCount = 0;
  },

  _spare: function(){
    this.bonusCounter += 1;
  },

  _tenthFrame: function(number){
    this.totalScore += number;
  },
}

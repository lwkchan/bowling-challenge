'use strict';

var BowlingGame = function(){
  this.STARTING_SCORE = 0
  this.totalScore = this.STARTING_SCORE
  this.rollCount = 0;
  this.strikeBonusCount = 0;
};

BowlingGame.prototype = {
  roll: function(number){
    this.totalScore += number;
    this.rollCount += 1;
    if (this.strikeBonusCount === 3){
      this.totalScore += number;
      this.StrikeBonusCount -= 1;
    }
    if(this.strikeBonusCount > 0){
      this.totalScore += number;
      this.strikeBonusCount -= 1;
    }
    if(this.rollCount === 1 && number === 10){
      this._strike();
    }
  },

  _strike: function(){
    this.strikeBonusCount += 2;
    this.rollCount = 0;
  },
}

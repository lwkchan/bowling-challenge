'use strict';

var BowlingGame = function(){
  this.STARTING_SCORE = 0
  this.totalScore = this.STARTING_SCORE
  this.frames = new Object;
  this.currentFrame = 1;
  this.currentFrameScore = 0;
  this.rollCount = 0;
  this.firstStrikeBonus;
  this.secondStrikeBonus;
};

BowlingGame.prototype = {
  roll: function(number){
    this.totalScore += number;
    this.rollCount += 1;
    if(this.rollCount === 1 && number === 10){
      this._strike();
    } else if(this.rollCount === 2 && number ) {

    } else if(number < 10 && this.rollCount === 2){
    };
  },

  _strike: function(){
    this.frames[this.currentFrame] = this.currentFrameScore;
    this.firstStrikeBonus = true
    this.currentFrame += 1;
    this.currentFrameScore = 0;
    this.rollCount = 0;
  },
}

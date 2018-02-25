'use strict';

var BowlingGame = function(){
  this.STARTING_SCORE = 0
  this.totalScore = this.STARTING_SCORE
  this.frames = new Object;
  this.currentFrame = 1;
  this.currentFrameScore = 0;
  this.rollCount = 0;
};

BowlingGame.prototype = {
  roll: function(number){
    this.currentFrameScore += number;
    this.rollCount += 1;
    if(number === 10 ){
      this.strike();
    } else if(number < 10 && this.rollCount === 2){
      this.frames[this.currentFrame] = this.currentFrameScore;
      this.currentFrame += 1;
      this.currentFrameScore = 0;
      this.rollCount = 0;
    };
  },

  strike: function(){
    this.frames[this.currentFrame] = this.currentFrameScore;
    this.currentFrame += 1;
    this.currentFrameScore = 0;
    this.rollCount = 0;
  },
}

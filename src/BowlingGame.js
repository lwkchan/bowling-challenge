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
    if(this.rollCount === 2){
      this.frames[this.currentFrame] = this.currentFrameScore;
      this.currentFrame += 1;
      this.currentFrameScore = 0;
      this.rollCount = 0;
    };
  },
}

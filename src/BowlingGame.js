'use strict';

var BowlingGame = function(){
  this.STARTING_SCORE = 0
  this.totalScore = this.STARTING_SCORE
};

BowlingGame.prototype = {
  roll: function(number){
    this.totalScore += number;
  },
}

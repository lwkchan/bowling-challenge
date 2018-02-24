'use strict';

describe ('BowlingGame', function(){

  var bowlingGame = new BowlingGame();

  describe ('When initialized', function(){
    it ('has a total score of 0 ', function(){
      expect(bowlingGame.totalScore).toBe(0);
    });

  });


})

'use strict';

describe ('BowlingGame', function(){

  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  describe ('When initialized', function(){
    it ('has a total score of 0 ', function(){
      expect(bowlingGame.totalScore).toEqual(0);
    });
  });

  describe('roll', function(){
    it('rolling two rolls, with neither a strike or a spare, adds points to the total score', function(){
      expect(bowlingGame.roll(5));
      expect(bowlingGame.roll(2));
      expect(bowlingGame.totalScore).toEqual(7);
    });
  });


})

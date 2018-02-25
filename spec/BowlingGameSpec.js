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
    it('rolling adds points to currentFrame', function(){
      expect(bowlingGame.roll(5));
      expect(bowlingGame.roll(2));
      expect(bowlingGame.totalScore).toEqual(7);
    });
    it('rolling a strike adds a bonus of the next two rolls', function(){
      bowlingGame.roll(10);
      bowlingGame.roll(2);
      bowlingGame.roll(7);
      expect(bowlingGame.totalScore).toEqual(28);
    });
    it('rolling two strikes in a row adds a bonus of the 2 rolls consecutive from each', function(){
      bowlingGame.roll(10);
      bowlingGame.roll(10);
      bowlingGame.roll(7);
      bowlingGame.roll(2);
      expect(bowlingGame.totalScore).toEqual(55);
    });
  });


})

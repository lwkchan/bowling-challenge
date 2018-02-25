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

    describe('rolling a spare', function(){
      it('adds the next roll as a bonus', function(){
        bowlingGame.roll(7);
        bowlingGame.roll(3);
        bowlingGame.roll(2);
        bowlingGame.roll(5);
        expect(bowlingGame.totalScore).toEqual(19);
      });
    });

    describe('rolling a strike', function(){
      it('adds a bonus of the next two rolls', function(){
        bowlingGame.roll(10);
        bowlingGame.roll(2);
        bowlingGame.roll(7);
        expect(bowlingGame.totalScore).toEqual(28);
      });
      it('rolling two in a row adds a bonus of the 2 rolls consecutive from each', function(){
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(7);
        bowlingGame.roll(2);
        expect(bowlingGame.totalScore).toEqual(55);
      });
      it('bonus works for later on in the game', function(){
        bowlingGame.roll(7);
        bowlingGame.roll(2);
        bowlingGame.roll(10);
        bowlingGame.roll(10);
        bowlingGame.roll(5);
        bowlingGame.roll(2);
        expect(bowlingGame.totalScore).toEqual(58);
      });
      it('rolling nine in a row adds a bonus of the 2 rolls consecutive from each', function(){
        for(var i = 0; i < 9; i ++){
          bowlingGame.roll(10);
        }
        expect(bowlingGame.totalScore).toEqual(240);
      });
    });
  });
})

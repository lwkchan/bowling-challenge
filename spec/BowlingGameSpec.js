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
    it('adds points to currentFrame', function(){
      bowlingGame.roll(5);
      bowlingGame.roll(2);
      expect(bowlingGame.totalScore).toEqual(7);
    });

    it('throws an error if the sum of rolls one and two is over 10', function(){
      bowlingGame.roll(5);
      expect(function() {bowlingGame.roll(6)}).toThrow('Invalid roll');
    });

    describe('rolling a spare', function(){
      it('adds the next roll as a bonus at the beginning of the game', function(){
        bowlingGame.roll(7);
        bowlingGame.roll(3);
        bowlingGame.roll(2);
        bowlingGame.roll(5);
        expect(bowlingGame.totalScore).toEqual(19);
      });
      it('adds the next roll as a bonus in the middle of the game', function(){
        bowlingGame.roll(4);
        bowlingGame.roll(3);
        bowlingGame.roll(5);
        bowlingGame.roll(2);
        bowlingGame.roll(7);
        bowlingGame.roll(3);
        expect(bowlingGame.totalScore).toEqual(24);
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
      it('rolling consecutively throughout the game garners perfect score of 300', function(){
        for(var i = 0; i < 12; i ++){
          bowlingGame.roll(10);
        }
        expect(bowlingGame.totalScore).toEqual(300);
      });
    });

    describe ('The tenth frame', function(){
      it('rolling an incomplete frame bars the extra roll', function(){
        for(var i = 0; i < 10; i ++){
          bowlingGame.roll(7);
          bowlingGame.roll(2);
        }
        expect(function() {bowlingGame.roll(5)}).toThrow('The game is over');
      });
      it('rolling a strike allows for an extra roll', function(){
        for(var i = 0; i < 9; i ++){
          bowlingGame.roll(7);
          bowlingGame.roll(2);
        }
        bowlingGame.roll(10);
        bowlingGame.roll(5);
        expect(function() {bowlingGame.roll(5)}).not.toThrow();
      });
      it('rolling a spare allows for an extra roll', function(){
        for(var i = 0; i < 9; i ++){
          bowlingGame.roll(7);
          bowlingGame.roll(2);
        }
        bowlingGame.roll(3);
        bowlingGame.roll(7)
        expect(function() {bowlingGame.roll(5)}).not.toThrow();
      });
    });

    describe('Gutter game', function(){
      it('finished after 20 gutter rolls', function(){
        for(var i = 0; i < 20; i ++){
          bowlingGame.roll(0);
        }
        expect(function() {bowlingGame.roll(5)}).toThrow('The game is over');
      });
      it('has a score of 0', function(){
        for(var i = 0; i < 20; i ++){
          bowlingGame.roll(0);
        }
        expect(bowlingGame.totalScore).toEqual(0);
      });
    });
  });
})

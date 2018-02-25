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

    it('starts with a currentFrame of 0', function(){
      expect(bowlingGame.currentFrameScore).toEqual(0);
    });
  });

  describe('roll', function(){
    it('rolling adds points to currentFrame', function(){
      expect(bowlingGame.roll(5));
      expect(bowlingGame.roll(2));
      expect(bowlingGame.frames[1]).toEqual(7);
      console.log(bowlingGame);
    });
    it('rolling twice changes the frame', function(){
      expect(bowlingGame.roll(5));
      expect(bowlingGame.roll(2));
      expect(bowlingGame.currentFrame).toEqual(2);
      expect(bowlingGame.currentFrameScore).toEqual(0);
    });
    it('rolling two gutter balls changes the frame', function(){
      bowlingGame.roll(0);
      bowlingGame.roll(0);
      expect(bowlingGame.currentFrame).toEqual(2);
    });
    it('rolling a strike changes the frame', function(){
      bowlingGame.roll(10);
      expect(bowlingGame.currentFrame).toEqual(2);
      expect(bowlingGame.currentFrameScore).toEqual(0);
    });

  });


})

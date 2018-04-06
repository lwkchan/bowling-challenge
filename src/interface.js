$( document ).ready(function() {
  bowlingGame = new BowlingGame()
  $('#score-number').text(bowlingGame.totalScore)
  $('#lets-bowl').hide().fadeIn(600)
  $('#score').hide().fadeIn(800)
  $('#control-panel').hide().slideToggle(100);

  var _updateScore = function() {
    $('#score-number').text(bowlingGame.totalScore)
  };

  var scoreCardTracker = 1;

  var _fillScoreCard = function(score) {
    $(`#roll-${scoreCardTracker}`).text(`${score}`);
    if (score === 10 && bowlingGame.frameCounter < 10){
      scoreCardTracker += 2
    } else if (score === 10 && bowlingGame.frameCounter === 10 && bowlingGame.rollCount === 0) {
      scoreCardTracker += 2
    } else {
      scoreCardTracker += 1
    }
  }

  $('#score-0').on('click', function(){
    var score = 0;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore()
  });

  $('#score-1').on('click', function(){
    var score = 1;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-2').on('click', function(){
    var score = 2
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-3').on('click', function(){
    var score = 3;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-4').on('click', function(){
    var score = 4;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-5').on('click', function(){
    var score = 5;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-6').on('click', function(){
    var score = 6;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-7').on('click', function(){
    var score = 7;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-8').on('click', function(){
    var score = 8;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-9').on('click', function(){
    var score = 9;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $('#score-10').on('click', function(){
    var score = 10;
    bowlingGame.roll(score);
    _fillScoreCard(score);
    _updateScore();
  });

  $(window).on("error", function(evt) {
    var e = evt.originalEvent;
    alert(e.error)
});

})

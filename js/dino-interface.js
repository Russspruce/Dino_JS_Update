var apiKey = require('./../.env').apiKey;
var Dino = require('./../js/dino.js').DinoModule;
var fakeDinosArray = require('./../js/dino.js');
var dinoArray2 = [];


var displayDino = function(dinoArray) {
  var shuffleDino = new Dino();
  dinoArray2.push(dinoArray[0]);
  dinoArray2.push(dinoArray[1]);
  dinoArray2.push(dinoArray[2]);

  shuffleDino.shuffle(dinoArray);

  $('#dino1random').html("<h2 value='dino1random'>" + dinoArray[0] + "</h2>");
  $("#dino2random").html("<h2 value='dino2random'>" + dinoArray[1] + "</h2>");
  $("#dino3random").html("<h2 value='dino3random'>" + dinoArray[2] + "</h2>");
  dinoArray = [];
};

function Replay() {
location.reload();
}

$(document).ready(function(){
  var dinoTest = new Dino();

  $('#dino').submit(function(event) {
    event.preventDefault();
    dinoTest.getDino(displayDino);
  });

  $("#user_form").submit(function(event) {
    event.preventDefault();
    debugger;
    var userGuess = $('#user_input').val();
    if (userGuess === dinoArray2[2]) {
      $('#win').removeClass("hidden");
      // $('#refresh').removeClass("hidden");
      dinoArray2 = [];
    } else if ((userGuess === dinoArray2[0]) || (userGuess === dinoArray2[1])){
      $('#lose').removeClass("hidden");
      dinoArray2 = [];
    } else {
      alert("Did you misspell that?");
      dinoArray2 = [];
      Replay();
    }
  });

  $('#refresh').submit(function(event){
    event.preventDefault();
    Replay();
  });

  $('#refresh2').submit(function(event){
    event.preventDefault();
    Replay();
  });
});

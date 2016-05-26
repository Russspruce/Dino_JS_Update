var apiKey = require('./../.env').apiKey;
var Dino = require('./../js/dino.js').DinoModule;

var displayDino = function(dinoArray) {
  var shuffleDino = new Dino();
  shuffleDino.shuffle(dinoArray);
  var dinoChoices = [];

  // console.log(dinoArray);
  // dinoChoices.push(dinoArray[0]);
  // dinoChoices.push(dinoArray[1]);
  // dinoChoices.push(dinoArray[2]);
  // console.log(dinoChoices);
  $("#dino1random").text(dinoArray[0]);
  $("#dino2random").text(dinoArray[1]);
  $("#dino3random").text(dinoArray[2]);
  dinoArray = [];
};

$(document).ready(function(){
var dinoTest = new Dino();

  $('#dino').submit(function(event) {
    event.preventDefault();
      dinoTest.getDino(displayDino);
  });
});






















// var apiKey = require('./../.env').apiKey;
// var dino = require('./../js/Dino.js').Dino;
// var fakeDinos = ["testasaurous", "fakeasaurous", "a", "b", "c"];
//
// $(document).ready(function(){
//   var dinoArray = [];
//
//   $('#dino').submit(function(event) {
//     event.preventDefault();
//
//     var dino1;
//     var dino2;
//     var dino3;
//
//     $.get(apiKey).then(function(response){
//       var dino1 = response;
//     });
//     $.get(apiKey).then(function(response){
//       var dino2 = response;
//     });
//     var randomPick = Math.floor(Math.random() * fakeDinos.length);
//     var dino3 = (fakeDinos[randomPick]);
//
//     var newDino = new Dino(dino1, dino2, dino3);
//     newDino.shuffle();
//     dinoArray.push(newDino);
//     console.log(dinoArray);
//     dinoArray= [];
//   });
// });

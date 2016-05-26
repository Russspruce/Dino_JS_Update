var apiKey = require('./../.env').apiKey;
var Dino = require('./../js/dino.js').DinoModule;

var displayDino = function(dinoArray) {

  console.log(dinoArray);
  dinoArray = [];
// var splitDinos = dinos.split(" ");
//   dinoArray.push(splitDinos[0]);
//   dinoArray.push(splitDinos[1]);
};

$(document).ready(function(){
var dinoTest = new Dino();

  $('#dino').submit(function(event) {
    event.preventDefault();


      dinoTest.getDino(displayDino);
      // var randomNumber = Math.floor(Math.random() * fakeDinos.length);
      // dinoArray.push(fakeDinos[randomNumber]);

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

var apiKey = require('./../.env').apiKey;
var fakeDinos = ["testasaurous.", "fakeasaurous.", "a.", "b.", "c."];
var dinoArray = [];


exports.DinoModule = function(){

};
exports.DinoModule.prototype.getDino = function(displayFunction) {
  $.get(apiKey).then(function(response){
    var dinos = response;
    var dinoArray = [];
    var splitDinos = dinos.split(" ");
    dinoArray.push(splitDinos[0]);
    dinoArray.push(splitDinos[1]);
    // dinoTest.getDino(displayDino);
    var randomNumber = Math.floor(Math.random() * fakeDinos.length);
    dinoArray.push(fakeDinos[randomNumber]);
    displayFunction(dinoArray);
  });

};


exports.DinoModule.prototype.shuffle = function(dinoArray) {
    var j, x, i;
    for (i = dinoArray.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = dinoArray[i - 1];
        dinoArray[i - 1] = dinoArray[j];
        dinoArray[j] = x;
    }
};

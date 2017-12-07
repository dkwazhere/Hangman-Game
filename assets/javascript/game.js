

//create array of words
var movies = ["godzilla", "titanic", "spiderman", "rocky"];

// choose word randomly
var random = Math.floor(Math.random() * movies.length);
var chooseRandom = movies[random];
var underScore = [];
console.log(chooseRandom);

//create underscores for words
for (i = 0; i < chooseRandom.length; i++) {
    underScore.push("_");
}
console.log(underScore);
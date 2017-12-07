

//create array of words
var movies = ["godzilla", "titanic", "spiderman", "rocky", "gladiator", "oldboy", "alien"];

// choose word randomly
var random = Math.floor(Math.random() * movies.length);
var chooseRandom = movies[random];
var underScore = [];
// console.log(chooseRandom);

//create underscores for words
for (i = 0; i < chooseRandom.length; i++) {
    underScore.push(" _ ");
}
console.log(underScore);

window.onload = function loadit() {
document.getElementById("randomarray").innerHTML = underScore;
}


document.onkeyup = function(event) {
    var userClick = event.key
    var clickstorage = [];
    if ((userClick === "a") || (userClick === "b") || (userClick === "c") || (userClick === "d") || (userClick === "e") || (userClick === "f") || (userClick === "g") || (userClick === "h") || (userClick === "i") || (userClick === "j") || (userClick === "k") || (userClick === "l") || (userClick === "m") || (userClick === "n") || (userClick === "o") || (userClick === "p") || (userClick === "q") || (userClick === "r") || (userClick === "s") || (userClick === "t") || (userClick === "u") || (userClick === "v") || (userClick === "w") || (userClick === "x") || (userClick === "y") || (userClick === "z")) {
       var click = document.querySelector("#guesses").innerHTML = "You've Guessed letters: " + userClick;
        clickstorage.push(click);
        console.log(click);
    }
}

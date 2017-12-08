

//create array of words
var movies = ["godzilla", "titanic", "spiderman", "rocky", "gladiator", "oldboy", "alien"];

// choose word randomly
var random = Math.floor(Math.random() * movies.length);
var chooseRandom = movies[random];
var underScore = [];
var correctLetter = [];
var wrongLetter = [];
console.log(chooseRandom);

//create underscores for words in array
for (i = 0; i < chooseRandom.length; i++) {
    underScore.push(" _ ");
}
//testing underscore
console.log(underScore);

// this loads the underscore array word in the html
window.onload = function loadit() {
 document.getElementById("randomarray").innerHTML = underScore;
 }

//user click
document.onkeyup = function(event) {
    var userClick = event.key;
    // console.log(userClick);

// create a loop, if user clicks a letter and is within the randomly chosen array, fill in the underscore with letter.
    for (var j = 0; j < chooseRandom.length; j++) {
        if (chooseRandom[j] === userClick) {
            underScore[j] = userClick;
            console.log(underScore);
            document.getElementById("randomarray").innerHTML = underScore;
        }
        else {
            // wrongLetter[wrongLetter.length] = userClick;
            wrongLetter.push(userClick[j]);
            document.getElementById("guesses").innerHTML = wrongLetter.join(' ');
        }
    }
}




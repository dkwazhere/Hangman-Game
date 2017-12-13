

//create array of words
var movies = ["godzilla", "titanic", "spiderman", "rocky", "gladiator", "oldboy", "alien", "inception", "interstellar", "seven", "jaws", "alien", "predator", "scarface", "memento", "avatar", "shrek", "batman", "superman", "ratatouille", "troy", "matrix", "watchmen", "flubber", "jumanji"];

// choose word randomly
var random = Math.floor(Math.random() * movies.length);
var chooseRandom = movies[random];
var underScore = [];
var correctLetter = [];
var wrongLetter = [];
var lives = 10;
//split testing
var split = chooseRandom.split('');
console.log(chooseRandom);
//images
//create underscores for words in array
// for (i = 0; i < chooseRandom.length; i++) {
//     underScore.push(" _ ");
// }

// testing split
    for (i = 0; i < split.length; i ++) {
        underScore.push(' _ ');
    }

//testing underscore
console.log(underScore);

// this loads the underscore array word in the html
window.onload = function loadit() {
document.getElementById("randomarray").innerHTML = underScore.join(' ');
document.getElementById('picture').innerHTML = '<img src="assets/images/hangman1.png" />'

//user click
document.onkeyup = function(event) {
    var userClick = event.key;
    // console.log(userClick);

// create a loop, if user clicks a letter and is within the randomly chosen array, fill in the underscore with letter.
    if (chooseRandom.includes(userClick) === true) {
        for (var j = 0; j < chooseRandom.length; j++) {
            if (chooseRandom[j] === userClick) {
                underScore[j] = userClick;
                console.log(underScore);
                document.getElementById("randomarray").innerHTML = underScore.join(' ');
            }
        }
    } else {
        wrongLetter.push(userClick);
        lives--;
        document.getElementById("guesses").innerHTML = wrongLetter.join(' ');
        // adding pictures
        if (lives === 10) {
        document.getElementById('picture')
            .innerHTML = '<img src="assets/images/hangman1.png" />';
        }
        else if (lives === 9) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman2.png" />';
        }
        else if (lives === 8) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman3.png" />';
        }
        else if (lives === 7) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman4.png" />';
        }
        else if (lives === 6) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman5.png" />';
        }
        else if (lives === 5) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman6.png" />';
        }
        else if (lives === 4) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman7.png" />';
        }
        else if (lives === 3) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman8.png" />';
        }
        else if (lives === 2) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman9.png" />';
        }
        else if (lives === 1) {
            document.getElementById('picture')
                .innerHTML = '<img src="assets/images/hangman10.png" />';
        }
    }
        // live counter
        document.getElementById("lives").innerHTML = "You have: " + lives + " lives remaining";
        // alerting the loss
        if (lives === 0) {
            alert("You lose. " + "The correct word was: " + chooseRandom);
            // reloading page after losing
            location.reload();
        }
    // alerting the win
        if (underScore.join('') == chooseRandom) {
            alert('you win');
            // reloading page after winning
            location.reload();
        }
    }
}


//create array of words

// choose word randomly
var movies = ["godzilla", "titanic", "spiderman", "rocky"];
var random = movies[Math.floor(Math.random() * movies.length)];

var listRandom = document.getElementById("random-array");

// so above i can console.log a random array

// now i need to list the word on my html page.
document.getElementById("randomarray").innerHTML = listRandom;

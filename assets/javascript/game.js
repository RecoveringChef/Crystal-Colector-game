//test hook up to js sheet
console.log ("is this thing on?")

// variabel needed

var wins = 0;
var losses = 0;
var target = [Math.floor(Math.random() * (100 - 20) +20)];
var score = 0;
var red =  [Math.floor(Math.random() * (13 - 5) +5)];
var blue =  [Math.floor(Math.random() * (6- 2) + 2)];
var purple =  [Math.floor(Math.random() * (13 - 1) + 1)];
var green =  [Math.floor(Math.random() * (3 - 1) + 1)];



var winsText = document.getElementById("wins-text") + wins;
var lossesText = document.getElementById("losses-text") + losses;
var winsText = document.getElementById("target-text") + target;
var lossesText = document.getElementById("score-text");


//generate target random number and output to html
//var target = target[Math.floor(Math.random() * (58 - 28 + 1))];

 console.log("new target is: " + target) ;
 console.log("new red: " + red) ;
 console.log("new blue: " + blue);
 console.log("new green: " + green) ;
 console.log("new purple: " + purple) ;


//generate random values for the 4 gems


//function to add values of gems to score and output to html


//if score  === target trigger wins incriment up and reset


//else score > target  trigger loss incrimint up and reset


// gems should be bootstrap cards
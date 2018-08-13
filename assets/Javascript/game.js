window.onload = function initializeGame(){

var initializeGame;
var baseballTerm = ['pastime', 'American League', 'National League', 'World Series', 'strike', 'ball', 'out','safe', 'homerun', 'Diamondbacks', 'Braves', 'Orioles', 'Boston Red Sox', 'Chicago Cubs', 'Chicago White Sox', 'Cincinnati Reds', 'Indians', 'Rockies', 'Tigers', 'Astros', 'Royals', 'LA Angels', 'LA Dodgers', 'Maimi Marlins', 'Brewers', 'Twins', 'NY Mets', 'NY Yankees', 'Athletics', 'Phillies', 'Pirates', 'Gaints', 'Mariners', 'Cardinals', 'TB Rays', 'Rangers', 'Blue Jays', 'Nationals'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var userGuess;
var correctGuess;
var wrongGuess;
var allowedGuess;
var mylives = 10;
var updateGuess;

var myStickman = document.getElementById("stickman");
var myStickman = document.getElementById("stickman");
var myStickman = document.getElementById("stickman");
var initializeGame = document.getElementById('initializeGame')
var updateGuess = document.getElementById('updateGuess');
var allowedGuess = document.getElementById('allowedGuess');
var correctGuess = document.getElementById('correctGuess');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var baseballTermElement = document.getElementById('baseballTerm');
function initializeGame() 
{
  baseballTerm = '';
  userGuess = 10;
  wrongGuess = [];
  correctGuess = [];

  for (var i = 0; i < baseballTerm.length; i++) 
  {
    correctGuess
    .push('_');
  }

  baseballTermElement.innerHTML = correctGuess.join(' ');
  letterCountElement.innerHTML = allowedGuess;
} 
document.onkeyup = function baseballTerm()
{
  document.getElementById('baseballTerm').innerHTML = Math.random();
}
function updateGuess(letter) 
{
  allowedGuess--; 
  letterCountElement.innerHTML = allowedGuess;

  if (baseballTerm.indexOf(letter) === -1) 
  { 
    wrongGuess.push(letter); 
    lettersGuessedElement.innerHTML = wrongGuess.join(', ');
  } 
  else 
  {
    for (var i = 0; i < baseballTerm.length; i++) 
    {
      if (word[i] === letter) 
      {
        correctGuess[i] = letter;
      }
    }

    baseballTerm.innerHTML = correctGuess.join(' ');
  }
}

function checkWin() 
{
  if (correctGuess.indexOf('_') === -1) 
  {
    alert('You Won!');
  }
   else if (allowedGuesses === 0) 
   {
    alert('You Lost!');
   }
}
canvas =  function(){

  
  context = myStickman.getContext('2d');
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
};

  head = function(){
    
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
  
draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
  
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke(); 
}

 frame1 = function() 
 {
   draw (0, 150, 150, 150);
 };
 
 frame2 = function() 
 {
   draw (10, 0, 10, 600);
 };

 frame3 = function() 
 {
   draw (0, 5, 70, 5);
 };

 frame4 = function() 
 {
   draw (60, 5, 60, 15);
 };

 torso = function() 
 {
   draw (60, 36, 60, 70);
 };

 rightArm = function() 
 {
   draw (60, 46, 100, 50);
 };

 leftArm = function() 
 {
   draw (60, 46, 20, 50);
 };

 rightLeg = function() 
 {
   draw (60, 70, 100, 100);
 };

 leftLeg = function() 
 {
   draw (60, 70, 20, 100);
 };

drawArray = ['rightLeg', 'leftLeg', 'rightArm', 'leftArm',  'torso',  'head', 'frame4', 'frame3', 'frame2', 'frame1']; 

document.onkeyup = function (event) 
{
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuess(userGuess);
  checkWin();
};
};


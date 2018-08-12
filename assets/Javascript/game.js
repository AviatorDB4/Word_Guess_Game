object.onload = function(initializeGame){


var baseballTerm = ['pastime', 'American League', 'National League', 'World Series', 'strike', 'ball', 'out','safe', 'homerun', 'Diamondbacks', 'Braves', 'Orioles', 'Boston Red Sox', 'Chicago Cubs', 'Chicago White Sox', 'Cincinnati Reds', 'Indians', 'Rockies', 'Tigers', 'Astros', 'Royals', 'LA Angels', 'LA Dodgers', 'Maimi Marlins', 'Brewers', 'Twins', 'NY Mets', 'NY Yankees', 'Athletics', 'Phillies', 'Pirates', 'Gaints', 'Mariners', 'Cardinals', 'TB Rays', 'Rangers', 'Blue Jays', 'Nationals'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var userGuess;
var correctGuess;
var wrongGuess;
var allowedGuess;
var mylives = 10;
var updateGuess;


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

document.onkeyup = function (event) 
{
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuess(userGuess);
  checkWin();
};
};


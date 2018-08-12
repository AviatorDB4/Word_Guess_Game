var baseballTerm = ['pastime', 'American League', 'National League', 'World Series', 'strike', 'ball', 'out','safe', 'homerun', 'Diamondbacks', 'Braves', 'Orioles', 'Boston Red Sox', 'Chicago Cubs', 'Chicago White Sox', 'Cincinnati Reds', 'Indians', 'Rockies', 'Tigers', 'Astros', 'Royals', 'LA Angels', 'LA Dodgers', 'Maimi Marlins', 'Brewers', 'Twins', 'NY Mets', 'NY Yankees', 'Athletics', 'Phillies', 'Pirates', 'Gaints', 'Mariners', 'Cardinals', 'TB Rays', 'Rangers', 'Blue Jays', 'Nationals'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var userGuess;
var correctGuess;
var wrongGuess;

var wordElement = document.getElementById('baseballTerm');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');

function initializeGame() 
{
  baseballTerm = '';
  userGuess = 10;
  wrongGuess = [];
  correctGuess = [];

  // initialize correctGuess array with underscores
  for (var i = 0; i < baseballTerm.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerHTML = correctGuess.join(' ');
  letterCountElement.innerHTML = allowedGuess;
} 

function updateGuess(letter) 
{
  allowedGuess--; // decrement guess left
  letterCountElement.innerHTML = allowedGuess;

  if (baseballTerm.indexOf(letter) === -1) { // letter is NOT in the word
    wrongGuess.push(letter); // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuess.join(', ');
  } else { // letter IS in the word
    // replace underscore with the letter
    for (var i = 0; i < baseballTerm.length; i++) {
      if (word[i] === letter) {
        correctGuess[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuess.join(' ');
  }
}

function checkWin() 
{
  if (correctGuess.indexOf('_') === -1) {
    alert('You Won!');
  } else if (allowedGuesses === 0) {
    alert('You Lost!');
  }
}

document.onkeyup = function (event) 
{
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuess(letterGuessed);
  checkWin();
};

initializeGame();
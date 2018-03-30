/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of the correct answer if loose
- Let player chooose the play again
*/

// Game values
let min = 4,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI Elements
const UIgame = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // validate
  if ( isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0) {
      gameOver(false, `GAME OVER, you Lost. The correct number was ${winningNum}`);
    } else {
      // game continues - answer wrong
      // change border color
      guessInput.style.borderColor = 'red';
      // tell user its the wrong number
      setMessage(`${guess} is not correct ${guessesLeft} guesses left`, 'red');
      // clear input
      guessInput.value = '';
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;

  setMessage(msg, color);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


























//

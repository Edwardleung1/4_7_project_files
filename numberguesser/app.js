/* 
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1;
let max = 10;
let winningNumber = 2;
let guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNumber) {
    // Game over - WON
    gameOver(true, `${winningNumber} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft = guessesLeft - 1;

    if (guessesLeft === 0) {
      // Game Over - LOST

      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNumber}`
      );
    } else {
      // Game carries on - answer is wrong

      // Change border color to red
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      // Tell user it is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

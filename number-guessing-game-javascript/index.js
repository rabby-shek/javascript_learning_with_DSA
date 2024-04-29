// Get elements from the DOM
let submitButton = document.getElementById("submit-btn");
let restartButton = document.getElementById("restart-btn");
let playerInputField = document.getElementById("playerInput");
let attemptValue = document.getElementById("attempts");
let result = document.getElementById("result");

// Game variables
let min = 1;
let max = 100;
let randomNumber;
let attempt;

// Initialize game
initializeGame();

// Function to initialize the game
function initializeGame() {
  // Reset attempt count
  attempt = 0;
  // Generate a new random number
  randomNumber = generateRandomNumber(min, max);
  // Reset UI
  result.textContent = "";
  attemptValue.textContent = "Attempt: 0";
  playerInputField.value = "";
  playerInputField.disabled = false;
  submitButton.disabled = false;
  restartButton.style.display = "none";
}

// Click function for handling the game
submitButton.onclick = function () {
  // Get player's input value
  let playerInput = Number(playerInputField.value);
  // Increment attempt count
  attempt++;
  // Check if player's input is correct
  if (playerInput === randomNumber) {
    // Display success message
    result.textContent = `Congratulations! You guessed the correct number: ${playerInput}`;
    // Disable input field and submit button
    playerInputField.disabled = true;
    submitButton.disabled = true;
    // Display restart button
    restartButton.style.display = "block";
  } else {
    // Display hint message
    result.textContent = playerInput < randomNumber ? "Try a higher number!" : "Try a lower number!";
    // Update attempt count display
    attemptValue.textContent = `Attempt: ${attempt}`;
  }
  // Check if attempts exhausted
  if (attempt >= 5 && playerInput !== randomNumber) {
    // Display game over message
    result.textContent = `Game Over! The correct number was ${randomNumber}`;
    // Disable input field and submit button
    playerInputField.disabled = true;
    submitButton.disabled = true;
    // Display restart button
    restartButton.style.display = "block";
  }
};

// Click function for restarting the game
restartButton.onclick = function () {
  initializeGame();
};

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

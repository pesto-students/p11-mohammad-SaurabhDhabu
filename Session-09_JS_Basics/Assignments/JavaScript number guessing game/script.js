let curretGuessNumber = 1;

function playGuessingGame(
  numToGuess,
  totalGuessesRemaining = 10,
  message = "Enter a number between 1 and 100"
) {
  if (totalGuessesRemaining < 1) {
    return 0;
  } else {
    let inputNumberToGuess = prompt(message);
    if (inputNumberToGuess == null) {
      return 0;
    }
    if (numToGuess == inputNumberToGuess) {
      return curretGuessNumber;
    } else {
      if (!isNaN(inputNumberToGuess)) {
        curretGuessNumber += 1;
        totalGuessesRemaining -= 1;
        if (numToGuess > inputNumberToGuess) {
          return playGuessingGame(
            numToGuess,
            totalGuessesRemaining,
            inputNumberToGuess + " is too small. Guess a larger number."
          );
        } else {
          return playGuessingGame(
            numToGuess,
            totalGuessesRemaining,
            inputNumberToGuess + " is too large. Guess a smaller number."
          );
        }
      } else {
        return playGuessingGame(
          numToGuess,
          totalGuessesRemaining,
          "Please enter a number."
        );
      }
    }
  }
}

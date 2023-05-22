let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)


function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    console.log(guessNumber);
    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again!!"
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again!!"
        gameResult.style.backgroundColor = "#1e217c"
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congraulation! You got it right"
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provide valid input value."
        gameResult.style.backgroundColor = "#1e217c";
    }
}
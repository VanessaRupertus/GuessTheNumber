let num = 1;
let correct = true;

/*
* Method that calls the correct function upon the click of the button.
 */
function buttonClicked() {
    let instruction = document.getElementById("instruction");
    let message = document.getElementById("message");

    if(instruction.innerText === "Enter a positive number." &&
        (message.innerText === "You got it!" || message.innerText === "")) {
        setMaxNum();
    }
    else {
        doGuess();
    }
}

/*
* Method that sets the maximum number for the program.
 */
function setMaxNum() {
    let max = Number(document.getElementById("guess").value);

    let instruction = document.getElementById("instruction");
    let message = document.getElementById("message");

    if(!isNaN(max) && max > 0) {
        let num = Math.floor(Math.random() * Math.round(max)) + 1;
        console.log(num);
        instruction.innerHTML = "Guess a number between 1 and " + max;
    }
    else if(isNaN(max)) {
        message.innerHTML = "That is not a number!";
    }
    else {
        message.innerHTML = "That number is not in range, try again.";
    }
}

/*
* Method that checks the user's guess is a valid input.
 */
function doGuess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if(!isNaN(guess) && guess > 0 && guess < num+1) {
        checkGuess(guess);
    }
    else if(isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    }
    else {
        message.innerHTML = "That number is not in range, try again.";
    }

}

/*
* Method that checks if the user guessed correctly.
 */
function checkGuess(guess) {
    let message = document.getElementById("message");
    let instruction = document.getElementById("instruction");
    if(guess === num) {
        message.innerHTML = "You got it!";
        instruction.innerHTML = "Enter a positive number.";
    }
    else if(guess > num ) {
        message.innerHTML = "No, try a lower number.";
    }
    else {
        message.innerHTML = "No, try a higher number.";
    }
}
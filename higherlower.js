let num = 1;
let max;

let isValid = false;
let instruction = document.getElementById("instruction");

while (!isValid) {
    max = window.prompt("Enter the maximum number.")

    if(!isNaN(max) && max > 0) {
        max = Math.round(max);
        num = Math.floor(Math.random() * max) + 1;
        instruction.innerHTML = "Guess a number between 1 and " + max;
        console.log(num);
        isValid = true;
    }
}

console.log(num);

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

        let array = [];

        if (guess > 0 && guess < max + 1 && Number.isFinite(guess)) {
            if (guess === num) {
                array.push(guess);
                message.innerHTML = "You got it! It took you " + array.length
                    + " times and your guesses were " + array.toString();
            } else if (guess > num) {
                array.push(guess);
                message.innerHTML = "No, try a lower number.";
            } else if (guess < num) {
                array.push(guess);
                message.innerHTML = "No, try a higher number.";
            }
        } else {
            if (!Number.isFinite(guess)) {
                message.innerHTML = "That is not a number!";
            } else {
                message.innerHTML = "That number is not in range, try again.";
            }
        }
}

/*
* Method that checks if the user guessed correctly.
 */

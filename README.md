# Guess The Number
Simple JavaScript program where the program picks a number between one and 
X (where X is a number chosen by the user upon opening the html page) and the user inputs guesses until the correct 
number is guessed. Upon a correct guess, the total number of guesses and what numbers were guessed will be shown to 
the user in the order they were guessed.
### Files:
- **higherlower.js**
- **higherlower.html**

**do_guess()** is the only function within **higherlower.js**. It takes into account the most recent guess by the user
and updates the message displayed on the webpage accordingly. It checks each guess with the number chosen by the 
program using a series of if-else statements to determine which message to display to the user. It also adds each guess 
to an array so guesses can be shown to the user after the user successfully guesses the number.
### Used Resources / Libraries:
- Bootstrap Framework
- JQuery AJAX
- Popper

"use strict";

// Set up a boolean variable to control the game loop
let gameRunning = true;


// While loop'et er igang så længe "gameRunning" er sand. Når man indtaster et nr sammenligner den med "targetNumber". 
// Hvis korrekt nr viser den "congratulations" og loop'et "gamerunning" ender på falsk. 

while (gameRunning) {
    // Generate a random number between 0 and 10
    const targetNumber = Math.floor(Math.random() * 10);

    // Ask the user to guess a number
    let userGuess = prompt("Guess a number between 0 and 10:");

    // Convert the user's input to a number
    userGuess = parseInt(userGuess);

    // Compare the user's guess with the target number
    if (userGuess === targetNumber) {
        alert ("Congratulations! You guessed the correct number.");
        alert("Congratulations! You guessed the correct number.");
        gameRunning = false; // Exit the loop
    } else if (userGuess < targetNumber) {
        alert ("Too low! Guess higher.");
    } else {
        alert ("Too high! Guess lower.");
    }
}

// Game result notification (outside the loop)
console.log("Game over. Thank you for playing!");

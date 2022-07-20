const consoleMessage = {};

consoleMessage.displayIntro = () => {
    console.log("Rock Paper Scissors Game");
    console.log("Type 1 for Rock");
    console.log("Type 2 for Paper");
    console.log("Type 3 for Scissors");
};

consoleMessage.displayComputerChoice = (num) => {
    console.log(`Computer Choice: ${num}`);
};

consoleMessage.displayResult = (user, computer) => {
    if (user === 1 && computer === 1) {
        console.log("Rock vs Rock - Draw!");
    } else if (user === 1 && computer === 2) {
        console.log("Paper beats Rock - Computer Wins!");
    } else if (user === 1 && computer === 3) {
        console.log("Rock beats Scissors - You Win!");
    } else if (user === 2 && computer === 1) {
        console.log("Paper beats Rock - You Win!");
    } else if (user === 2 && computer === 2) {
        console.log("Paper vs Paper - Draw!");
    } else if (user === 2 && computer === 3) {
        console.log("Scissors beats Paper - Computer Wins!");
    } else if (user === 3 && computer === 1) {
        console.log("Rock beats Scissors - Computer Wins!");
    } else if (user === 3 && computer === 2) {
        console.log("Scissors beats Paper - You Win!");
    } else if (user === 3 && computer === 3) {
        console.log("Scissors vs Scissors - DRAW!");
    } else {
        console.log("ERROR");
    }
};

module.exports = consoleMessage;
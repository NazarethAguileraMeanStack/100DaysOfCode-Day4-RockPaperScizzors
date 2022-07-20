const prompt = require("prompt-sync")({ sigint: true });
const textArt = require("./textArt");
const consoleMessage = require("./consoleMessages");

consoleMessage.displayIntro();
let userChoice = prompt("Your Choice: ");
let userChoiceNum = Number(userChoice);
let computerChoice = Math.floor((Math.random() * 3)) + 1;

textArt.render(userChoiceNum);
consoleMessage.displayComputerChoice(computerChoice);
textArt.render(computerChoice);
consoleMessage.displayResult(userChoiceNum, computerChoice);



let userChoice = prompt("Choose heads or tails");
let randomNumber = Math.round(Math.random());
let computerChoice;

if (randomNumber===0) {
  computerChoice = "heads";
} else if (randomNumber===1) {
  computerChoice = "tails";
}

if (userChoice==computerChoice) {
  alert("You guessed right! The coin flip landed on " + computerChoice)
} else {  
  alert("Sorry, the coin flip landed on " + computerChoice)
}

let birthYear = prompt("What year were you born?")
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;

if (userAge > 21) {
  alert("You are old enough to drink in the US")
} else if (userAge == 21){
  alert("You are old enough to drink in the US...barely")
} else {  
  alert("Sorry, you are not old enough to drink in the US")
}


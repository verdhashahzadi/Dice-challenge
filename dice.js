// Generate a random number from 1 to 6
const firstRandomNum = Math.floor(Math.random() * 6) + 1;

// Image path for dice images
const firstDiceImage = "images/dice" + firstRandomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// Generate a random number from 1 to 6
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

// Image path for dice images
const secondDiceImage = "images/dice" + secondRandomNum + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

// Logic for winner
const resultHeading = document.querySelector("h1");

if (firstRandomNum === secondRandomNum) {
  resultHeading.innerHTML = "It's a tie!";
} else if (firstRandomNum > secondRandomNum) {
  resultHeading.innerHTML = "Player 1 wins!";
} else {
  resultHeading.innerHTML = "Player 2 wins!";
}

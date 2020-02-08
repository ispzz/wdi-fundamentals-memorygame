const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

function flipCard(cardID) {
cardsInPlay.push(cards[cardID]);
console.log("User flipped " + cards[cardID])
checkForMatch();
}

flipCard(0);
flipCard(2);


var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped Queen")

var cardTwo = cards[1];
//	cardsInPlay.push(cardTwo);
//	console.log("User flipped Queen")

var cardThree = cards[2];
	cardsInPlay.push(cardThree);
	console.log("User flipped King")

var cardFour = cards[3];
//	cardsInPlay.push(cardFour);
//	console.log("User flipped King");


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
} else {
	console.log("Pick another card");
}
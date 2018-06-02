var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"	
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"	
},
];

var cardsInPlay = [];

var checkForMatch = function(){

}

var flipCard = function (cardId) {

	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			alert("Sorry, try again.")
		}
	}

	console.log("User flipped " + cards[cardId].rank);
	console.log("cardImage " + cards[cardId].cardImage);
	console.log("suit " + cards[cardId].suit);

checkForMatch();
}

flipCard(0);
flipCard(2);



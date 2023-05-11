import "./App.css";
import { useState, useRef } from "react";

const cardPaths = new Map();
// const Rank = [
//   "Ace",
//   "Two",
//   "Three",
//   "Four",
//   "Five",
//   "Six",
//   "Seven",
//   "Eight",
//   "Nine",
//   "Ten",
//   "Jack",
//   "Queen",
//   "King",
// ];
// const Suit = ["Clubs", "Diamonds", "Spades"];

// for (let i = 0; i < Suit.length; i++) {
//   for (let j = 0; i < Rank.length; j++) {
//     cardPaths.set(
//       `${Suit[i]} of ${Rank[j]}`,
//       `./images/${Suit[i]}_of_${Rank[j]}`
//     );
//   }
// }
cardPaths.set("Ace of Spades", "./images/Ace_of_Spades.jpg");
cardPaths.set("Two of Spades", "./images/Two_of_Spades.jpg");
cardPaths.set("Three of Spades", "./images/Three_of_Spades.jpg");
cardPaths.set("Four of Spades", "./images/Four_of_Spades.jpg");
cardPaths.set("Five of Spades", "./images/Five_of_Spades.jpg");
cardPaths.set("Six of Spades", "./images/Six_of_Spades.jpg");
cardPaths.set("Seven of Spades", "./images/Seven_of_Spades.jpg");
cardPaths.set("Eight of Spades", "./images/Eight_of_Spades.jpg");
cardPaths.set("Nine of Spades", "./images/Nine_of_Spades.jpg");
cardPaths.set("Ten of Spades", "./images/Ten_of_Spades.jpg");
cardPaths.set("Jack of Spades", "./images/Jack_of_Spades.jpg");
cardPaths.set("Queen of Spades", "./images/Queen_of_Spades.jpg");
cardPaths.set("King of Spades", "./images/King_of_Spades.jpg");
cardPaths.set("Ace of Clubs", "./images/Ace_of_Clubs.jpg");
cardPaths.set("Two of Clubs", "./images/Two_of_Clubs.jpg");
cardPaths.set("Three of Clubs", "./images/Three_of_Clubs.jpg");
cardPaths.set("Four of Clubs", "./images/Four_of_Clubs.jpg");
cardPaths.set("Five of Clubs", "./images/Five_of_Clubs.jpg");
cardPaths.set("Six of Clubs", "./images/Six_of_Clubs.jpg");
cardPaths.set("Seven of Clubs", "./images/Seven_of_Clubs.jpg");
cardPaths.set("Eight of Clubs", "./images/Eight_of_Clubs.jpg");
cardPaths.set("Nine of Clubs", "./images/Nine_of_Clubs.jpg");
cardPaths.set("Ten of Clubs", "./images/Ten_of_Clubs.jpg");
cardPaths.set("Jack of Clubs", "./images/Jack_of_Clubs.jpg");
cardPaths.set("Queen of Clubs", "./images/Queen_of_Clubs.jpg");
cardPaths.set("King of Clubs", "./images/King_of_Clubs.jpg");
cardPaths.set("Ace of Diamonds", "./images/Ace_of_Diamonds.jpg");
cardPaths.set("Two of Diamonds", "./images/Two_of_Diamonds.jpg");
cardPaths.set("Three of Diamonds", "./images/Three_of_Diamonds.jpg");
cardPaths.set("Four of Diamonds", "./images/Four_of_Diamonds.jpg");
cardPaths.set("Five of Diamonds", "./images/Five_of_Diamonds.jpg");
cardPaths.set("Six of Diamonds", "./images/Six_of_Diamonds.jpg");
cardPaths.set("Seven of Diamonds", "./images/Seven_of_Diamonds.jpg");
cardPaths.set("Eight of Diamonds", "./images/Eight_of_Diamonds.jpg");
cardPaths.set("Nine of Diamonds", "./images/Nine_of_Diamonds.jpg");
cardPaths.set("Ten of Diamonds", "./images/Ten_of_Diamonds.jpg");
cardPaths.set("Jack of Diamonds", "./images/Jack_of_Diamonds.jpg");
cardPaths.set("Queen of Diamonds", "./images/Queen_of_Diamonds.jpg");
cardPaths.set("King of Diamonds", "./images/King_of_Diamonds.jpg");
cardPaths.set("Ace of Hearts", "./images/Ace_of_Hearts.jpg");
cardPaths.set("Two of Hearts", "./images/Two_of_Hearts.jpg");
cardPaths.set("Three of Hearts", "./images/Three_of_Hearts.jpg");
cardPaths.set("Four of Hearts", "./images/Four_of_Hearts.jpg");
cardPaths.set("Five of Hearts", "./images/Five_of_Hearts.jpg");
cardPaths.set("Six of Hearts", "./images/Six_of_Hearts.jpg");
cardPaths.set("Seven of Hearts", "./images/Seven_of_Hearts.jpg");
cardPaths.set("Eight of Hearts", "./images/Eight_of_Hearts.jpg");
cardPaths.set("Nine of Hearts", "./images/Nine_of_Hearts.jpg");
cardPaths.set("Ten of Hearts", "./images/Ten_of_Hearts.jpg");
cardPaths.set("Jack of Hearts", "./images/Jack_of_Hearts.jpg");
cardPaths.set("Queen of Hearts", "./images/Queen_of_Hearts.jpg");
cardPaths.set("King of Hearts", "./images/King_of_Hearts.jpg");

const getBackendHand = () => {
  const cards = [
    "Ace of Spades",
    "Two of Diamonds",
    "Eight of Clubs",
    "King of Hearts",
    "Queen of Diamonds",
  ];
  return cards;
};

const PlayerHand = () => {
  // Put a map to connect array values to image paths
  const [prompt, spawnPrompt] = useState(false);
  const HandConstructor = (numCards) => {
    const cardArray = getBackendHand();
    let cardImages = [];
    for (let i = 0; i < numCards; i++) {
      cardImages.push(
        <div className="playerCard">
          <button
            type="button"
            id="playerCard"
            onClick={() => {
              spawnPrompt(true);
            }}
          >
            <img src={cardPaths.get(cardArray[i])} alt="Player Card" />
          </button>
        </div>
      );
    }
    return cardImages;
  };
  if (prompt) {
    return (
      <div className="PlayerHand">
        <div className="buttonPrompt">
          <button type="button">Ask</button>
          <button type="button" onClick={() => spawnPrompt(false)}>
            Continue
          </button>
        </div>
        {HandConstructor(5)}
      </div>
    );
  }
  return <div className="PlayerHand">{HandConstructor(5)}</div>;
};

export default PlayerHand;

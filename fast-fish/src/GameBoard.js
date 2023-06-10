import "./App.css";
import AceOfSpades from "./assets/images/Ace_of_Spades.jpg";
import TwoOfSpades from "./assets/images/Two_of_Spades.jpg";
import ThreeOfSpades from "./assets/images/Three_of_Spades.jpg";
import FourOfSpades from "./assets/images/Four_of_Spades.jpg";
import FiveOfSpades from "./assets/images/Five_of_Spades.jpg";
import SixOfSpades from "./assets/images/Six_of_Spades.jpg";
import SevenOfSpades from "./assets/images/Seven_of_Spades.jpg";
import EightOfSpades from "./assets/images/Eight_of_Spades.jpg";
import NineOfSpades from "./assets/images/Nine_of_Spades.jpg";
import TenOfSpades from "./assets/images/Ten_of_Spades.jpg";
import JackOfSpades from "./assets/images/Jack_of_Spades.jpg";
import QueenOfSpades from "./assets/images/Queen_of_Spades.jpg";
import KingOfSpades from "./assets/images/King_of_Spades.jpg";
import AceOfClubs from "./assets/images/Ace_of_Clubs.jpg";
import TwoOfClubs from "./assets/images/Two_of_Clubs.jpg";
import ThreeOfClubs from "./assets/images/Three_of_Clubs.jpg";
import FourOfClubs from "./assets/images/Four_of_Clubs.jpg";
import FiveOfClubs from "./assets/images/Five_of_Clubs.jpg";
import SixOfClubs from "./assets/images/Six_of_Clubs.jpg";
import SevenOfClubs from "./assets/images/Seven_of_Clubs.jpg";
import EightOfClubs from "./assets/images/Eight_of_Clubs.jpg";
import NineOfClubs from "./assets/images/Nine_of_Clubs.jpg";
import TenOfClubs from "./assets/images/Ten_of_Clubs.jpg";
import JackOfClubs from "./assets/images/Jack_of_Clubs.jpg";
import QueenOfClubs from "./assets/images/Queen_of_Clubs.jpg";
import KingOfClubs from "./assets/images/King_of_Clubs.jpg";
import AceOfDiamonds from "./assets/images/Ace_of_Diamonds.jpg";
import TwoOfDiamonds from "./assets/images/Two_of_Diamonds.jpg";
import ThreeOfDiamonds from "./assets/images/Three_of_Diamonds.jpg";
import FourOfDiamonds from "./assets/images/Four_of_Diamonds.jpg";
import FiveOfDiamonds from "./assets/images/Five_of_Diamonds.jpg";
import SixOfDiamonds from "./assets/images/Six_of_Diamonds.jpg";
import SevenOfDiamonds from "./assets/images/Seven_of_Diamonds.jpg";
import EightOfDiamonds from "./assets/images/Eight_of_Diamonds.jpg";
import NineOfDiamonds from "./assets/images/Nine_of_Diamonds.jpg";
import TenOfDiamonds from "./assets/images/Ten_of_Diamonds.jpg";
import JackOfDiamonds from "./assets/images/Jack_of_Diamonds.jpg";
import QueenOfDiamonds from "./assets/images/Queen_of_Diamonds.jpg";
import KingOfDiamonds from "./assets/images/King_of_Diamonds.jpg";
import AceOfHearts from "./assets/images/Ace_of_Hearts.jpg";
import TwoOfHearts from "./assets/images/Two_of_Hearts.jpg";
import ThreeOfHearts from "./assets/images/Three_of_Hearts.jpg";
import FourOfHearts from "./assets/images/Four_of_Hearts.jpg";
import FiveOfHearts from "./assets/images/Five_of_Hearts.jpg";
import SixOfHearts from "./assets/images/Six_of_Hearts.jpg";
import SevenOfHearts from "./assets/images/Seven_of_Hearts.jpg";
import EightOfHearts from "./assets/images/Eight_of_Hearts.jpg";
import NineOfHearts from "./assets/images/Nine_of_Hearts.jpg";
import TenOfHearts from "./assets/images/Ten_of_Hearts.jpg";
import JackOfHearts from "./assets/images/Jack_of_Hearts.jpg";
import QueenOfHearts from "./assets/images/Queen_of_Hearts.jpg";
import KingOfHearts from "./assets/images/King_of_Hearts.jpg";
import CardBack from "./assets/images/back.png";
import { useState } from "react";
import { deck, humanPlayer, computerPlayer } from "./assets/js/script";
import {
  Deck,
  PlayerName,
  BotName,
  TurnIndicator,
  GoFish,
  WinGame,
} from "./CenterBoard";

const cardPaths = new Map();
const playerHand = humanPlayer.getHand();
const botHand = computerPlayer.getHand();
let nextId = 0;

cardPaths.set("Ace of Spades", AceOfSpades);
cardPaths.set("Two of Spades", TwoOfSpades);
cardPaths.set("Three of Spades", ThreeOfSpades);
cardPaths.set("Four of Spades", FourOfSpades);
cardPaths.set("Five of Spades", FiveOfSpades);
cardPaths.set("Six of Spades", SixOfSpades);
cardPaths.set("Seven of Spades", SevenOfSpades);
cardPaths.set("Eight of Spades", EightOfSpades);
cardPaths.set("Nine of Spades", NineOfSpades);
cardPaths.set("Ten of Spades", TenOfSpades);
cardPaths.set("Jack of Spades", JackOfSpades);
cardPaths.set("Queen of Spades", QueenOfSpades);
cardPaths.set("King of Spades", KingOfSpades);
cardPaths.set("Ace of Clubs", AceOfClubs);
cardPaths.set("Two of Clubs", TwoOfClubs);
cardPaths.set("Three of Clubs", ThreeOfClubs);
cardPaths.set("Four of Clubs", FourOfClubs);
cardPaths.set("Five of Clubs", FiveOfClubs);
cardPaths.set("Six of Clubs", SixOfClubs);
cardPaths.set("Seven of Clubs", SevenOfClubs);
cardPaths.set("Eight of Clubs", EightOfClubs);
cardPaths.set("Nine of Clubs", NineOfClubs);
cardPaths.set("Ten of Clubs", TenOfClubs);
cardPaths.set("Jack of Clubs", JackOfClubs);
cardPaths.set("Queen of Clubs", QueenOfClubs);
cardPaths.set("King of Clubs", KingOfClubs);
cardPaths.set("Ace of Diamonds", AceOfDiamonds);
cardPaths.set("Two of Diamonds", TwoOfDiamonds);
cardPaths.set("Three of Diamonds", ThreeOfDiamonds);
cardPaths.set("Four of Diamonds", FourOfDiamonds);
cardPaths.set("Five of Diamonds", FiveOfDiamonds);
cardPaths.set("Six of Diamonds", SixOfDiamonds);
cardPaths.set("Seven of Diamonds", SevenOfDiamonds);
cardPaths.set("Eight of Diamonds", EightOfDiamonds);
cardPaths.set("Nine of Diamonds", NineOfDiamonds);
cardPaths.set("Ten of Diamonds", TenOfDiamonds);
cardPaths.set("Jack of Diamonds", JackOfDiamonds);
cardPaths.set("Queen of Diamonds", QueenOfDiamonds);
cardPaths.set("King of Diamonds", KingOfDiamonds);
cardPaths.set("Ace of Hearts", AceOfHearts);
cardPaths.set("Two of Hearts", TwoOfHearts);
cardPaths.set("Three of Hearts", ThreeOfHearts);
cardPaths.set("Four of Hearts", FourOfHearts);
cardPaths.set("Five of Hearts", FiveOfHearts);
cardPaths.set("Six of Hearts", SixOfHearts);
cardPaths.set("Seven of Hearts", SevenOfHearts);
cardPaths.set("Eight of Hearts", EightOfHearts);
cardPaths.set("Nine of Hearts", NineOfHearts);
cardPaths.set("Ten of Hearts", TenOfHearts);
cardPaths.set("Jack of Hearts", JackOfHearts);
cardPaths.set("Queen of Hearts", QueenOfHearts);
cardPaths.set("King of Hearts", KingOfHearts);
cardPaths.set("Back", CardBack);

const botHasCard = (targetValue) => {
  for (let i = 0; i < botHand.getCardCount(); i++) {
    if (botHand.viewCards()[i].getRank() === targetValue) {
      return true;
    }
  }
  return false;
};

const playerHasCard = (targetValue) => {
  for (let i = 0; i < playerHand.getCardCount(); i++) {
    if (playerHand.viewCards()[i].getRank() === targetValue) {
      return true;
    }
  }
  return false;
};

const fillHands = (hand, numCards) => {
  for (let i = 0; i < numCards; i++) {
    deck.passCardAtIndex(0, hand);
    console.log(hand);
  }
};

const Card = (props) => {
  return <img src={cardPaths.get(props.path)} alt="Card" />;
};

const getPlayerHand = () => {
  let cards = [];
  const backendHand = playerHand.viewCards();
  for (let i = 0; i < backendHand.length; i++) {
    cards.push(
      <div className="playerCard">
        <Card path={backendHand[i].toString()} />
      </div>
    );
  }
  return cards;
};

const getBotHand = () => {
  let cards = [];
  const backendHand = botHand.viewCards();
  for (let i = 0; i < backendHand.length; i++) {
    cards.push(
      <div className="playerCard">
        <Card path="Back" />
      </div>
    );
  }
  return cards;
};

const drawCard = (turn) => {
  if (turn) {
    deck.passCardAtIndex(0, botHand);
  } else {
    deck.passCardAtIndex(0, playerHand);
  }
};

const winCondition = (playerScore, botScore) => {
  if (playerHand.viewCards().length < 1 || botHand.viewCards().length < 1) {
    return true;
  } else {
    return false;
  }
};

const winSelector = (turn, callBackFunction) => {
  if (turn) {
    return "Bot";
  } else {
    return "Player";
  }
};

const scorePoints = () => {
  let points = 0;
  const pointsArray = playerHand.getPairs();
  for (let i = 0; i < pointsArray.length; i++) {
    playerHand.removeCard(pointsArray[i]);
  }
  points = pointsArray.length / 2;
  return points;
};

const askBotForCard = (cardValue, callBackFunction) => {
  if (botHasCard(cardValue)) {
    let botIndex = botHand
      .viewCards()
      .findIndex((card) => card.getRank() === cardValue);
    botHand.passCardAtIndex(botIndex, playerHand);
  } else {
    callBackFunction();
  }
};

const askPlayerForCard = (cardValue) => {
  if (playerHasCard(cardValue)) {
    let playerIndex = playerHand
      .viewCards()
      .findIndex((card) => card.getRank() === cardValue);
    playerHand.passCardAtIndex(playerIndex, botHand);
    console.log("Wee I took a card");
    return false;
  } else {
    console.log("Wee I drew a card");
    return true;
  }
};

const botTurn = () => {
  let remainingCards = botHand.viewCards();
  let c = askPlayerForCard(
    remainingCards[Math.floor(Math.random() * remainingCards.length)].getRank()
  );
  if (c) {
    deck.passCardAtIndex(0, botHand);
  }
};

const botPoints = () => {
  let points = 0;
  const pointsArray = botHand.getPairs();
  for (let i = 0; i < pointsArray.length; i++) {
    botHand.removeCard(pointsArray[i]);
  }
  points = pointsArray.length / 2;
  return points;
};

const GameBoard = (props) => {
  const [cards, setCards] = useState(getPlayerHand());
  const [prompt, spawnPrompt] = useState(false);
  const [selectedCard, cardSelector] = useState([]);
  const [botcards, setBotCards] = useState(getBotHand());
  const [score, setScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [turn, endTurn] = useState(false);
  const [fish, goFish] = useState(false);
  const [winner, pickWinner] = useState("");
  const [win, winGame] = useState(false);
  const [draw, allowDraw] = useState(false);
  if (win) {
    return (
      <div className="GameBoard">
        <div className="BotHand">
          <div className="assorted">
            <div className="score">{botScore}</div>
          </div>
          {botcards.map((card) => (
            <button type="button">{card}</button>
          ))}
        </div>
        <div className="CenterBoard">
          <Deck
            callBackFunction={() => {
              drawCard(turn);
              endTurn(!turn);
              setCards(getPlayerHand());
              setBotCards(getBotHand());
            }}
          />
          <PlayerName />
          <WinGame winner={winner} />
          <TurnIndicator turn={turn} />
          <BotName />
        </div>
        <div className="PlayerHand">
          {cards.map((card) => (
            <button
              type="button"
              id="playerCard"
              key={nextId++}
              onClick={() => {
                spawnPrompt(true);
                cardSelector(card);
              }}
            >
              {card}
            </button>
          ))}
          <div className="assorted">
            <button
              type="button"
              onClick={() => {
                setScore(score + scorePoints());
                setCards(getPlayerHand());
              }}
            >
              Score!
            </button>
            <div className="score">{score}</div>
            <button
              type="button"
              onClick={() => {
                playerHand.sortHand();
                setCards(getPlayerHand());
              }}
            >
              Sort!
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (prompt) {
    return (
      <div className="GameBoard">
        <div className="BotHand">
          <div className="assorted">
            <div className="score">{botScore}</div>
          </div>
          {botcards.map((card) => (
            <button type="button">{card}</button>
          ))}
        </div>
        <div className="CenterBoard">
          <Deck
            callBackFunction={() => {
              drawCard(turn);
              endTurn(!turn);
              setCards(getPlayerHand());
              setBotCards(getBotHand());
            }}
          />
          <PlayerName />
          <TurnIndicator turn={turn} />
          <BotName />
        </div>
        <div className="PlayerHand">
          <div className="buttonPrompt">
            <button
              type="button"
              onClick={() => {
                askBotForCard(
                  playerHand
                    .viewCards()
                    [
                      cards.findIndex((card) => card === selectedCard)
                    ].getRank(),
                  () => goFish(true)
                );
                setCards(getPlayerHand());
                setBotCards(getBotHand());
                spawnPrompt(false);
              }}
            >
              Ask!
            </button>
            <button type="button" onClick={() => spawnPrompt(false)}>
              Continue!
            </button>
          </div>
          {cards.map((card) => (
            <button type="button" id="playerCard" key={nextId++}>
              {card}
            </button>
          ))}
        </div>
      </div>
    );
  } else if (fish) {
    return (
      <div className="GameBoard">
        <div className="BotHand">
          <div className="assorted">
            <div className="score">{botScore}</div>
          </div>
          {botcards.map((card) => (
            <button type="button">{card}</button>
          ))}
        </div>
        <div className="CenterBoard">
          <Deck
            callBackFunction={() => {
              drawCard(turn);
              endTurn(!turn);
              setCards(getPlayerHand());
              setBotCards(getBotHand());
            }}
            draw={draw}
          />
          <PlayerName />
          <GoFish
            callBackFunction={() => {
              goFish(false);
              allowDraw(true);
            }}
          />
          <TurnIndicator turn={turn} />
          <BotName />
        </div>
        <div className="PlayerHand">
          {cards.map((card) => (
            <button
              type="button"
              id="playerCard"
              key={nextId++}
              onClick={() => {
                spawnPrompt(true);
                cardSelector(card);
              }}
            >
              {card}
            </button>
          ))}
          <div className="assorted">
            <button
              type="button"
              onClick={() => {
                setScore(score + scorePoints());
                pickWinner(winSelector(turn));
                winGame(winCondition(playerHand.viewCards(), score, botScore));
                setCards(getPlayerHand());
              }}
            >
              Score!
            </button>
            <div className="score">{score}</div>
            <button
              type="button"
              onClick={() => {
                playerHand.sortHand();
                setCards(getPlayerHand());
              }}
            >
              Sort!
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (turn) {
    return (
      <div className="GameBoard">
        <div className="BotHand">
          <div className="assorted">
            <div className="score">{botScore}</div>
          </div>
          {botcards.map((card) => (
            <button type="button">{card}</button>
          ))}
        </div>
        <div className="CenterBoard">
          <Deck
            callBackFunction={() => {
              drawCard(turn);
              allowDraw(false);
              setCards(getPlayerHand());
              setBotCards(getBotHand());
            }}
            draw={draw}
          />
          <PlayerName />
          <TurnIndicator turn={turn} />
          <BotName />
        </div>
        <div className="PlayerHand">
          {cards.map((card) => (
            <button
              type="button"
              id="playerCard"
              key={nextId++}
              disabled
              onClick={() => {
                spawnPrompt(true);
                cardSelector(card);
              }}
            >
              {card}
            </button>
          ))}
          <div className="assorted">
            <button
              type="button"
              onClick={() => {
                setScore(score + scorePoints());
                pickWinner(winSelector(turn));
                winGame(winCondition(playerHand.viewCards(), score, botScore));
                setCards(getPlayerHand());
              }}
            >
              Score!
            </button>
            <div className="score">{score}</div>
            <button
              type="button"
              onClick={() => {
                playerHand.sortHand();
                setCards(getPlayerHand(false));
              }}
            >
              Sort!
            </button>
            <button
              type="button"
              onClick={() => {
                endTurn(!turn);
                allowDraw(true);
                setBotScore(botScore + botPoints());
                setCards(getPlayerHand());
                setBotCards(getBotHand());
              }}
            >
              End Bot Turn!
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="GameBoard">
        <div className="BotHand">
          <div className="assorted">
            <div className="score">{botScore}</div>
          </div>
          {botcards.map((card) => (
            <button type="button">{card}</button>
          ))}
        </div>
        <div className="CenterBoard">
          <Deck
            callBackFunction={() => {
              drawCard(turn);
              endTurn(!turn);
              allowDraw(false);
              botTurn();
              setBotScore(botScore + botPoints());
              setCards(getPlayerHand());
              setBotCards(getBotHand());
            }}
            draw={draw}
          />
          <PlayerName />
          <TurnIndicator turn={turn} />
          <BotName />
        </div>
        <div className="PlayerHand">
          {cards.map((card) => (
            <button
              type="button"
              id="playerCard"
              key={nextId++}
              onClick={() => {
                spawnPrompt(true);
                cardSelector(card);
              }}
            >
              {card}
            </button>
          ))}
          <div className="assorted">
            <button
              type="button"
              onClick={() => {
                setScore(score + scorePoints());
                pickWinner(winSelector(turn));
                winGame(winCondition(playerHand.viewCards(), score, botScore));
                setCards(getPlayerHand());
              }}
            >
              Score!
            </button>
            <div className="score">{score}</div>
            <button
              type="button"
              onClick={() => {
                playerHand.sortHand();
                setCards(getPlayerHand(false));
              }}
            >
              Sort!
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export { GameBoard, playerHand, botHand, fillHands };

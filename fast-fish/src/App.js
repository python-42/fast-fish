import { useState } from "react";
import "./App.css";

const Title = () => {
  const [visiblity, setVisibility] = useState(false);
  if (visiblity) {
    return <div className="Title" style={{ display: "none" }}></div>;
  }
  return (
    <div className="Title">
      <div className="Rules">
        <h3>Rules of Go Fish!</h3>
        <hr />
        <ul>
          <li>Each player begins the game with five cards in their hand.</li>
          <li>You match two cards of the same value to get a "book."</li>
          <li>
            If the player does not have the card, you draw one card and pass.
          </li>
          <li>The player with the most books wins!</li>
        </ul>
      </div>
      <button
        id="startButton"
        type="button"
        onClick={() => setVisibility(true)}
      >
        <h2 style={{ textDecorationLine: "underline" }}>
          🐟 Start Fast Fish! 🎣
        </h2>
      </button>
      <div className="Credits">
        <p>
          Credits:{" "}
          <a
            href="https://github.com/python-42/"
            target="_blank"
            rel="noreferrer"
          >
            Jake H.
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/jagernet-ops"
            target="_blank"
            rel="noreferrer"
          >
            Michael S.
          </a>
        </p>
      </div>
    </div>
  );
};

const BotHand = () => {
  return (
    <div className="BotHand">
      <img src="./images/Ace_of_Diamonds.jpg" alt="Ace of Diamonds" />
      <img src="./images/Two_of_Diamonds.jpg" alt="Two of Diamonds" />
      <img src="./images/Ace_of_Diamonds.jpg" alt="Ace of Diamonds" />
      <img src="./images/Two_of_Diamonds.jpg" alt="Two of Diamonds" />
      <img src="./images/Ace_of_Diamonds.jpg" alt="Ace of Diamonds" />
    </div>
  );
};

const CenterInfo = () => {
  return (
    <div className="CenterBoard">
      <div className="turn">
        <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
      </div>
      <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
    </div>
  );
};

const PlayerHand = () => {
  return (
    <div className="PlayerHand">
      <img src="./images/Ace_of_Diamonds.jpg" alt="Ace of Diamonds" />
      <img src="./images/Two_of_Diamonds.jpg" alt="Two of Diamonds" />
      <img src="./images/Ace_of_Diamonds.jpg" alt="Ace of Diamonds" />
      <img src="./images/Two_of_Diamonds.jpg" alt="Two of Diamonds" />
      <img src="./images/Ace_of_Diamonds.jpg" alt="Ace of Diamonds" />
    </div>
  );
};

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <BotHand />
      <CenterInfo />
      <PlayerHand />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Title />
      <GameBoard />
    </>
  );
};

export default App;

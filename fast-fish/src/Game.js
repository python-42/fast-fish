import { useState } from "react";
import { playerHand, botHand, fillHands, GameBoard } from "./GameBoard";
import "./App.css";

const Game = () => {
  const [visiblity, setVisibility] = useState(false);

  if (visiblity) {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
  return (
    <div className="Title">
      <div className="Rules">
        <h3>Rules of Go Fish!</h3>
        <hr />
        <p>
          Each player begins the game with five cards in their hand. You match
          two cards of the same value to get a "book." If the player does not
          have the card, you draw one card and pass. The player with the most
          books wins!
        </p>
      </div>
      <div className="Credits">
        <p>
          Creators:{" "}
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
      <button
        id="startButton"
        type="button"
        onClick={() => {
          setVisibility(true);
          fillHands(botHand, 5);
          fillHands(playerHand, 5);
        }}
      >
        <h2 style={{ textDecorationLine: "underline" }}>
          🐟 Start Fast Fish! 🎣
        </h2>
      </button>
    </div>
  );
};

export default Game;

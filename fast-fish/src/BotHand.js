import "./App.css";
import { useState } from "react";
import { computerPlayer, computerTurn } from "./assets/js/script";

let cards = [];
const backendHand = computerPlayer.getHand();

const getBotHand = () => {
  const botHandLength = backendHand.viewCards().length;
  for (let i = 0; i < botHandLength; i++) {
    cards.push(
      <button type="button">
        <img src="./images/back.png" alt="back of a card" />
      </button>
    );
  }
};

const takeTurn = () => {
  computerPlayer.takeTurn();
};

const BotHand = () => {
  return <div className="BotHand">{cards}</div>;
};

export { BotHand, getBotHand, backendHand };

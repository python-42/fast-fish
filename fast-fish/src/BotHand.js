import "./App.css";
import { useRef } from "react";

const BotHand = () => {
  const cards = HandLength(5);
  return <div className="BotHand">{cards}</div>;
};

const RemoveCard = (cardRef) => {
  let numberOfCards = HandLength();
};

const HandLength = (numberOfCards) => {
  let cards = [];
  for (let i = 0; i < numberOfCards; i++) {
    cards.push(
      <button type="button" onclick={RemoveCard}>
        <img src="./images/back.png" alt="back of a card" />
      </button>
    );
  }
  return cards;
};

export default BotHand;

import "./App.css";


const BotHand = () => {
  const cards = HandLength();
  return <div className="BotHand">{cards}</div>;
};

const RemoveCard = () => {
  
}

const HandLength = (numCards = 5) => {
  let cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(<img src="./images/back.png" alt="back of a card" />);
  }
  return cards;
};

export default BotHand;

import "./App.css";

const BotHand = (numberOfCards = 5) => {
  // let cards = [];
  // for (let i = 0; i < numberOfCards; i++) {
  //   cards.push("Apple");
  // }
  // return cards.map((card) => <div className="BotHand">{card}</div>);
  return (
    <div className="BotHand">
      <img src="./images/back.png" alt="botcard" />
      <img src="./images/back.png" alt="botcard" />
      <img src="./images/back.png" alt="botcard" />
      <img src="./images/back.png" alt="botcard" />
      <img src="./images/back.png" alt="botcard" />
    </div>
  );
};

export default BotHand;

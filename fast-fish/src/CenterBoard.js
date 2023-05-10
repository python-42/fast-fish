import "./App.css";

const PlayerName = () => {
  return (
    <input
      id="PlayerName"
      className="PlayerText"
      type="text"
      placeholder="Enter Player Name: "
    />
  );
};

const BotName = () => {
  return (
    <input
      id="BotName"
      className="PlayerText"
      type="text"
      placeholder="Enter Bot Name: "
    />
  );
};

const TurnIndicator = () => {
  return (
    <div className="turn">
      <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
    </div>
  );
};

const Deck = () => {
  return (
    <button type="button" id="DrawCard">
      <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
    </button>
  );
};

const CenterBoard = () => {
  return (
    <div className="CenterBoard">
      <Deck />
      <PlayerName />
      <TurnIndicator />
      <BotName />
    </div>
  );
};

export default CenterBoard;

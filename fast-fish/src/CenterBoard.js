import "./App.css";

const CenterBoard = () => {
  return (
    <div className="CenterBoard">
      <button type="button" id="DrawCard">
        <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
      </button>
      <input
        id="PlayerName"
        className="PlayerText"
        type="text"
        placeholder="Enter Player Name: "
      />
      <div className="turn">
        <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
      </div>
      <input
        id="BotName"
        className="PlayerText"
        type="text"
        placeholder="Enter Bot Name: "
      />
    </div>
  );
};

export default CenterBoard;

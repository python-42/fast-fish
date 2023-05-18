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

const GoFish = () => {
  return (
    <div className="popup">
      <img src="./images/go-fish.png" alt="go fish logo" />
    </div>
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

const TurnIndicator = (props) => {
  if (props.turn) {
    return (
      <div className="turn">
        <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
      </div>
    );
  } else if (!props.turn) {
    return (
      <div className="turn">
        <img id="turnIcon" src="./images/player_turn.png" alt="player icon" />
      </div>
    );
  }
};

const Deck = (props) => {
  return (
    <button type="button" id="DrawCard" onClick={() => props.callBackFunction}>
      <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
    </button>
  );
};

export { Deck, PlayerName, TurnIndicator, BotName };

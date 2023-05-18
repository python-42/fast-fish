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

const GoFish = (props) => {
  return (
    <div className="popup">
      <button type="button" onClick={() => props.callBackFunction()}>
        <img src="./images/go-fish.png" alt="go fish logo" />
      </button>
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
  if (props.turn === true) {
    return (
      <div className="turn">
        <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
      </div>
    );
  } else if (props.turn === false) {
    return (
      <div className="turn">
        <img id="turnIcon" src="./images/player_turn.png" alt="player icon" />
      </div>
    );
  }
};

const Deck = (props) => {
  return (
    <button
      type="button"
      id="DrawCard"
      onClick={() => props.callBackFunction()}
    >
      <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
    </button>
  );
};

export { Deck, PlayerName, TurnIndicator, BotName, GoFish };

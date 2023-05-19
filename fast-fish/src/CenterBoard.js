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

const WinGame = (props) => {
  if (props.winner === "Bot") {
    return (
      <div className="winMessage">
        <button type="button" onClick={() => window.location.reload()}>
          <img src="./images/you_lose.png" alt="lose message" />
        </button>
      </div>
    );
  } else if (props.winner === "Player") {
    return (
      <div className="winMessage">
        <button type="button" onClick={() => window.location.reload()}>
          <img src="./images/you_win.png" alt="win message" />
        </button>
      </div>
    );
  }
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
  if (props.draw) {
    return (
      <button
        type="button"
        id="DrawCard"
        onClick={() => props.callBackFunction()}
      >
        <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        id="DrawCard"
        onClick={() => props.callBackFunction()}
        disabled
      >
        <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
      </button>
    );
  }
};

export { Deck, PlayerName, TurnIndicator, BotName, GoFish, WinGame };

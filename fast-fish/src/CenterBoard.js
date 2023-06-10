import "./App.css";
import YOULOSE from "./assets/images/you_lose.png";
import YOUWIN from "./assets/images/you_win.png";
import GOFISH from "./assets/images/go-fish.png";
import PLAYERTURN from "./assets/images/player_turn.png";
import BOTTURN from "./assets/images/bot_turn.png";
import DECK from "./assets/images/back.png";

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
          <img src={YOULOSE} alt="lose message" />
        </button>
      </div>
    );
  } else if (props.winner === "Player") {
    return (
      <div className="winMessage">
        <button type="button" onClick={() => window.location.reload()}>
          <img src={YOUWIN} alt="win message" />
        </button>
      </div>
    );
  }
};

const GoFish = (props) => {
  return (
    <div className="popup">
      <button type="button" onClick={() => props.callBackFunction()}>
        <img src={GOFISH} alt="go fish logo" />
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
        <img id="turnIcon" src={BOTTURN} alt="bot icon" />
      </div>
    );
  } else if (props.turn === false) {
    return (
      <div className="turn">
        <img id="turnIcon" src={PLAYERTURN} alt="player icon" />
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
        <img id="deckIcon" src={DECK} alt="Deck Icon" />
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
        <img id="deckIcon" src={DECK} alt="Deck Icon" />
      </button>
    );
  }
};

export { Deck, PlayerName, TurnIndicator, BotName, GoFish, WinGame };

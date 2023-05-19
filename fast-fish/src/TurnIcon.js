import "./App.css";
import { useState } from "react";

const BotTurn = () => {
  const [iconState, changeIcon] = useState(false);
    return (
      <div className="turn">
        <button type="button" onclick={() => changeIcon(true)}>
          <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
        </button>
      </div>
    );
};

export default TurnIcon;

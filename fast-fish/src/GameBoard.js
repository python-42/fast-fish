import PlayerHand from "./PlayerHand";
import CenterBoard from "./CenterBoard";
import BotHand from "./BotHand";
import "./App.css";

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <BotHand />
      <CenterBoard />
      <PlayerHand />
    </div>
  );
};

export default GameBoard;

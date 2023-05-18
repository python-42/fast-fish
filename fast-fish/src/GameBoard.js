import { Hand } from "./Hands";
import { CenterBoard } from "./Hands";
import "./App.css";

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <Hand type="Bot" />
      <Hand type="CenterBoard" />
      <Hand type="Player" />
    </div>
  );
};

export default GameBoard;

import Deck from "./cards/Deck";
import ComputerPlayer from "./player/ComputerPlayer";
import HumanPlayer from "./player/HumanPlayer";

export const deck: Deck = new Deck();
export const humanPlayer: HumanPlayer = new HumanPlayer(deck);
export const computerPlayer: ComputerPlayer = new ComputerPlayer(deck);
export let computerTurn: boolean = true;

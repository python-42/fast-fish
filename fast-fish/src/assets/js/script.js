"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computerTurn =
  exports.computerPlayer =
  exports.humanPlayer =
  exports.deck =
    void 0;
const Deck_1 = require("./cards/Deck");
const ComputerPlayer_1 = require("./player/ComputerPlayer");
const HumanPlayer_1 = require("./player/HumanPlayer");
exports.deck = new Deck_1.default();
exports.humanPlayer = new HumanPlayer_1.default(exports.deck);
exports.computerPlayer = new ComputerPlayer_1.default(exports.deck, exports.humanPlayer);
exports.computerTurn = true;

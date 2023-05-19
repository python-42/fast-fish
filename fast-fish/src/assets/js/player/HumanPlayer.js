"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
class HumanPlayer extends Player_1.default {
    takeTurn() {
        throw new Error("Method not implemented.");
    }
}
exports.default = HumanPlayer;

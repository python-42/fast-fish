"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullDeck = void 0;
var Card_1 = require("./Card");
function getFullDeck() {
    var rtn = [];
    var suits = [0 /* Suit.Clubs */, 1 /* Suit.Diamonds */, 2 /* Suit.Hearts */, 3 /* Suit.Spades */];
    for (var i = 0; i < 4; i++) {
        for (var ii = 1; ii < 14; ii++) {
            rtn.push(new Card_1.default(suits[i], ii));
        }
    }
    return rtn;
}
exports.getFullDeck = getFullDeck;

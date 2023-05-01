"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rank = void 0;
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    getSuit() {
        return this.suit;
    }
    getRank() {
        return this.rank;
    }
    toString() {
        return this.rank + " of " + this.suit;
    }
}
exports.default = Card;
var Rank;
(function (Rank) {
    Rank["Ace"] = "Ace";
    Rank["Two"] = "Two";
    Rank["Three"] = "Three";
    Rank["Four"] = "Four";
    Rank["Five"] = "Five";
    Rank["Six"] = "Six";
    Rank["Seven"] = "Seven";
    Rank["Eight"] = "Eight";
    Rank["Nine"] = "Nine";
    Rank["Ten"] = "Ten";
    Rank["Jack"] = "Jack";
    Rank["Queen"] = "Queen";
    Rank["King"] = "King";
})(Rank = exports.Rank || (exports.Rank = {}));

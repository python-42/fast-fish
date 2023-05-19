"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rank = exports.Suit = void 0;
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
        return Rank_String.get(this.rank.valueOf()) + " of " + Suit_String.get(this.suit.valueOf());
    }
}
exports.default = Card;
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 0] = "Clubs";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit = exports.Suit || (exports.Suit = {}));
var Rank;
(function (Rank) {
    Rank[Rank["Ace"] = 0] = "Ace";
    Rank[Rank["Two"] = 1] = "Two";
    Rank[Rank["Three"] = 2] = "Three";
    Rank[Rank["Four"] = 3] = "Four";
    Rank[Rank["Five"] = 4] = "Five";
    Rank[Rank["Six"] = 5] = "Six";
    Rank[Rank["Seven"] = 6] = "Seven";
    Rank[Rank["Eight"] = 7] = "Eight";
    Rank[Rank["Nine"] = 8] = "Nine";
    Rank[Rank["Ten"] = 9] = "Ten";
    Rank[Rank["Jack"] = 10] = "Jack";
    Rank[Rank["Queen"] = 11] = "Queen";
    Rank[Rank["King"] = 12] = "King";
})(Rank = exports.Rank || (exports.Rank = {}));
const Suit_String = new Map();
Suit_String.set(Suit.Clubs, "Clubs");
Suit_String.set(Suit.Diamonds, "Diamonds");
Suit_String.set(Suit.Hearts, "Hearts");
Suit_String.set(Suit.Spades, "Spades");
const Rank_String = new Map();
Rank_String.set(Rank.Ace, "Ace");
Rank_String.set(Rank.Two, "Two");
Rank_String.set(Rank.Three, "Three");
Rank_String.set(Rank.Four, "Four");
Rank_String.set(Rank.Five, "Five");
Rank_String.set(Rank.Six, "Six");
Rank_String.set(Rank.Seven, "Seven");
Rank_String.set(Rank.Eight, "Eight");
Rank_String.set(Rank.Nine, "Nine");
Rank_String.set(Rank.Ten, "Ten");
Rank_String.set(Rank.Jack, "Jack");
Rank_String.set(Rank.Queen, "Queen");
Rank_String.set(Rank.King, "King");

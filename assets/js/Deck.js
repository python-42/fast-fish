"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardCollection_1 = require("./CardCollection");
const Card_1 = require("./Card");
class Deck extends CardCollection_1.default {
    constructor() {
        let cards = [];
        super(52, cards);
        this.cards = this.getFullDeck();
        this.shuffle();
    }
    getFullDeck() {
        let rtn = [];
        let suits = [Card_1.Suit.Clubs, Card_1.Suit.Diamonds, Card_1.Suit.Hearts, Card_1.Suit.Spades];
        for (let i = 0; i < 4; i++) {
            for (let ii = 0; ii < 13; ii++) {
                rtn.push(new Card_1.default(suits[i], ii));
            }
        }
        return rtn;
    }
    shuffle() {
        let a = this.cards;
        this.cards = [];
        let index = 0;
        while (a.length > 0) {
            index = Math.floor(Math.random() * a.length - 1);
            this.cards.push(a.splice(index, 1)[0]);
        }
    }
}
exports.default = Deck;

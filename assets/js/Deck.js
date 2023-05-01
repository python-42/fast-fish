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
    addCard(card) {
        if (this.inCardCollection(card) || this.maxCardCount === this.getCardCount()) {
            return;
        }
        this.cards.push(card);
    }
    mergeCollections(cards) {
    }
    addCards(newCards) {
        for (let i = 0; i < newCards.length; i++) {
            if (!this.inCardCollection(newCards[i])) {
                this.cards.push(newCards[i]);
            }
        }
    }
    removeCard(card) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i] === card) {
                this.cards.splice(i, 1);
                return card;
            }
        }
        return null;
    }
    passCard(card, target) {
        if (!this.inCardCollection(card)) {
            return;
        }
        target.addCard(card);
        this.removeCard(card);
    }
    getFullDeck() {
        let rtn = [];
        let suits = ["Clubs" /* Suit.Clubs */, "Diamonds" /* Suit.Diamonds */, "Hearts" /* Suit.Hearts */, "Spades" /* Suit.Spades */];
        for (let i = 0; i < 4; i++) {
            for (let ii = 1; ii < 14; ii++) {
                rtn.push(new Card_1.default(suits[i], Card_1.Rank[ii]));
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardCollection_1 = require("./CardCollection");
class Hand extends CardCollection_1.default {
    constructor() {
        let cards = [];
        super(52, cards);
    }
    addCard(card) {
    }
    mergeCollections(cards) { }
    addCards(cards) { }
    removeCard(Card) {
        return this.cards[0];
    }
    passCard(card, target) { }
}
exports.default = Hand;

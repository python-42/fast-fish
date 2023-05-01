"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardCollection {
    constructor(maxCardCount, cards) {
        this.cards = [];
        this.maxCardCount = maxCardCount;
    }
    getCardCount() {
        return this.cards.length;
    }
    getMaxCardCount() {
        return this.maxCardCount;
    }
    inCardCollection(card) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i] === card) {
                return true;
            }
        }
        return false;
    }
}
exports.default = CardCollection;

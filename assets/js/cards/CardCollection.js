"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardCollection {
    constructor(maxCardCount, cards) {
        this.cards = [];
        this.maxCardCount = maxCardCount;
    }
    addCard(card) {
        if (this.inCardCollection(card) || this.maxCardCount === this.getCardCount()) {
            return;
        }
        this.cards.push(card);
    }
    addCards(newCards) {
        for (let i = 0; i < newCards.length; i++) {
            if (!this.inCardCollection(newCards[i])) {
                this.addCard(newCards[i]);
            }
        }
    }
    mergeCollections(newCards) {
        this.addCards(newCards.cards);
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
    passCardAtIndex(index, target) {
        target.addCard(this.cards[index]);
        return this.cards.splice(index, 1)[0];
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

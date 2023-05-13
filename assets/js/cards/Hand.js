"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CardCollection_1 = require("./CardCollection");
class Hand extends CardCollection_1.default {
    constructor() {
        let cards = [];
        super(52, cards);
    }
    /**
     * Returns a copy of the internal Card array. Returning the card array directly would allow the external class to modify the internal card array.
     * @returns a Card array identical to the array inside this object
     */
    viewCards() {
        return Array.from(this.cards);
    }
    viewCardsWithoutPairs() {
        let rtn = this.viewCards();
        let pairs = this.getPairs();
        for (let i = 0; i < rtn.length; i++) {
            for (const x of pairs) {
                if (x === rtn[i]) {
                    rtn.splice(i, 1);
                    i--;
                    break;
                }
            }
        }
        return rtn;
    }
    indexOf(card) {
        if (!this.inCardCollection(card)) {
            return -1;
        }
        for (let i = 0; i < this.cards.length; i++) {
            if (card === this.cards[i]) {
                return i;
            }
        }
    }
    /**
     * Returns an array of Card arrays. Each sub array contains two cards whose ranks match. The array contains every matching pair in the hand.
     * @returns An array of Card arrays
     */
    getPairs() {
        if (this.getCardCount() < 2) {
            return [];
        }
        this.sortHand();
        let rtn = [];
        let workspace = this.viewCards();
        while (workspace.length > 0) {
            if (workspace[0].getRank() === workspace[1].getRank()) {
                rtn.push(workspace[0]);
                rtn.push(workspace[1]);
                workspace.splice(0, 2);
            }
            else {
                workspace.splice(0, 1);
            }
        }
        return rtn;
    }
    sortHand() {
        this.cards.sort(this.cardComparator);
    }
    cardComparator(a, b) {
        if (a.getRank() != b.getRank()) {
            return a.getRank() - b.getRank();
        }
        return a.getSuit() - b.getSuit();
    }
}
exports.default = Hand;

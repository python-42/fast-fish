"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = require("../cards/Card");
const Hand_1 = require("../cards/Hand");
class Player {
    constructor(deck) {
        this.hand = new Hand_1.default();
        this.acceptNewHand = true;
        this.deck = deck;
    }
    acceptDeal(initial) {
        if (this.acceptNewHand) {
            this.hand.addCards(initial);
            this.acceptNewHand = false;
        }
    }
    getHand() {
        return this.hand;
    }
    hasCardOfRank(rank) {
        let suits = [Card_1.Suit.Clubs, Card_1.Suit.Diamonds, Card_1.Suit.Hearts, Card_1.Suit.Spades];
        for (let i = 0; i < 4; i++) {
            if (this.hand.inCardCollection(new Card_1.default(suits[i], rank))) {
                this.indexOfCard = this.hand.indexOf(new Card_1.default(suits[i], rank));
                return true;
            }
        }
        return false;
    }
    surrenderCards(rank, toRecieve) {
        if (this.hasCardOfRank(rank)) {
            return this.hand.passCardAtIndex(this.indexOfCard, toRecieve.getHand());
        }
        return undefined;
    }
}
exports.default = Player;

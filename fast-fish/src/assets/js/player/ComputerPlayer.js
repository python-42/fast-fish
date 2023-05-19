"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
class ComputerPlayer extends Player_1.default {
  /**
   * @returns true if the method should be called again to allow the computer to continue its turn sequence
   */
  takeTurn() {
    let pairs = this.hand.getPairs();
    if (pairs.length === this.hand.getCardCount()) {
      //game is over as the hand is empty
      this.pairs = pairs;
      return false;
    }
    if (pairs.length > 0) {
      //gives the UI a chance to update
      this.pairs = pairs;
      for (const x of pairs) {
        this.hand.removeCard(x);
      }
      return true;
    } else {
      let cards = this.hand.viewCardsWithoutPairs();
      let c = this.other.surrenderCards(
        cards[Math.floor(Math.random() * cards.length)].getRank(),
        this
      );
      if (c !== undefined) {
        //other player had the requested card, check if
        this.requestedCard = c;
        return true;
      } else {
        this.deck.passCardAtIndex(0, this.hand);
        if (this.hand.getPairs().length !== 2) {
          return false;
        }
        return true;
      }
    }
  }
  getRequestedCard() {
    return this.requestedCard;
  }
  getPlayedCards() {
    return this.pairs;
  }
}
exports.default = ComputerPlayer;

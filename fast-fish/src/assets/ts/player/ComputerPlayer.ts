import Card from "../cards/Card";
import Deck from "../cards/Deck";
import Player from "./Player";

export default class ComputerPlayer extends Player {
  private pairs: Card[];
  private other: Player;
  private requestedCard: Card;

  public constructor(deck : Deck, other : Player) {
    super(deck);
    this.other = other;
}

  /**
   * @returns true if the method should be called again to allow the computer to continue its turn sequence
   */
  public takeTurn(): boolean {
    let pairs: Card[] = this.hand.getPairs();
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
      let cards: Card[] = this.hand.viewCardsWithoutPairs();
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

  public getRequestedCard(): Card {
    return this.requestedCard;
  }

  public getPlayedCards(): Card[] {
    return this.pairs;
  }
}

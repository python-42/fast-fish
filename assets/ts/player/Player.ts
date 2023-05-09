import Card, { Rank, Suit } from "../cards/Card";
import Deck from "../cards/Deck";
import Hand from "../cards/Hand";

export default abstract class Player {
    protected hand : Hand = new Hand();
    protected deck : Deck;
    private acceptNewHand = true;
    private indexOfCard : number;

    public constructor(deck : Deck) {
        this.deck = deck;
    }

    public abstract takeTurn() : void

    public acceptDeal(initial : Card[]) : void {
        if(this.acceptNewHand) {
            this.hand.addCards(initial);
            this.acceptNewHand = false;
        }
    }

    public getHand() : Hand {
        return this.hand;
    }

    private hasCardOfRank(rank : Rank) : boolean {
        let suits : Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
        for (let i = 0; i < 4; i++) {
            if(this.hand.inCardCollection(new Card(suits[i], rank))) {
                this.indexOfCard = this.hand.indexOf(new Card(suits[i], rank));
                return true;
            }
        }
        return false;
    }

    public surrenderCards(rank : Rank, toRecieve : Player) : boolean {
        if(this.hasCardOfRank(rank)) {
            this.hand.passCardAtIndex(this.indexOfCard, toRecieve.getHand());
            return true;
        }
        return false;
    }
}
import CardCollection from "./CardCollection";
import Card, { Rank, Suit } from "./Card"

export default class Deck extends CardCollection {
    
    public constructor () {
        let cards : Card[] = [];
        super(52, cards);

        this.cards = this.getFullDeck();
        this.shuffle();
    }

    public override addCard(card : Card) : void {
        if(this.inCardCollection(card) || this.maxCardCount === this.getCardCount()) {
            return;
        }
        this.cards.push(card);
    }

    public override mergeCollections(cards : CardCollection) : void {
        
    }

    public override addCards(newCards : Card[]) : void {
        for (let i = 0; i < newCards.length; i++) {
            if(! this.inCardCollection(newCards[i])) {
                this.cards.push(newCards[i]);
            }
        }
    }

    public override removeCard(card : Card) : Card {
        for (let i = 0; i < this.cards.length; i++) {
            if(this.cards[i] === card) {
                this.cards.splice(i, 1);
                return card;
            }
        }
        return null;
    }

    public override passCard(card : Card, target : CardCollection) : void {
        if(!this.inCardCollection(card)) {
            return;
        }
        target.addCard(card);
        this.removeCard(card);

    }

    private getFullDeck() : Card[] {
        let rtn : Card[] = [];
        let suits : Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
        for (let i = 0; i < 4; i++) {
            for (let ii = 1; ii < 14; ii++) {
                rtn.push(new Card(suits[i], Rank[ii]));
            }
        }
        return rtn;
    }

    public shuffle() : void {
        let a : Card[] = this.cards;
        this.cards = [];
        let index : number = 0;
        while (a.length > 0) {
            index = Math.floor(Math.random() * a.length - 1)
            this.cards.push(a.splice(index, 1)[0]);
        }
    }

}
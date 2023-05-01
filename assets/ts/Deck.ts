import CardCollection from "./CardCollection";
import Card, { Rank, Suit } from "./Card"

export default class Deck extends CardCollection {
    
    public constructor () {
        let cards : Card[] = [];
        super(52, cards);

        this.cards = this.getFullDeck();
        this.shuffle();
    }

    private getFullDeck() : Card[] {
        let rtn : Card[] = [];
        let suits : Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
        for (let i = 0; i < 4; i++) {
            for (let ii = 1; ii < 14; ii++) {
                rtn.push(new Card(suits[i], ii));
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
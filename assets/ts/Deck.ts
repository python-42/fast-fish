import CardCollection from "./CardCollection";
import Card from "./Card"

export default class Deck extends CardCollection {
    
    public constructor () {
        let cards : Card[] = [];
        super(52, cards);
    }


    public override addCard(card : Card) : void {
        
    }

    public override mergeCollections(cards : CardCollection) : void {

    }

    public override addCards(cards : Card[]) : void {}

    public override removeCard(Card : Card) : Card {
        return this.cards[0];
    }

    public override passCard(card : Card, target : CardCollection) : void {}

}
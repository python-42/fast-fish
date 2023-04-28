import Card from "./Card"

export default abstract class CardCollection {
    protected readonly maxCardCount : number;
    protected cards : Card[] = [];
    
    public constructor (maxCardCount : number, cards : Card[]) {
        this.maxCardCount = maxCardCount;
    }

    public abstract addCard(card : Card) : void

    public abstract addCards(cards : Card[]) : void

    public abstract mergeCollections(cards : CardCollection) : void

    public abstract removeCard(Card : Card) : Card

    public abstract passCard(card : Card, target : CardCollection) : void

    public getCardCount() : number {
        return this.cards.length;
    }

    public getMaxCardCount() : number {
        return this.maxCardCount;
    }

    public inCollection(card : Card) : boolean {
        for(let i = 0; i < this.cards.length; i++){
            if(this.cards[i] === card){
                return true;
            }
        }
        return false;
    }

}
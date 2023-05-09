import Card from "./Card"

export default abstract class CardCollection {
    protected readonly maxCardCount : number;
    protected cards : Card[] = [];
    
    public constructor (maxCardCount : number, cards : Card[]) {
        this.maxCardCount = maxCardCount;
    }

    public addCard(card : Card) : void {
        if(this.inCardCollection(card) || this.maxCardCount === this.getCardCount()) {
            return;
        }
        this.cards.push(card);
    }

    public addCards(newCards : Card[]) : void {
        for (let i = 0; i < newCards.length; i++) {
            if(! this.inCardCollection(newCards[i])) {
                this.addCard(newCards[i]);
            }
        }
    }

    public mergeCollections(newCards : CardCollection) : void {
        this.addCards(newCards.cards);
    }

    public removeCard(card : Card) : Card {
        for (let i = 0; i < this.cards.length; i++) {
            if(this.cards[i] === card) {
                this.cards.splice(i, 1);
                return card;
            }
        }
        return null;
    }

    public passCard(card : Card, target : CardCollection) : void {
        if(!this.inCardCollection(card)) {
            return;
        }
        target.addCard(card);
        this.removeCard(card);
    }

    public passCardAtIndex(index : number, target : CardCollection) : Card {
        target.addCard(this.cards[index])
        return this.cards.splice(index, 1)[0];
    }

    public getCardCount() : number {
        return this.cards.length;
    }

    public getMaxCardCount() : number {
        return this.maxCardCount;
    }

    public inCardCollection(card : Card) : boolean {
        for(let i = 0; i < this.cards.length; i++){
            if(this.cards[i] === card){
                return true;
            }
        }
        return false;
    }

}
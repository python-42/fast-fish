export default class Card {
    private readonly suit : Suit;
    private readonly rank : number;
    
    public constructor (suit : Suit, rank : number) {
        this.suit = suit;
        this.rank = rank;
    }

    public getSuit() : Suit  {
        return this.suit;
    }

    public getRank() : number {
        return this.rank;
    }

}

//alphabetical order
export const enum Suit {
    Clubs = 0,
    Diamonds = 1,
    Hearts = 2,
    Spades = 3 
    
}

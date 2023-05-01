export default class Card {
    private readonly suit : Suit;
    private readonly rank : Rank;
    
    public constructor (suit : Suit, rank : Rank) {
        this.suit = suit;
        this.rank = rank;
    }

    public getSuit() : Suit  {
        return this.suit;
    }

    public getRank() : Rank {
        return this.rank;
    }

    public toString() : String {
        return this.rank + " of " + this.suit;       
    }

}

//alphabetical order
export const enum Suit {
    Clubs = "Clubs",
    Diamonds = "Diamonds",
    Hearts = "Hearts",
    Spades = "Spades" 
}

export enum Rank {
    Ace = "Ace",
    Two = "Two",
    Three = "Three",
    Four = "Four",
    Five = "Five",
    Six = "Six",
    Seven = "Seven", 
    Eight = "Eight",
    Nine = "Nine",
    Ten = "Ten",
    Jack = "Jack",
    Queen = "Queen",
    King = "King"
}
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
        return Rank_String.get(this.rank.valueOf()) + " of " + Suit_String.get(this.suit.valueOf());
    }

}

export enum Suit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

export enum Rank {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven, 
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
}

const Suit_String = new Map<Suit, String>();
Suit_String.set(Suit.Clubs, "Clubs");
Suit_String.set(Suit.Diamonds, "Diamonds");
Suit_String.set(Suit.Hearts, "Hearts");
Suit_String.set(Suit.Spades, "Spades");

const Rank_String = new Map<Rank, String>();
Rank_String.set(Rank.Ace , "Ace");
Rank_String.set(Rank.Two , "Two");
Rank_String.set(Rank.Three , "Three");
Rank_String.set(Rank.Four , "Four");
Rank_String.set(Rank.Five , "Five");
Rank_String.set(Rank.Six , "Six");
Rank_String.set(Rank.Seven , "Seven"); 
Rank_String.set(Rank.Eight , "Eight");
Rank_String.set(Rank.Nine , "Nine");
Rank_String.set(Rank.Ten , "Ten");
Rank_String.set(Rank.Jack , "Jack");
Rank_String.set(Rank.Queen , "Queen");
Rank_String.set(Rank.King , "King");
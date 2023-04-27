import Card from "./Card"
import { Suit } from "./Card"

export function getFullDeck() : Card[] {
    let rtn : Card[] = [];
    let suits : Suit[] = [Suit.Clubs, Suit.Diamonds, Suit.Hearts, Suit.Spades];
    for (let i = 0; i < 4; i++) {
        for (let ii = 1; ii < 14; ii++) {
            rtn.push(new Card(suits[i], ii));
        }
    }
    return rtn;
}
import Card from "./Card";
export function getFullDeck() {
    let rtn = [];
    let suits = [0 /* Suit.Clubs */, 1 /* Suit.Diamonds */, 2 /* Suit.Hearts */, 3 /* Suit.Spades */];
    for (let i = 0; i < 4; i++) {
        for (let ii = 1; ii < 14; ii++) {
            rtn.push(new Card(suits[i], ii));
        }
    }
    return rtn;
}

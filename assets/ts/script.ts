import Card, { Rank, Suit } from "./Card";

let c = new Card(Suit.Diamonds, Rank.Ace);
let c2 = new Card(Suit.Spades, Rank.Queen);

console.log("" + c);
console.log("" + c2);
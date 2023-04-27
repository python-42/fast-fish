import CardCollection from "./CardCollection";
export default class Deck extends CardCollection {
    constructor() {
        let cards = [];
        super(52, cards);
    }
    addCard(card) {
    }
    mergeCollections(cards) {
    }
    addCards(cards) { }
    removeCard(Card) {
        return this.cards[0];
    }
    passCard(card, target) { }
}

export default class CardCollection {
    constructor(maxCardCount, cards) {
        this.cards = [];
        this.maxCardCount = maxCardCount;
    }
    getCardCount() {
        return this.cards.length;
    }
    getMaxCardCount() {
        return this.maxCardCount;
    }
}

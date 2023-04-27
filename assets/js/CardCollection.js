"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardCollection = /** @class */ (function () {
    function CardCollection(maxCardCount, cards) {
        this.cards = [];
        this.maxCardCount = maxCardCount;
    }
    CardCollection.prototype.getCardCount = function () {
        return this.cards.length;
    };
    CardCollection.prototype.getMaxCardCount = function () {
        return this.maxCardCount;
    };
    return CardCollection;
}());
exports.default = CardCollection;

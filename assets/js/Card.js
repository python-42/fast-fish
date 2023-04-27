"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getRank = function () {
        return this.rank;
    };
    return Card;
}());
exports.default = Card;

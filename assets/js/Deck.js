"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CardCollection_1 = require("./CardCollection");
var Deck = /** @class */ (function (_super) {
    __extends(Deck, _super);
    function Deck() {
        var cards = [];
        return _super.call(this, 52, cards) || this;
    }
    Deck.prototype.addCard = function (card) {
    };
    Deck.prototype.mergeCollections = function (cards) {
    };
    Deck.prototype.addCards = function (cards) { };
    Deck.prototype.removeCard = function (Card) {
        return this.cards[0];
    };
    Deck.prototype.passCard = function (card, target) { };
    return Deck;
}(CardCollection_1.default));
exports.default = Deck;

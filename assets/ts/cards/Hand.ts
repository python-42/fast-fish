import CardCollection from "./CardCollection";
import Card, { Rank } from "./Card"

export default class Hand extends CardCollection {

    public constructor() {
        let cards: Card[] = [];
        super(52, cards);
    }

    /**
     * Returns a copy of the internal Card array. Returning the card array directly would allow the external class to modify the internal card array.
     * @returns a Card array identical to the array inside this object
     */
    public viewCards(): Card[] {
        return Array.from(this.cards);
    }

    /**
     * Returns an array of Card arrays. Each sub array contains two cards whose ranks match. The array contains every matching pair in the hand. 
     * @returns An array of Card arrays
     */
    public getPairs(): Card[][] {
        if (this.getCardCount() < 2) {
            return [];
        }

        this.sortHand();
        let rtn: Card[][] = []
        let workspace: Card[] = this.viewCards();

        while (workspace.length > 0) {
            if (workspace[0].getRank() === workspace[1].getRank()) {
                rtn.push([workspace[0], workspace[1]]);
                workspace.splice(0, 2);
            } else {
                workspace.splice(0, 1);
            }
        }
        return rtn;
    }

    private sortHand(): void {
        this.cards.sort(this.cardComparator);
    }

    private cardComparator(a: Card, b: Card): number {
        if (a.getRank() != b.getRank()) {
            return a.getRank() - b.getRank();
        }
        return a.getSuit() - b.getSuit();
    }

}
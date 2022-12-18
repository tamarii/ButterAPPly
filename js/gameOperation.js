const suits = ["♠", "♣", "♥", "♦"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
export class Deck {
    cards;
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }
    pop() {
        return this.cards.shift();
    }
    push(card) {
        return this.cards.push(card);
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}
class Card {
    suit;
    value;
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    get color() {
        return this.suit === "♠" || this.suit === "♣" ? "black" : "red";
    }
    getHTML() {
        const cardDiv = document.createElement("div");
        cardDiv.innerText = this.suit;
        cardDiv.classList.add("cardi", this.color);
        cardDiv.dataset.value = `${this.value} ${this.suit}`;
        return cardDiv;
    }
}
function freshDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value);
        });
    });
}

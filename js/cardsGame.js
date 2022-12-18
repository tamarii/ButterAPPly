import { Deck } from './gameOperation.js';
const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
};
const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");
let playerDeck;
let computerDeck;
let inRound;
let stop;
document.addEventListener("click", () => {
    if (stop) {
        startGame();
        return;
    }
    if (inRound) {
        clearBeforeRound();
    }
    else {
        flipCards();
    }
});
startGame();
function startGame() {
    const deck = new Deck();
    deck.shuffle();
    const deckMidpoint = Math.ceil(deck.cards.length / 2);
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.cards.length));
    inRound = false;
    stop = false;
    clearBeforeRound();
}
function flipCards() {
    inRound = true;
    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();
    playerCardSlot.appendChild(playerCard.getHTML());
    computerCardSlot.appendChild(computerCard.getHTML());
    updateDeckCount();
    if (isRoundWinner(playerCard, computerCard)) {
        text.innerText = "Win";
        playerDeck.push(playerCard);
        playerDeck.push(computerCard);
    }
    else if (isRoundWinner(computerCard, playerCard)) {
        text.innerText = "Lose";
        computerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }
    else {
        text.innerText = "Draw";
        playerDeck.push(playerCard);
        computerDeck.push(computerCard);
    }
    if (gameOver(playerDeck)) {
        text.innerText = "YOU LOSE!!!";
        stop = true;
    }
    else if (gameOver(computerDeck)) {
        text.innerText = "YOU WIN!!!";
        stop = true;
    }
}
function clearBeforeRound() {
    inRound = false;
    text.innerText = "";
    computerCardSlot.innerHTML = "";
    playerCardSlot.innerHTML = "";
    updateDeckCount();
}
function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.cards.length;
    playerDeckElement.innerText = playerDeck.cards.length;
}
function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value];
}
function gameOver(deck) {
    return deck.cards.length === 0;
}

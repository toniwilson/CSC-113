const words = [
    { word: "benevolent", definition: "well meaning and kindly" },
    { word: "candid", definition: "truthful and straightforward" },
    { word: "elated", definition: "ecstatically happy" },
    { word: "frugal", definition: "sparing or economical with resources" }
];

let score = 0;
let timeLeft = 30;
let timerInterval;

const wordEl = document.getElementById("word");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startGame);

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreEl.textContent = score;
    timerEl.textContent = timeLeft;

    startBtn.style.display = "none";

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    loadWord();
}

function loadWord() {
    const random = words[Math.floor(Math.random() * words.length)];
    wordEl.textContent = random.word;

    const choices = shuffle([
        random.definition,
        ...getRandomDefinitions(2, random.definition)
    ]);

    choicesEl.innerHTML = "";
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(choice, random.definition);
        choicesEl.appendChild(btn);
    });
}

function checkAnswer(choice, correct) {
    if (choice === correct) {
        score++;
        scoreEl.textContent = score;
    }
    loadWord();
}

function endGame() {
    clearInterval(timerInterval);
    wordEl.textContent = "Game Over!";
    choicesEl.innerHTML = "";
    startBtn.style.display = "block";
    startBtn.textContent = "Play Again";
}

function getRandomDefinitions(count, exclude) {
    const defs = words
        .map(w => w.definition)
        .filter(def => def !== exclude);

    return shuffle(defs).slice(0, count);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
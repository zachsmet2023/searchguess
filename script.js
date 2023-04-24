
const levels = [
  {
    image: '/thing.jpg',
    words: ['word1', 'word2', 'word3']
  },
  {
    image: 'https://example.com/image2.jpg',
    words: ['word4', 'word5', 'word6']
  },
  // Add more levels as needed
];

let currentLevel = 0;
let score = 0;
let correctGuesses = 0;
let totalGuesses = 0;

const levelCounter = document.getElementById('levelCounter');
const gameImage = document.getElementById('gameImage');
const form = document.getElementById('wordForm');
const wordList = document.getElementById('wordList');
const scoreDisplay = document.getElementById('score');
const guessCounter = document.getElementById('guessCounter');

function updateLevel() {
  if (currentLevel >= levels.length) {
    alert('Congratulations! You completed the game!');
    return;
  }

  levelCounter.textContent = currentLevel + 1;
  gameImage.src = levels[currentLevel].image;
  correctGuesses = 0;
  totalGuesses = 0;
  guessCounter.textContent = totalGuesses;
}

function resetGame() {
  currentLevel = 
  0;
score = 0;
correctGuesses = 0;
totalGuesses = 0;
updateLevel();
}


form.addEventListener('submit', (event) => {
event.preventDefault();

const inputWords = wordList.value.trim().split(/\s+/);
const levelWords = levels[currentLevel].words;

inputWords.forEach(word => {
if (levelWords.includes(word)) {
  correctGuesses++;
  score++;
  const wordIndex = levelWords.indexOf(word);
  levelWords.splice(wordIndex, 1);
}
});

totalGuesses++;
guessCounter.textContent = totalGuesses;

if (correctGuesses === 3) {
setTimeout(() => {
  alert('Great job! Proceeding to the next level...');
  currentLevel++;
  updateLevel();
}, 500);
} else if (totalGuesses === 3) {
setTimeout(() => {
  alert('You have reached the maximum number of guesses. Restarting from level one...');
  resetGame();
}, 500);
}

scoreDisplay.textContent = score;
wordList.value = '';
});

updateLevel();

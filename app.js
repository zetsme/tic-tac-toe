//
const boxes = [...document.querySelectorAll('.box')];
const playText = document.getElementById('playText');
const btn = document.getElementById('restartBtn');
//
let spaces = Array(boxes.length).fill(null);
const O_TEXT = 'O';
const X_TEXT = 'X';
let curentPlayer = X_TEXT;
let playable = true;
//
const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id] && playable) {
    spaces[id] = curentPlayer;
    e.target.innerText = curentPlayer;
    if (playerHasWon()) {
      playText.innerText = `${curentPlayer} has Won`;
      playable = false;
      return;
    } else if (!spaces.includes(null)) {
      playText.innerText = 'DRAW';
      playable = false;
      return;
    }
    curentPlayer = curentPlayer === O_TEXT ? X_TEXT : O_TEXT;
  }
};
//
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
//
const playerHasWon = () => {
  for (let i = 0; i < win.length; i++) {
    const winCondition = win[i];
    let a = spaces[winCondition[0]];
    let b = spaces[winCondition[1]];
    let c = spaces[winCondition[2]];
    if (a && b && c && a === b && b === c) return true;
  }
};
//
boxes.forEach((box) => {
  box.addEventListener('click', boxClicked);
});
//
btn.addEventListener('click', () => {
  playText.innerText = "Let's Play";
  spaces = Array(boxes.length).fill(null);
  boxes.forEach((box) => (box.innerText = null));
  playable = true;
});

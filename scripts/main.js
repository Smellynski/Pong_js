let grid = document.getElementById("grid");
let model = new GameModel();

const objectGrid = [
  [
    [1, 0], // Player
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 0],
  ],
  [
    [1, 0], // Player2
    [1, 0],
    [1, 0],
    [1, 0],
    [1, 0],
  ],
  [[2]], // Ball
];
let newState = () => {
  if (model.player1 === null) {
    const newPlayer1 = new Player1(objectGrid[0]);
    model.addPlayer(newPlayer1, 1);
  }
  if (model.player2 === null) {
    const newPlayer2 = new Player2(objectGrid[1]);
    model.addPlayer(newPlayer2, 2);
  }
  if (model.ball === null) {
    const newBall = new Ball(objectGrid[2]);
    model.addBall(newBall);
  }
  model.renderState();
};
setInterval(() => {
  model.ballMovement();
}, 500);
newState();

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      model.playerMovement(1, 1);
      break;
    case "s":
      model.playerMovement(1, 2);
      break;
    case "ArrowUp":
      model.playerMovement(2, 1);
      break;
    case "ArrowDown":
      model.playerMovement(2, 2);
      break;
  }
});

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

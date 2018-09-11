var tetrisBoard;
var gNum;
var preview;
var currentState;
var ctx;

// I Piece
// J Piece
// L Piece
// O Piece
// S Piece
// T Piece
// Z Piece

function initialize() {
  tetrisBoard = document.getElementById("tetris"); // the canvas
  ctx = tetrisBoard.getContext("2d");
  gNum = 1; // gravity
  currentState = "menu";
  mainLoop();
}

function mainLoop() {
  ctx.clearRect(0, 0, tetrisBoard.width, tetrisBoard.height);
  switch(currentState) {
    case "menu":
      displayMenu();
      break;
  }
  
  
  setTimeout(mainLoop, 0); // loooooooop!
}

setTimeout(initialize, 10);

function displayMenu() {
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.font = "48px serif";
  ctx.fillText("Tetris", 150, 50);
  // TITLE
  // Play
  // Options
}

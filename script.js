var tetrisBoard;
var gNum;
var preview;
var currentState;

// I Piece
// J Piece
// L Piece
// O Piece
// S Piece
// T Piece
// Z Piece

function initialize() {
  tetrisBoard = document.getElementById("tetris"); // the canvas
  gNum = 1; // gravity
  currentState = "menu";
}

function mainLoop() {
  switch(currentState) {
    case "menu":
      displayMenu();
      break;
  }
  
  
  setTimeout(mainLoop, 0); // loooooooop!
}

initialize();

function displayMenu() {
  var ctx = tetrisBoard.getContext("2d");
  ctx.textAlign = "center";
  ctx.fillText("Tetris", 150, 50);
  // TITLE
  // Play
  // Options
}

// I Piece
// J Piece
// L Piece
// O Piece
// S Piece
// T Piece
// Z Piece

function initialize() {
  var tetrisBoard = document.getElementById("tetris"); // the canvas
  var gNum = 1; // gravity
  var preview; // next piece
  var currentState = "menu";
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

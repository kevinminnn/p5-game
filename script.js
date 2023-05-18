let xpos = 350;
let ypos = 250;
let dx = 5;
let dy = 5;
let isGameOver = false;

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background("black");

  if (isGameOver) {
    showGameOver();
    return;
  }

  rect(10, constrain(ypos, 0, height - 100), 10, 100);
  rect(730, constrain(mouseY, 0, height - 100), 10, 100);
  ellipse(xpos, ypos, 20, 20);

  if (xpos <= 20 && (ypos < mouseY || ypos > mouseY + 100)) {
    endGame();
    return;
  }

  if (xpos >= width - 20 && (ypos < constrain(mouseY, 0, height - 100) || ypos > constrain(mouseY, 0, height - 100) + 100)) {
    endGame();
    return;
  }

  xpos += dx;
  ypos += dy;

  if (xpos >= width - 20 || xpos <= 30) {
    dx = -dx;
  }

  if (ypos >= height - 20 || ypos <= 20) {
    dy = -dy;
  }
}

function showGameOver() {
  textAlign(CENTER);
  textSize(32);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  textSize(16);
  text("Press 'R' to retry.", width / 2, height / 2 + 40);
}

function endGame() {
  isGameOver = true;
}

function keyPressed() {
  if (isGameOver && key === "r" || key === "R") {
    resetGame();
  }
}

function resetGame() {
  xpos = 350;
  ypos = 250;
  dx = 5;
  dy = 5;
  isGameOver = false;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {
  fill(20, 120, 220, 10);
  rect(0,0,width,height);
  fill(255);
  ellipse(mouseX, mouseY, 50);
}

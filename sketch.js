function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(20, 120, 220, 10);
  noStroke();
  rect(0,0,width,height);
  fill(255);
  ellipse(mouseX, mouseY, 50);
}

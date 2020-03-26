//creating shapes

let angle=0;
function setup() {
  createCanvas(600, 500, WEBGL);
}

function draw() {
  background(175);
  rectMode(CENTER);
  noStroke();
  fill(100,0,0);
  
  //translate(mouseX - width / 2, mouseY - height /2);
  
  rotateX(angle);
  rotateY(angle * 0.03);
  rotateZ(angle * 1.2);  
  angle += 0.07;
  
  //rect(0,0,150,100);
  //box(100,100,50);
  //sphere(50,102,94);
  torus(100,30);
}
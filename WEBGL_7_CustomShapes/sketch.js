let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);
  ambientLight(100);
  directionalLight(255,255,255,0,0,1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  
  fill(255);
  
  beginShape();
  vertex(0,0); 
  vertex(100,120); 
  vertex(100,50); 
  vertex(100,10); 
  vertex(0,100); 
  endShape(CLOSE);
  
  angle += 0.02;
}
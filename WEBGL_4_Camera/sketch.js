let angle = 0;
let camX=0, camY=0, camZ=0;

function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(0);
  
  //camX = map(mouseX, 0, width, -250, 250);
  //camY = map(mouseY, 0, height, -200, 0);
  
  //camX = random(-5,5);
  //camY = random(-5,5);
  //camZ = random(-5,5);
  
  //camera(camX,camY,camZ + ((height/2) / (tan(PI/6))), camX,camY,camZ, 0,1,0);
  
  let fov = PI / 3; //default field of view
  camZ = (height/2) / (fov / 2);  
  perspective(fov, width / height, camZ / 10);
  
  
  ambientLight(255);
  
  push();
  rotateX(angle);
  rotateY(angle * 0.2);
  rotateZ(angle * 1.2);
  noStroke();
  normalMaterial();
  box(100);
  pop();
  
  
  translate(0,100);
  rotateX(HALF_PI);
  ambientMaterial(100);
  noStroke();
  plane(700,700);
  
  angle += 0.03;
  
}
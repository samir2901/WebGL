let angle = 0;
let textureMetal;

function preload(){
  textureMetal = loadImage('4kMoon.jpg');
}


function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(0);
  
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  
  directionalLight(250, 250, 250, -dirX, dirY, -1);
  
  //rotateX(angle * 0.2);
  rotateY(angle);
  //rotateZ(angle * 1.2);
  
  texture(textureMetal);
  shininess(1);
  //specularMaterial(255,0,25);
  noStroke();
  sphere(100);
  
  angle += 0.02;
}
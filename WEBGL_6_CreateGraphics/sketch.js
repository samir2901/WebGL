let angle=0;
let graphicsObject;
let textObj;


function setup() {
  createCanvas(600, 500, WEBGL);
  graphicsObject = createGraphics(200,200);  
  graphicsObject.background(255);
  
  
  textObj = createGraphics(200,200);
  textObj.background(255,255,0,50);
  textObj.fill(255);
  textObj.textAlign(CENTER);
  textObj.textSize(26);
  textObj.text("CUBE",100,100);
}

function draw() {
  background(0);
  rectMode(CENTER);
  
  graphicsObject.fill(255,0,255);
  graphicsObject.ellipse(mouseX,mouseY,32);
  
  ambientLight(100);
  directionalLight(255,255,255,0,0,-1);  
  
  
  fill(255);   
  rotateX(angle);
  rotateY(angle * 0.03);
  rotateZ(angle * 1.2);  
  texture(textObj);  
  box(100);  
  
  angle += 0.02;  
}
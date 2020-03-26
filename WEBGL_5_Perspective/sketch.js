let angle = 0;
//let camX=0, camY=0, camZ=0;

function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(175);
   
  //ortho(-200,200,200,-1000,1000);  
  
  
  //ambientLight(255);
  pointLight(255,255,255, 0, 200, 200);
  
    
  for(let x = -200; x < 200; x += 50){
    push();
    translate(x, 0, x - 200);
    rotateX(angle);
    rotateY(angle * 0.2);
    rotateZ(angle * 1.2);
    noStroke();
    //normalMaterial();
    ambientMaterial(255);
    box(100);
    pop();
  }
  
  
  translate(0,100);
  rotateX(HALF_PI);
  ambientMaterial(100);
  noStroke();
  plane(700,700);
  
  angle += 0.03;
  
}
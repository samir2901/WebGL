let angle = 0;

function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  ambientLight(10,5,255); //light 
  pointLight(0,0,255,0,0,10);
  pointLight(100,0,255,100,0,10);
  pointLight(100,0,255,0,100,10);
  
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx,dy,0);
  v.normalize();
  
  
  directionalLight(100,0,255,v);
  
  background(0);
  rotateX(angle);
  rotateY(angle * 0.02);
  rotateZ(angle * 0.12);
  //normalMaterial(); //rainbow material for seeing the shape  
  //fill(100,0,255); //basic material
  //ambientMaterial(100,0,255); //this material requires light working with the color of light
  specularMaterial(255);
  stroke(2);
  torus(110,40);
  angle += 0.03;
}
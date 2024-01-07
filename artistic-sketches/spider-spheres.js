//let noiseScale = 0.05;

function setup() {
  createCanvas(710, 400, WEBGL);
 
 
}

function draw() {
   background(250);
   //camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
   ambientLight(200, 200, 200);
   rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; ++j) {
    push();
    for (let i = 0; i < 20; ++i) {
      translate(cos(frameCount * 0.001 + j) * 50, sin(frameCount * 0.001 + j) * 50, 0.1 * i);
      rotateZ(frameCount * 0.002 );
      push();
      if (i % 3 == 0) {
        specularMaterial(45, 204, 211);
      }
      if (i % 3 == 1) {
        specularMaterial(27, 54, 93);
      }
      if (i % 3 == 2) {
        specularMaterial(209, 211, 212);
      }
      noStroke();
      sphere(10 * pow(0.9, i), 6, 4);
      pop();
    }
    pop();
  }
  
}
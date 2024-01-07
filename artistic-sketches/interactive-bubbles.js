// Globals
let centers;
let radius;
let N; // number of circles
let theta;
let dt;

function setup() {
  frameRate(24);
  createCanvas(710, 400, WEBGL);
  radius = 100;
  N = 500;
  theta = 0;
  dt = 0.01;
  centers = new Array(N);
}

function draw() {
  background(0);  
  update();
  render();
}

function update() {
  for (let i = 0; i < N; ++i) {
    centers[i] = createVector(0, 0, 0);
    
    let perturb = createVector(2 * noise(i) - 1, 2 * noise(N + i) - 1, 2 * noise(i, N + 2*i) - 1); // scatter circles
    centers[i].add(perturb.mult(mouseX)); // modulate radial separation
  }
}

function render() {
  noStroke();
  fill(255, 50);
  
  
  // spin the camera around the center

  rotateX(theta);
  rotateY(2 * theta);
  rotateZ(3 * theta);
 
  
  for (let i = 0; i < centers.length; ++i) {

    translate(centers[i].x, centers[i].y, centers[i].z);
    sphere(radius * (mouseY) / height); // modulate the radii
    translate(-centers[i].x, -centers[i].y, -centers[i].z);

  }
  
  // angular velocity
  theta += dt;
}
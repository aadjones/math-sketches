let angle;
let d_theta = 0.008;
//var animator;


function setup() {
  createCanvas(710, 400, WEBGL);
	// animator = createSlider(0, 255, 0);
	// animator.position(20, 420);
  angle = PI/2;
}

function draw() {
  background(255);
  
	fill(50);
	
  rectMode(CENTER);
  var w = 85;
  
  push();
  rotateZ(0);
  rotateX(-PI/9);
  rotateY(-PI/6);
  push();
  translate(0, w/2, 0);
  translate(0, -w/2, 0);
  // center (gray)
	fill(209, 211, 212, 50);

	rect(0, 0, w, w);
  pop();
  
  // right face (light blue)
  push();
  translate(w, 0, 0);
  translate(-w/2, 0, 0);
  rotateY(-angle);
  translate(w/2, 0, 0);
  stroke(127, 63, 120);
	fill(45, 204, 211, 50);
  rect(0, 0, w, w);
  
  translate(w, 0, 0);
  translate(-w/2, 0, 0);
  rotateY(-angle);
  translate(w/2, 0, 0);
  
  // far right face (gray)
	fill(209, 211, 212, 50);
  rect(0, 0, w, w);
  pop();
  
  // left face
  push();
  translate(-w, 0, 0);
  translate(w/2, 0, 0);
  rotateY(angle);
  translate(-w/2, 0, 0);
	fill(45, 204, 211, 50);
  rect(0, 0, w, w);
  pop();
  
  // bottom face (dark blue)
  push();
  translate(0, w, 0);
  translate(0, -w/2, 0);
  rotateX(angle);
  translate(0, w/2, 0);

	fill(27, 54, 93, 50);
  rect(0, 0, w, w);
  pop();
  
  // top face
  push();
  translate(0, -w, 0);
  translate(0, w/2, 0);
  rotateX(-angle);
  translate(0, -w/2, 0);
  rect(0, 0, w, w);
  pop();
  
  
  if (angle >= 0 && angle <= PI/2) angle -= d_theta;
  // if (angle <= 0.0) angle += d_theta;
  //angle = animator.value() * PI / (2 * 255);
  pop();
}
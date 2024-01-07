let w = 90;
let p = 1;
let dp = 0.005;
let s = 2 * w;
let N = 8;

function setup() {
  createCanvas(450, 450);
}


function draw() {
  background(255);
  push();
    translate(width/2, height/2);
    translate(0, -p * w);
    rotate(PI/N);
    stroke(0);
    line(0, 0, s, 0);
    fill(173, 216, 230); // light blue
    arc(p * w, 0, w, w, 0, TWO_PI/N);
    for (let i = 1; i < N; ++i) {
    translate(p * w, 0);
    rotate(TWO_PI/N);
    stroke(0);
    line(0, 0, s, 0);  
    fill(173, 216, 230); // light blue
    arc(p * w, 0, w, w, 0, TWO_PI/N);
    }
  pop();
  if (frameCount >= 30) dilate();
}
 
function dilate() {
  p -= dp;
  if (p <= 0) p = 0;
}
      
      
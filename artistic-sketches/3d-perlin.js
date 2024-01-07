let inc = 0.1;
let scl = 40;
let cols, rows, depth;

function setup() {
  createCanvas(9 * 30, 16 * 30, WEBGL);
  cols = floor(width / scl);
  rows = floor(height / scl);
  depth = cols;
}

function draw() {
  background(0);
  translate(-width / 2, -height / 2, -width / 2);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
  let yoff = 0;
  
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    
    for (let x = 0; x < cols; x++) {
      let zoff = 0;
      
      for (let z = 0; z < depth; z++) {
        let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
        let v = p5.Vector.fromAngle(angle);
        zoff += inc;
        
        push();
        translate(x * scl, y * scl, z * scl);
        stroke(255);
        strokeWeight(1);
        fill(0, 50);
        box(scl / 2);
        pop();
      }
      
      xoff += inc;
    }
    
    yoff += inc;
  }
}

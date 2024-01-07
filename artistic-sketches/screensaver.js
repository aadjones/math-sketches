let t = 0;
let animation_speed = 0.005;
let numDivisions = 64;
let camZ = 800; // Initial camera Z position
let camZSpeed = -0.5; // Speed at which the camera moves towards the shape

function setup() {
  createCanvas(9 * 50, 16 * 50, WEBGL);
  strokeWeight(2);
}

function draw() {
  // Instead of completely clearing the background, use a semi-transparent fill
  fill(0, 10); // Adjust the second value (alpha) to control the trail length
  rect(-width / 2, -height / 2, width, height);

  // Update camera position for zoom effect
  camZ += camZSpeed;
  camera(0, 0, camZ, 0, 0, 0, 0, 1, 0);

  // Rotate the shape for a dynamic view
  rotateX(t);
  rotateY(t);

  for (let i = 0; i < numDivisions; i++) {
    let theta1 = map(i, 0, numDivisions, 0, TWO_PI);
    let phi1 = map(i, 0, numDivisions, 0, PI);
    let x1 = width/2 * sin(phi1) * cos(theta1);
    let y1 = height/2 * sin(phi1) * sin(theta1);
    let z1 = (width + height)/2 * cos(phi1);

    for (let j = i + 1; j < numDivisions; j++) {
      let theta2 = map(j, 0, numDivisions, 0, TWO_PI);
      let phi2 = map(j, 0, numDivisions, 0, PI);
      let x2 = 100 * sin(phi2) * cos(theta2);
      let y2 = 100 * sin(phi2) * sin(theta2);
      let z2 = 100 * cos(phi2);

      let d = dist(x1, y1, z1, x2, y2, z2);
      let frequency = map(d, 0, 282, 20, 1); 
      let amplitude = map(d, 0, 282, 1, 0.1);
      
      let phaze = d * 0.1;
      let wave = sin(frequency * t + phaze);
      let colorVal = map(wave, -1, 1, 0, 255);
      stroke(colorVal, colorVal, 255);
      
      line(x1, y1, z1, x2, y2, z2);
    }
  }
  
  t += animation_speed;
}

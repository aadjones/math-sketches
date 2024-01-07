//////////////////////////////////////////////////////////////////////
// Global variables
//////////////////////////////////////////////////////////////////////

// a is the width of the square and b is the width of the rectangle
let a = 120;
let b = 2*a/3;

// (x, y) is the top-left corner of the base rectangle
let x = 50;
let y = 200;

// one-parameter slidy things
let p = 0;
let dp = 0.02;
let q = 0;
let dq = 0.02;
let r = 0;
let dr = 0.01;

let fade = 0;
let d_fade = 2;

// for timing the animation
let seconds = 2;
let fr = 30;

////////////////////////////////////////////////////////////////////////////////
// Setup
////////////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(500, 400);
  textSize(20);
}

////////////////////////////////////////////////////////////////////////////////
// Animation
////////////////////////////////////////////////////////////////////////////////
function draw() {
  background(220);
  if (frameCount <= fr * seconds) {
    initial_config();
}
  else if (frameCount > fr * seconds && frameCount <= 3 * fr * seconds) {
    dilate();
  }
  else if (frameCount > 3 * fr * seconds && frameCount <= 5 * fr * seconds) {
    half();
  }
  else if (frameCount > 5 * fr * seconds && frameCount <= 8 * fr * seconds) {
    slide();
  }
  else if (frameCount > 8) {
    add_square();
  }
  if (frameCount > 10 * fr * seconds) {
    final_equation();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

// Start with two rectangles
function initial_config() {
  push();
    translate(x, y);
    fill(87, 53, 255); // transporter blue
    // x by ax rect
    rect(0, 0, a, a/3);
  
    // x by b rect
    translate(a, 0);
    fill(79, 168, 0); // transporter green
    rect(0, 0, b, a/3);
  pop();
    // right-hand side
  rhs('=  c');
  
  // labels
  bottom_labels_b();
  left_label('x');
}

// Scale the rectangles by a linear factor to make a square
function dilate() {
  push();
    translate(x, y - p * 2*a/3);
    fill(87, 53, 255); // transporter blue
    rect(0, 0, a, a/3 + p * 2*a/3);
    translate(a, 0);
    fill(79, 168, 0); // transporter green
    rect(0, 0, b, a/3 + p * 2*a/3);
    p += dp;
    if (p >= 1) p = 1;
  pop();
  // right-hand side
  rhs('= ac', p);
  
  // labels
  bottom_labels_b();
  left_label('ax', p);
}

// Draw the line splitting the right rectangle in half
function half() {
  square_a();
  rect_b();
  push();
    translate(x, y);
    translate(a + b/2, -2*a/3);
    drawingContext.setLineDash([8, 15]);
    line(0, 0, 0, q * a);
    drawingContext.setLineDash([]);
    q += dq;
    if (q >= 1) q = 1;
  pop();
  rhs('= ac', 1);
  bottom_labels_b_2();
  left_label('ax', 1);
}

// Swing the right rectangle up top
function slide() {
  square_a();
  rect_b_2();
  push();
    translate(x, y);
    translate(a + b/2, -2*a/3);
    
    translate(r * (-b/2),(r * (-a/3)));
    rotate(r * TWO_PI/4);
    r += dr;
    if (r >= 1) r = 1;
    fill(79, 168, 0); // transporter green
    rect(0, 0, b/2, a);
  pop();
  rhs('= ac', 1);
  bottom_labels_b_2();
  left_label('ax', 1);
}

// Complete the square
function add_square() {
  square_a();
  rect_b_2();
  top_rect();
  push();
    translate(x, y - 2*a/3);
    translate(a, -b/2);
    let c = color(221, 49, 47, fade); // transporter red
    fill(c);
    rect(0, 0, b/2, b/2);
    fade += d_fade;
    if (fade >= 255) fade = 255;
  pop();
  rhs('= ac + (b/2)²', 1);
  left_label('ax', 1);
  bottom_labels_b_2();
  left_top_label();
}

// Display the algebraic completion of the square
function final_equation() {
  let s = '(ax + b/2)² = ac + (b/2)²';
  text(s, width/4, 4/5 * height);
}
////////////////////////////////////////////////////////////////////////////////
// Helper functions
////////////////////////////////////////////////////////////////////////////////

// Draw the blue ax-by-ax square
function square_a() {
  push();
    translate(x, y - 2*a/3);
    fill(87, 53, 255); // transporter blue
    // ax by ax square
    rect(0, 0, a, a);
  pop();
}

// Draw the half rectangle on the right
function rect_b_2() {
  push();
    translate(x, y - 2*a/3);
    translate(a, 0);
    fill(79, 168, 0); // transporter green
    rect(0, 0, b/2, a);
  pop();
}

// Draw the full rectangle on the right
function rect_b() {
  push();
    translate(x, y - 2*a/3);
    translate(a, 0);
    fill(79, 168, 0); // transporter green
    rect(0, 0, b, a);
  pop();
}

// Draw the half rectangle on top
function top_rect() {
  push();
    translate(x, y - 2*a/3 - b/2);
    fill(79, 168, 0); // transporter green
    rect(0, 0, a, b/2);
  pop();
}

// Right-hand side
function rhs(s, p=0) {
  push();
    translate(x, y);
    translate(a, 0);
    translate(1.5*b, (a/6 - p*a/3) + 5);
    text(s, 0, 0);
  pop();
}

// Label the ax and the b
function bottom_labels_b() {
  push();
    translate(x, y + a/3);
    translate(a/2, 0);
    text('ax', -10, 20);
    translate(a/2 + b/2, 0);
    text('b', -5, 20);
  pop();
}

// Label the ax and the b/2
function bottom_labels_b_2() {
    push();
    translate(x, y + a/3);
    translate(a/2, 0);
    text('ax', -10, 20);
    translate(a/2 + b/4, 0);
    text('b/2', -13, 20);
  pop();
}

// Label (s) the height at p percent of the way from x to ax
function left_label(s, p=0) {
  push();
    translate(x, y + a/3);
    text(s, -30, (-a/3 - p*2*a/3)/2 + 5);
  pop();
}

// Label the left top b/2
function left_top_label() {
  push();
    translate(x, y + a/3);
    text('b/2', -30, 20 - a - b/2);
  pop();
}
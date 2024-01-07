// a and b are the sides of the right triangle
let scale = 50;
let a = 5 * scale;
let b = 2 * scale;

// (x, y) is the top-left corner of the outer box
let x = 25;
let y = 25;

// vertices
let p, q, r, s, t, u, v, w;

// one-parameter slidy things
let percent1 = 0;
let d_percent = 0.015;
let percent2 = 0;
let percent3 = 0;


// for timing the animation
let seconds = 3.5;
let fr = 30;

function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
  textSize(32);
  initialize_points();
}

function draw() {
  if (frameCount <= 3 * fr * seconds) {
    initial_setup();
}
  else if (frameCount > 3 * fr * seconds && frameCount <= 4 * fr * seconds) {
    rearrange_1();
  }
  else if (frameCount > 4 * fr * seconds && frameCount <= 5 * fr * seconds) {
    rearrange_2();
  }
  else if (frameCount > 5 * fr * seconds && frameCount <= 6 * fr * seconds) {
   rearrange_3();
  }
  else if (frameCount > 9) {
    final();
  }
}


function initialize_points() {
  p = createVector(0, a);
  q = createVector(0, a + b);
  r = createVector(a, a + b);
  s = createVector(a + b, a + b);
  t = createVector(a + b, b);
  u = createVector(a + b, 0);
  v = createVector(b, 0);
  w = createVector(0, 0);
}

function initial_setup() {
  background(255);
  push();
    translate(x, y);
    fill('blue');
    triangle(p.x, p.y, q.x, q.y, r.x, r.y);
    fill('red');
    triangle(r.x, r.y, s.x, s.y, t.x, t.y);
    fill('purple');
    triangle(t.x, t.y, u.x, u.y, v.x, v.y);
    fill('green');
    triangle(v.x, v.y, w.x, w.y, p.x, p.y);
    label_initial();
  pop();
  
}

function rearrange_1() {
  background(255);
  push();
    translate(x, y);
    drawingContext.setLineDash([5, 15]);
    rect(0, 0, a + b, a + b);
    drawingContext.setLineDash([]);
    fill('blue');
    triangle(p.x, p.y, q.x, q.y, r.x, r.y);
    fill('red');
    triangle(r.x, r.y, s.x, s.y, t.x, t.y);
    push();
      fill('purple');
      translate(percent1 * (p.x - v.x), percent1 * (p.y - v.y));
      triangle(t.x, t.y, u.x, u.y, v.x, v.y);
    pop();
    fill('green');
    triangle(v.x, v.y, w.x, w.y, p.x, p.y);
  label_left();
  pop();  
  percent1 += d_percent;
  if (percent1 >=1) percent1 = 1;
}

function rearrange_2() {
  background(255);
  push();
    translate(x, y);
    drawingContext.setLineDash([5, 15]);
    rect(0, 0, a + b, a + b);
    drawingContext.setLineDash([]);
    fill('blue');
    triangle(p.x, p.y, q.x, q.y, r.x, r.y);
    push();
      fill('red');
      translate(0, -percent2 * b);
      percent2 += d_percent;
      if (percent2 >= 1) percent2 = 1;
      triangle(r.x, r.y, s.x, s.y, t.x, t.y);
    pop();
    push();
      fill('purple');
      translate(p.x - v.x, p.y - v.y);
      triangle(t.x, t.y, u.x, u.y, v.x, v.y);
    pop();
    fill('green');
    triangle(v.x, v.y, w.x, w.y, p.x, p.y);
    label_left();
  pop();  
}

function rearrange_3() {
  background(255);
  push();
    translate(x, y);
    drawingContext.setLineDash([5, 15]);
    rect(0, 0, a + b, a + b);
    drawingContext.setLineDash([]);
    fill('blue');
    triangle(p.x, p.y, q.x, q.y, r.x, r.y);
    push();
      fill('red');
      translate(0, -b);
      triangle(r.x, r.y, s.x, s.y, t.x, t.y);
    pop();
    push();
      fill('purple');
      translate(p.x - v.x, p.y - v.y);
      triangle(t.x, t.y, u.x, u.y, v.x, v.y);
    pop();
    push();
      fill('green');
      translate(percent3 * a, 0);
      percent3 += d_percent;
      if (percent3 >= 1) percent3 = 1;
      triangle(v.x, v.y, w.x, w.y, p.x, p.y);
    pop();
  label_left();
  pop();  
}

function final() {
  background(255);
  label_final();
}

function label_initial() {
  label();
  text('c', a/2, a + b/2);
  text('c', a + b/2 - 20, b + a/2);
  text('c', b + a/2, b/2 + 25);
  text('c', b/2 + 10, a/2);
  textSize(48)
  text('c²', (a+b)/2 - 10, (a+b)/2 + 10);
}

function label_left() {
  fill('black');
  text('a', -25, a/2);
  text('b', -25, a + b/2);
  text('a', a/2, a + b + 25);
  text('b', a + b/2, a + b + 25);
}
function label() {
  fill('black');
  text('a', -25, a/2);
  text('b', -25, a + b/2);
  text('a', a/2, a + b + 25);
  text('b', a + b/2, a + b + 25);
  text('a', a + b + 5, b + a/2);
  text('b', a + b + 5, b/2);
  text('a', b + a/2, -5);
  text('b', b/2, -5);
}

function label_final() {
  textSize(32);
  rearrange_3();
  textSize(48);
  text('a²', x + a/2 - 10, y + a/2 + 10);
  text('b²', x + a + b/2 - 10, y + a + b/2 + 10);
}
console.log("hello world");
let numberOfRows = 0;
let numberOfCols = 0;
let scale = 10;
const inc = 0.05;

function setup() {
  createCanvas(1000, 700);
  numberOfCols = floor(width / scale);
  numberOfRows = floor(height / scale);
  noLoop();
}

function draw() {
  background(0);
  let yoff = 0;
  for (let y = 0; y < numberOfRows; y++) {
    let xoff = 0;
    for (let x = 0; x < numberOfCols; x++) {
      const index = (x + y * width) * 4;
      const angle = noise(xoff, yoff) * TWO_PI;
      const vector = p5.Vector.fromAngle(angle);
      xoff += inc;
      // fill(r);
      // rect(x * scale, y * scale, scale, scale);
      stroke(255);
      push();
      translate(x * scale, y * scale);
      rotate(vector.heading());
      line(0, 0, scale, 0);
      pop();
    }
    yoff += inc;
  }
}

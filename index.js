console.log("hello world");
let numberOfRows = 0;
let numberOfCols = 0;
let scale = 5;
const inc = 0.05;

let grid;

function generateGrid(columns, rows) {
  const grid = new Array(columns);
  for (let y = 0; y < columns; y++) {
    grid[y] = new Array(rows).fill(0);
  }
  return grid;
}

function setup() {
  createCanvas(1000, 700);
  numberOfCols = floor(width / scale);
  numberOfRows = floor(height / scale);
  grid = generateGrid(numberOfCols, numberOfRows);
  noLoop();
}

function fillGrid() {
  let yoff = 0;
  for (let y = 0; y < numberOfRows; y++) {
    let xoff = 0;
    for (let x = 0; x < numberOfCols; x++) {
      const angle = noise(xoff, yoff) * TWO_PI;
      grid[x][y] = angle;
      // const vector = p5.Vector.fromAngle(angle);
      xoff += inc;
      // // fill(r);
      // // rect(x * scale, y * scale, scale, scale);
      // stroke(255);
      // push();
      // translate(x * scale, y * scale);
      // rotate(vector.heading());
      // line(0, 0, scale, 0);
      // pop();
    }
    yoff += inc;
  }
}

function drawLine() {
  const numberOfSteps = 10;
  const stepLength = 4;

  stroke(255);
  noFill();
  beginShape();
  let x = floor(random(width / scale));
  let y = floor(random(height / scale));
  for (let i = 0; i < numberOfSteps; i++) {
    curveVertex(x * scale, y * scale);
    if (!grid[x]) break;
    if (!grid[x][y]) break;
    const angle = grid[x][y];
    const xStep = stepLength * Math.cos(angle);
    const yStep = stepLength * Math.sin(angle);

    x += floor(xStep);
    y += floor(yStep);
  }
  curveVertex(x * scale, y * scale);
  endShape();
}

function draw() {
  background(0);
  fillGrid();
  drawLine();
  for (let i = 0; i < 2000; i++) {
    drawLine();
  }
}

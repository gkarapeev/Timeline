// Canvas
let height = 700;
let width = 1200;

// Timeline
let timelineLength = width - 100;
let timelineHeight = 3;

// Points
let points_Y = 340;

let pointA = {
  x: 0,
  importance: 1
}

let pointB = {
  x: 1000,
  importance: 2
}

let pointC = {
  x: 800,
  importance: 3
}

let pointD = {
  x: -900,
  importance: 4
}

let pointE = {
  x: -300,
  importance: 5
}


function setup() {
  let mainCanvas = createCanvas(width, height);
  mainCanvas.parent("#sketch-container");
  rectMode(CENTER);
}

function draw() {
  background(50, 50, 50);
  fill(255);
  noStroke();
  rect(width / 2, height / 2, timelineLength, timelineHeight, 2.5);

  // Points
  stroke(250, 0, 250);
  strokeWeight(10);

  if (calcPointX(pointA))
  point(calcPointX(pointA), points_Y);
  point(calcPointX(pointB), points_Y);
  point(calcPointX(pointC), points_Y);
  point(calcPointX(pointD), points_Y);
  point(calcPointX(pointE), points_Y);
}

function mouseWheel(event) {
  let speed = event.delta;

  timelineLength += speed / 2;

  // Cap shrinking at 300
  if (timelineLength < 300) {
    timelineLength = 300;
  }

  // Cap expanding at 1200
  if (timelineLength > 1200) {
    timelineLength = 1200;
  }

  // block page scrolling
  return false;
}

function calcPointX(ref) {
  let lineEnds = timelineLength / 2;
  let distanceFromCenter = map(ref.x, -1000, 1000, -lineEnds, lineEnds);
  return width / 2 + distanceFromCenter;
}
import p5 from "p5";
// import { config } from './data/line_points.js';
import { config } from "./data/grid_points.js";
import { Space, Draggable } from "./utils.js";

// Canvas
let screenHeight = 700;
let screenWidth = 1600;

// Points
let points = config.points;
const pointSize = 30;

// Sketch
let s = (sk) => {
	const draggable = new Draggable(sk);
	const space = new Space(config.initial_x, -screenHeight / 2);

	sk.setup = () => {
		sk.createCanvas(screenWidth, screenHeight).parent("#sketch-container");
		sk.frameRate(60);
		sk.background(50);
		sk.ellipseMode(sk.CENTER);
		sk.noStroke();
		sk.textAlign(sk.CENTER);
	};

	sk.draw = () => {
		// Тhe timeline
		sk.noStroke();
		sk.background(60);
		sk.fill(170);
		sk.rectMode(sk.CENTER);
		sk.rect(screenWidth / 2, screenHeight / 2 + 20, screenWidth - 20, 1);

		// Тhe points
		let pointSize_scaled = sk.constrain(
			pointSize * space.zoomFactor * 0.3,
			5,
			20
		);

		for (let point of points) {
			const [x, y] = space.toScreen(point.x, point.y);

			// Point indicator
			sk.strokeWeight(1);
			sk.stroke(170);
			sk.line(x, screenHeight / 2, x, screenHeight / 2 + 20);

			// Point
			sk.strokeWeight(2);
			sk.fill(point.color);
			sk.ellipse(
				x,
				config.allowVerticalPan ? y : screenHeight / 2,
				pointSize_scaled,
				pointSize_scaled
			);

			// Name
			sk.noStroke();
			sk.fill("white");
			sk.textSize(16);
			sk.text(
				"- " + point.x + " -",
				x,
				screenHeight / 2 + 20 + 40 * point.id
			);
			sk.fill(200);
			sk.textSize(12);
			sk.text(point.name, x, screenHeight / 2 + 40 + 40 * point.id);
		}
	};

	sk.mousePressed = () => draggable.mousePressed();

	sk.mouseDragged = () => draggable.mouseDragged(space);

	sk.mouseWheel = (event) => {
		space.zoom(sk, event.delta);
		return false; // block page scroll
	};
};

const drawing = new p5(s);

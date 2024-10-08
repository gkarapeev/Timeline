import p5 from "p5";

import { Space } from "./rendering/space.js";
import { Draggable } from "./rendering/draggable.js";

import { drawPoint } from "./components/point.js";
import { drawGrid } from "./components/grid.js";
import { drawTimeline } from "./components/timeline.js";

// import { config } from "./data/line_points.js";
import { config } from "./data/grid_points.js";

let screenHeight = 700;
let screenWidth = 1600;

let s = (sk) => {
	const draggable = new Draggable(sk);
	const space = new Space(config.initial_x, -screenHeight / 2);

	sk.setup = () => {
		sk.createCanvas(screenWidth, screenHeight).parent("#sketch-container");
		sk.frameRate(60);
	};

	sk.draw = () => {
		sk.background([41, 45, 94]);

		drawGrid(space, sk);
		drawTimeline(sk, screenWidth, screenHeight);

		for (let point of config.points) {
			drawPoint(point, sk, space, screenHeight);
		}
	};

	sk.mousePressed = () => draggable.mousePressed();
	sk.mouseDragged = () => draggable.mouseDragged(space);
	sk.mouseWheel = (event) => {
		space.zoom(sk, event.delta);
		return false;
	};
};

const drawing = new p5(s);

import p5 from "p5";

import { Space } from "./rendering/space";
import { Draggable } from "./rendering/draggable";

import { drawPoint } from "./components/point";
import { drawGrid } from "./components/grid";
import { drawTimeline } from "./components/timeline";

import { config } from "./data/line_points";
// import { config } from "./data/grid_points";

let screenHeight = 1000;
let screenWidth = 1000;

let s = (sk: p5) => {
	const draggable = new Draggable(sk);
	const space = new Space(
		config.initial_world_x_at_screen_center,
		config.initial_world_y_at_screen_center,
		screenWidth,
		screenHeight,
		config.allow_pan_y
	);

	sk.setup = () => {
		sk.createCanvas(screenWidth, screenHeight).parent("#sketch-container");
		sk.frameRate(60);
	};

	sk.draw = () => {
		sk.background([41, 45, 94]);

		drawGrid(space, sk);
		drawTimeline(sk, space);

		for (let point of config.points) {
			drawPoint(point, sk, space, screenHeight);
		}
	};

	sk.mousePressed = () => draggable.mousePressed();
	sk.mouseDragged = () => draggable.mouseDragged(space);
	sk.mouseWheel = (event: any) => {
		space.zoom(sk, event.delta);
		return false;
	};
};

const drawing = new p5(s);

import p5 from "p5";
// import { config } from './data/line_points.js';
import { config } from "./data/grid_points.js";
import {
	worldToScreen,
	screenToWorld,
	mousePressed,
	mouseDragged,
	mouseWheel,
} from "./utils.js";

// Canvas
let screenHeight = 700;
let screenWidth = 1600;

class Draggable {
	dragStartX = null;
	dragStartY = null;
	dragDistanceX = 0;
	dragDistanceY = 0;

	#sketch;

	constructor(sk) {
		this.#sketch = sk;
	}

	mousePressed = () => {
		this.dragStartX = this.#sketch.mouseX;
		this.dragStartY = this.#sketch.mouseY;
	};

	mouseDragged = (space) => {
		const delta_x = this.#sketch.mouseX - this.dragStartX;
		const delta_y = this.#sketch.mouseY - this.dragStartY;

		space.moveScreen(delta_x, delta_y);

		this.dragStartX = this.#sketch.mouseX;
		this.dragStartY = this.#sketch.mouseY;
	};
}

class Space {
	#screen_offset_x = config.horizontalCenter;
	#screen_offset_y = -screenHeight / 2;
	#zoomFactor = 12;

	#MIN_ZOOM = 0.01;
	#MAX_ZOOM = 20;
	#ZOOM_COEFFICIENT = 0.001;

	#sketch;

	constructor(sk) {
		this.#sketch = sk;
	}

	zoom(event) {
		const [initial_x, initial_y] = this.toWorld(
			this.#sketch.mouseX,
			this.#sketch.mouseY
		);

		this.#zoomFactor = this.#sketch.constrain(
			this.#zoomFactor + event.delta * this.#ZOOM_COEFFICIENT,
			this.#MIN_ZOOM,
			this.#MAX_ZOOM
		);

		const [final_x, final_y] = this.toWorld(
			this.#sketch.mouseX,
			this.#sketch.mouseY
		);

		const delta_x_world = initial_x - final_x;
		const delta_y_world = initial_y - final_y;

		this.#screen_offset_x += delta_x_world;
		this.#screen_offset_y += delta_y_world;
	}

	get zoomFactor() {
		return this.#zoomFactor;
	}

	moveScreen(delta_x, delta_y) {
		this.#screen_offset_x -= delta_x / this.#zoomFactor;
		this.#screen_offset_y -= delta_y / this.#zoomFactor;
	}

	toScreen = (world_x, world_y) => {
		const screen_x = (world_x - this.#screen_offset_x) * this.#zoomFactor;
		const screen_y = (world_y - this.#screen_offset_y) * this.#zoomFactor;
		return [screen_x, screen_y];
	};

	toWorld = (screen_x, screen_y) => {
		const world_x = screen_x / this.#zoomFactor + this.#screen_offset_x;
		const world_y = screen_y / this.#zoomFactor + this.#screen_offset_y;
		return [world_x, world_y];
	};
}

// Points
let points = config.points;
const pointSize = 30;

// Sketch
let s = (sk) => {
	const draggable = new Draggable(sk);
	const space = new Space(sk);

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
		space.zoom(event);
		return false; // block page scroll
	};
};

const drawing = new p5(s);

export class Draggable {
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

export class Space {
	#screen_offset_x = null;
	#screen_offset_y = null;

    #zoomFactor = 12;
	#MIN_ZOOM = 0.01;
	#MAX_ZOOM = 20;
	#ZOOM_COEFFICIENT = 0.001;

	constructor(initial_x, initial_y) {
        this.#screen_offset_x = initial_x;
        this.#screen_offset_y = initial_y;
	}

	zoom(sketch, delta) {
		const [initial_x, initial_y] = this.toWorld(
			sketch.mouseX,
			sketch.mouseY
		);

		const zoomChange = Math.exp(delta * this.#ZOOM_COEFFICIENT);
		this.#zoomFactor = sketch.constrain(
			this.#zoomFactor * zoomChange,
			this.#MIN_ZOOM,
			this.#MAX_ZOOM
		);

		const [final_x, final_y] = this.toWorld(
			sketch.mouseX,
			sketch.mouseY
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

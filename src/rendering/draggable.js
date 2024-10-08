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

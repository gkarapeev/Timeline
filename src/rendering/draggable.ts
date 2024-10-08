import { Space } from "./space";

export class Draggable {
	public dragStart_x = null;
	public dragStart_y = null;
	public dragDistanceX = 0;
	public dragDistanceY = 0;

	private sketch;

	constructor(sk: any) {
		this.sketch = sk;
	}

	mousePressed = () => {
		this.dragStart_x = this.sketch.mouseX;
		this.dragStart_y = this.sketch.mouseY;
	};

	mouseDragged = (space: Space) => {
		const delta_x = this.sketch.mouseX - this.dragStart_x!;
		const delta_y = this.sketch.mouseY - this.dragStart_y!;

		space.moveScreen(delta_x, delta_y);

		this.dragStart_x = this.sketch.mouseX;
		this.dragStart_y = this.sketch.mouseY;
	};
}

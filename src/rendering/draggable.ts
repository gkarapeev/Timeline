import p5 from "p5";
import { Space } from "./space";

export class Draggable {
	public dragStart_x: number = null as any;
	public dragStart_y: number = null as any;
	public dragDistanceX = 0;
	public dragDistanceY = 0;

	private sketch: p5;

	constructor(sk: p5) {
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

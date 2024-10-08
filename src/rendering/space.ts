import p5 from "p5";

export class Space {
	private screen_offset_x!: number;
	private screen_offset_y!: number;

	private allow_pan_y!: boolean;

	private MIN_ZOOM = 0.01;
	private MAX_ZOOM = 20;
	private ZOOM_COEFFICIENT = 0.001;

	private _zoomFactor = 2;

	public get zoomFactor() {
		return this._zoomFactor;
	}

	private set zoomFactor(v: number) {
		this._zoomFactor = v;
	}

	constructor(
		initial_world_x_at_screen_center: number,
		initial_world_y_at_screen_center: number,
		canvas_width: number,
		canvas_height: number,
		allow_pan_y: boolean = true
	) {
		this.screen_offset_x =
			(-canvas_width / 2 - initial_world_x_at_screen_center) /
			this.zoomFactor;

		this.screen_offset_y =
			(-canvas_height / 2 - initial_world_y_at_screen_center) /
			this.zoomFactor;

		// THE INITIAL LOCATION IS BROKEN! :(
		// Test with different zoom factors

		this.allow_pan_y = allow_pan_y;
	}

	public zoom(sketch: p5, delta: number) {
		const [initial_x, initial_y] = this.toWorld(
			sketch.mouseX,
			sketch.mouseY
		);

		const zoomChange = Math.exp(delta * this.ZOOM_COEFFICIENT);
		this.zoomFactor = sketch.constrain(
			this.zoomFactor * zoomChange,
			this.MIN_ZOOM,
			this.MAX_ZOOM
		);

		const [final_x, final_y] = this.toWorld(sketch.mouseX, sketch.mouseY);

		const delta_x_world = initial_x - final_x;
		const delta_y_world = initial_y - final_y;

		this.screen_offset_x += delta_x_world;
		this.screen_offset_y += delta_y_world;
	}

	public moveScreen(delta_x: number, delta_y: number) {
		this.screen_offset_x -= delta_x / this.zoomFactor;

		if (this.allow_pan_y) {
			this.screen_offset_y -= delta_y / this.zoomFactor;
		}
	}

	public toScreen = (world_x: number, world_y: number): [number, number] => {
		const screen_x = (world_x - this.screen_offset_x) * this.zoomFactor;
		const screen_y = (world_y - this.screen_offset_y) * this.zoomFactor;
		return [screen_x, screen_y];
	};

	public toWorld = (screen_x: number, screen_y: number) => {
		const world_x = screen_x / this.zoomFactor + this.screen_offset_x;
		const world_y = screen_y / this.zoomFactor + this.screen_offset_y;
		return [world_x, world_y];
	};
}

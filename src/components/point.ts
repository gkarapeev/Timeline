import p5 from "p5";
import { Space } from "../rendering/space";

const POINT_SIZE = 30;

export const drawPoint = (point: Point, sk: p5, space: Space, screenHeight: number) => {
	const [x, y] = space.toScreen(point.x, point.y);

	// Point
	let pointSize_scaled = sk.constrain(
		POINT_SIZE * space.zoomFactor * 0.3,
		5,
		20
	);

	sk.noStroke();
	sk.fill(point.color);
	sk.ellipse(x, y, pointSize_scaled, pointSize_scaled);

	// Name
	sk.fill("white");
	sk.textSize(16);
	sk.textAlign(sk.CENTER);
	sk.text("Year: " + point.x, x, y + 40);
	sk.fill(200);
	sk.textSize(12);
	sk.text("Event: " + point.name, x, y + 60);
};

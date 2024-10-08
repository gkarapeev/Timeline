export const drawPoint = (point, sk, space, screenHeight) => {
	const POINT_SIZE = 30;

	const [x, y] = space.toScreen(point.x, point.y);

	// Indicator
	sk.strokeWeight(1);
	sk.stroke(170);
	sk.line(x, screenHeight / 2, x, screenHeight / 2 + 20);

	// Point
	let pointSize_scaled = sk.constrain(
		POINT_SIZE * space.zoomFactor * 0.3,
		5,
		20
	);

	sk.strokeWeight(2);
	sk.fill(point.color);
	sk.ellipse(x, y, pointSize_scaled, pointSize_scaled);

	// Name
	sk.noStroke();
	sk.fill("white");
	sk.textSize(16);
	sk.textAlign(sk.CENTER);
	sk.text("- " + point.x + " -", x, screenHeight / 2 + 20 + 40 * point.id);
	sk.fill(200);
	sk.textSize(12);
	sk.text(point.name, x, screenHeight / 2 + 40 + 40 * point.id);
};

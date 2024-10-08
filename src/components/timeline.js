export const drawTimeline = (sk, screenWidth, screenHeight) => {
	sk.strokeWeight(2);
	sk.stroke(200);
	sk.line(20, screenHeight / 2 + 20, screenWidth - 20, screenHeight / 2 + 20);
};

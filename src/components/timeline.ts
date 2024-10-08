import p5 from "p5";

export const drawTimeline = (sk: p5, screenWidth: number, screenHeight: number) => {
	sk.strokeWeight(2);
	sk.stroke(200);
	sk.line(20, screenHeight / 2 + 20, screenWidth - 20, screenHeight / 2 + 20);
};

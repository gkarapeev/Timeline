import p5 from "p5";
import { Space } from "../rendering/space";

export const drawTimeline = (sk: p5, space: Space) => {
	sk.strokeWeight(2);
	sk.stroke(200, 150, 150);
	sk.line(...space.toScreen(-5000, 0), ...space.toScreen(5000, 0));

};

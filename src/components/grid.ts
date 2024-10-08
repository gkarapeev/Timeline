import p5 from "p5";
import { Space } from "../rendering/space";

const grid = () => {
	const size = 4000;
	let horizontal = [];

	for (let i = -size; i <= size; i += 50) {
		horizontal.push({
			from: [i, -size],
			to: [i, size],
		});
	}

	let vertical = [];

	for (let i = -size; i <= size; i += 50) {
		vertical.push({
			from: [-size, i],
			to: [size, i],
		});
	}

	return [...horizontal, ...vertical];
};

export const drawGrid = (space: Space, sk: p5) => {
	sk.strokeWeight(1);
	sk.stroke(85);

	for (const line of grid()) {
		const [from_x, from_y] = space.toScreen(line.from[0], line.from[1]);
		const [to_x, to_y] = space.toScreen(line.to[0], line.to[1]);
		sk.line(from_x, from_y, to_x, to_y);
	}
};

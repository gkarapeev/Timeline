function gridPoints() {
	let points = [];
	let _idCounter = 1;

	for (let i = -1250; i <= 1250; i += 100) {
		for (let j = -1250; j <= 1250; j += 100) {
			let color;
			if (i < 0) {
				if (j < 0) {
					color = [31, 231, 238];
				} else {
					color = [48, 238, 31];
				}
			} else {
				if (j < 0) {
					color = [224, 238, 31];
				} else {
					color = [178, 163, 245];
				}
			}

			points.push({
				name: "point_" + i + "_" + j,
				color: color,
				id: _idCounter,
				x: i,
				y: j,
				importance: _idCounter,
			});

			_idCounter++;
		}
	}

	return points;
}

export const config = {
	points: gridPoints(),
	horizontalCenter: 0,
    allowVerticalPan: true
};

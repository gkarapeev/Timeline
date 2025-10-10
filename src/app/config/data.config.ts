import { Point } from '../interfaces/point.model';
import { SketchConfig } from '../interfaces/sketch-config.model';

const pointY = 0;
const linePoints: Point[] = [
	{
		name: '-600',
		color: [224, 238, 31],
		id: 2,
		x: -600,
		y: pointY,
		importance: 2,
	},
	{
		name: '-400',
		color: [224, 238, 31],
		id: 3,
		x: -400,
		y: pointY,
		importance: 3,
	},
	{
		name: '-200',
		color: [224, 238, 31],
		id: 4,
		x: -200,
		y: pointY,
		importance: 4,
	},
	{
		name: 'ZERO',
		color: [224, 238, 31],
		id: 1,
		x: 0,
		y: pointY,
		importance: 1,
	},
	{
		name: '200',
		color: [224, 238, 31],
		id: 2,
		x: 200,
		y: pointY,
		importance: 2,
	},
	{
		name: '400',
		color: [224, 238, 31],
		id: 3,
		x: 400,
		y: pointY,
		importance: 3,
	},
	{
		name: '600',
		color: [224, 238, 31],
		id: 4,
		x: 600,
		y: pointY,
		importance: 4,
	},
];

export const linePointsConfig: SketchConfig = {
	points: linePoints,
	initial_world_x_at_screen_center: 100,
	initial_world_y_at_screen_center: 0,
	allow_pan_y: false,
};

const generateGridPoints = (): Point[] => {
	let points: Point[] = [];
	let _idCounter = 1;

	for (let i = -1250; i <= 1250; i += 100) {
		for (let j = -1250; j <= 1250; j += 100) {
			let color: [number, number, number];

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
				name: 'point_' + i + '_' + j,
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
};

export const gridPointsConfig: SketchConfig = {
	points: generateGridPoints(),
	initial_world_x_at_screen_center: 0,
	initial_world_y_at_screen_center: 0,
};

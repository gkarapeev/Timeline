function points() {
	const pointY = 0;

	// const points: Point[] = [
	// 	{
	// 		name: "First Bulgarian Kingdom",
	// 		color: [31, 231, 238],
	// 		id: 1,
	// 		x: 681,
	// 		y: pointY,
	// 		importance: 1
	// 	},
	// 	{
	// 		name: "Hitler comes into power",
	// 		color: [48, 238, 31],
	// 		id: 2,
	// 		x: 1933,
	// 		y: pointY,
	// 		importance: 2
	// 	},
	// 	{
	// 		name: "WW2",
	// 		color: [224, 238, 31],
	// 		id: 3,
	// 		x: 1939,
	// 		y: pointY,
	// 		importance: 3
	// 	},
	// 	{
	// 		name: "Gesha Birthday",
	// 		color: [238, 31, 228],
	// 		id: 4,
	// 		x: 1993,
	// 		y: pointY,
	// 		importance: 4
	// 	},
	// 	{
	// 		name: "Today",
	// 		color: [255, 255, 255],
	// 		id: 5,
	// 		x: 2019,
	// 		y: pointY,
	// 		importance: 5
	// 	},
	// 	{
	// 		name: "Columbus 1st Voyage",
	// 		color: [178, 163, 245],
	// 		id: 6,
	// 		x: 1492,
	// 		y: pointY,
	// 		importance: 6
	// 	},
	// 	{
	// 		name: "Pyramids",
	// 		color: [190, 90, 30],
	// 		id: 7,
	// 		x: -2600,
	// 		y: pointY,
	// 		importance: 7
	// 	},
	// 	{
	// 		name: "WW1",
	// 		color: [224, 160, 31],
	// 		id: 8,
	// 		x: 1914,
	// 		y: pointY,
	// 		importance: 8
	// 	},
	// 	{
	// 		name: "ZERO",
	// 		color: [224, 238, 31],
	// 		id: 1,
	// 		x: 0,
	// 		y: pointY,
	// 		importance: 1
	// 	}
	// ];

	const points: Point[] = [
		{
			name: "-600",
			color: [224, 238, 31],
			id: 2,
			x: -600,
			y: pointY,
			importance: 2
		},
		{
			name: "-400",
			color: [224, 238, 31],
			id: 3,
			x: -400,
			y: pointY,
			importance: 3
		},
		{
			name: "-200",
			color: [224, 238, 31],
			id: 4,
			x: -200,
			y: pointY,
			importance: 4
		},
		{
			name: "ZERO",
			color: [224, 238, 31],
			id: 1,
			x: 0,
			y: pointY,
			importance: 1
		},
		{
			name: "200",
			color: [224, 238, 31],
			id: 2,
			x: 200,
			y: pointY,
			importance: 2
		},
		{
			name: "400",
			color: [224, 238, 31],
			id: 3,
			x: 400,
			y: pointY,
			importance: 3
		},
		{
			name: "600",
			color: [224, 238, 31],
			id: 4,
			x: 600,
			y: pointY,
			importance: 4
		}
	];

	return points;
}

export const config: SketchConfig = {
	points: points(),
	initial_world_x_at_screen_center: 100,
	initial_world_y_at_screen_center: 0,
	allow_pan_y: false
};

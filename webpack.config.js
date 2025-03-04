const path = require("path");

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "bundle.js",
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
};

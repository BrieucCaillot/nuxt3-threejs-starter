module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/prettier",
		"prettier"
	],
	plugins: ["prettier"],
	parserOptions: {
		parser: "babel-eslint"
	},
	rules: {
		"prettier/prettier": "error",
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	}
}

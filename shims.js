module.exports = {
	jquery: {exports: "jQuery"},
	lodash: {exports: "_"},
	backbone: {
		exports: "Backbone",
		depends: {lodash: "underscore", jquery: "jQuery"}
	}
}

'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/EnumView.hbs');

module.exports = Backbone.View.extend({
	
	tagname: 'div',
	className: 'form-group',
	el: '.enumContainer',

	initialize: function() {
		var that = this;
		this.model.fetch({
			success: that.render(),
			error: console.log
		});
	},

	render: function() {
		var enumsAttrs = this.model.toJSON();
		console.log(template);
		this.$el.html(template(enumsAttrs));
		return this;
	}
});

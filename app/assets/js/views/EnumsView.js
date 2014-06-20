'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/EnumView.hbs');

module.exports = Backbone.View.extend({
	
	tagname: 'div',
	className: 'form-group',
	el: '.enumContainer',

	initialize: function() {
		this.render();
		this.model.on('change', this.render, this);
	},

	render: function() {
		var enumsAttrs = this.model.toJSON();
		console.log(template);
		this.$el.html(template(enumsAttrs));
		return this;
	}
});

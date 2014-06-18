'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/FormView.hbs');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryForm',
	el: '.col-lg-4',

	events: {
		'click #inventorySubmit': 'saveItem' 
	},

	initialize: function() {
		this.render();
	},
	
	render: function() {
		var inventoryAttrs = this.model.toJSON();
		this.$el.html(template(inventoryAttrs));
		return this;
	},	

	saveItem: function() {
		console.log(this.model.toJSON());
	}

});

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
var template = require('../templates/FormView.hbs');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryform',
	template: template,

	events: {
		'click #inventorySubmit': 'saveItem' 
	},

	initialize: function() {
		this.render();
	},
	
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},	

	saveItem: function() {
		console.log(this.model.toJSON());
	}

});

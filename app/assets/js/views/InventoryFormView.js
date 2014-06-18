'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/FormView.hbs');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryForm',
	el: '.col-lg-4',

	events: {
		'click #inventorySubmit': 'saveItem',

	},

	initialize: function() {
		var that = this;
		this.render();
		this.model.on('change', this.render, this);
	},
	
	render: function() {
		var inventoryAttrs = this.model.toJSON();
		this.$el.html(template(inventoryAttrs));
		return this;
	},	

	saveItem: function(event) {
		event.preventDefault();
		var form = $(this.el).find('form');
		var result = this.model.get('result');

		if (result.item === null || result.item === undefined)
		{
			result.item = {}
		}
		
		result.item.title = form.find('#title').val();
		result.item.description = form.find('#description').val();
		result.item.dealerInternalNotes = form.find('#internalNotes').val();
		this.model.set('result', result);
		
		this.model.save();
		console.log(this.model.toJSON());
	}

});

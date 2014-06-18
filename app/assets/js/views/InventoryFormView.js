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

	saveItem: function(event) {
		event.preventDefault();
		var form = $(this.el).find('form');

		this.model.set({
			"result": {
				"item": {
					"title": form.find('#title').val(),
					"description": form.find('#description').val(),
					"dealerInternalNotes": form.find('#internalNotes').val()
				}
			}
		});

		this.model.save();
		console.log(this.model.toJSON());
	}

});

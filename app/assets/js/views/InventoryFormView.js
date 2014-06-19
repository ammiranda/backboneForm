'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/FormView.hbs');
var EnumsView = require('./EnumsView');
var FormEnums = require('../models/FormEnums');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryForm',
	el: '.col-md-4',

	events: {
		'click #inventorySubmit': 'saveItem'
	},

	initialize: function() {
		this.formEnums = new FormEnums();
		this.render();
		this.model.on('change', this.render, this);
	},
	
	render: function() {
		this.enumsView = new EnumsView({model: this.formEnums});
		var inventoryAttrs = this.model.toJSON();
		this.$el.html(template(inventoryAttrs));
		this.$('.enumContainer').append(this.enumsView.el);
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

		if (result.item.material === null || result.item.material === undefined)
		{
			result.item.material = {}
		}

		result.item.material.description = form.find('#material option:selected').val();

		this.model.set('result', result);
		
		this.model.save();
		console.log(this.model.toJSON());
	}

});

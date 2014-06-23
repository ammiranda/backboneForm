'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/FormView.hbs');
var EnumsView = require('./EnumsView');
var Enums = require('../../../../enums.json');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryForm',
	el: '.col-lg-4',

	events: {
		'click #inventorySubmit': 'saveItem',
		'click #shapeSelection': 'undisable'
	},

	initialize: function() {
		this.render();
		this.model.on('change', this.render, this);
	},
	
	render: function() {
		var inventoryAttrs = this.model.toJSON();
		inventoryAttrs.itemEnums = Enums;
		console.log(inventoryAttrs);
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

		if (result.item.material === null || result.item.material === undefined)
		{
			result.item.material = {}
		}

		result.item.material.description = form.find('#material option:selected').val();

		if (form.find('input[name=restrictedCheck]').prop('checked')) 
		{
			result.item.material.restricted = "Y";
		}
		else 
		{
			result.item.material.restricted = "N";
		}

		result.item.measurement.unit = form.find('input[name=unitmeasure]:checked', form).val();
		result.item.condition.description = form.find('input[name=condition]:checked', form).val();

		if (form.find('input[name=shape]:checked').length > 0) 
		{
			result.item.measurement.shape = form.find('input[name=shape]:checked', form).val();
		}
		else 
		{
			result.item.measurement.shape = "";
		}

		result.item.measurement.length = form.find('#length').val();
		result.item.measurement.height = form.find('#height').val();
		result.item.measurement.depth = form.find('#depth').val();
		result.item.measurement.diameter = form.find('#diameter').val();

		this.model.set('result', result);
		
		this.model.save();
		console.log(this.model.toJSON());
	},

	undisable: function() {
		this.$('.dimensions').removeAttr('disabled');
		this.$('.disabled').removeClass('disabled');
	}

});

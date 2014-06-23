'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../../templates/FormView.hbs');
var EnumsView = require('./EnumsView');
var FormEnums = require('../models/FormEnums');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryForm',
	el: '.col-lg-4',

	events: {
		'click #inventorySubmit': 'saveItem',
		'click #shapeSelection': 'undisable',
		'click #measureUnits': 'displayUnitFields'
	},

	initialize: function() {
		this.formEnums = new FormEnums();
		this.render();
		this.model.on('change', this.render, this);
		this.formEnums.fetch();
	},
	
	render: function() {
		this.enumsView = new EnumsView({model: this.formEnums});
		var inventoryAttrs = this.model.toJSON();
		this.$el.html(template(inventoryAttrs));
		this.$('.enumContainer').append(this.enumsView.el);
		this.populateEnumFields();
		return this;
	},

	saveItem: function(event) {
		event.preventDefault();
		var form = $(this.el).find('form');
		var result = this.model.get('result');

		if (result.item === null || result.item === undefined)
		{
			result.item = {};
		}

		result.item.title = form.find('#title').val();
		result.item.description = form.find('#description').val();
		result.item.dealerInternalNotes = form.find('#internalNotes').val();

		if (result.item.material === null || result.item.material === undefined)
		{
			result.item.material = {};
		}

		result.item.material.description = form.find('#material option:selected').val();

		if (form.find('input[name=restrictedCheck]').prop('checked')) 
		{
			result.item.material.restricted = 'Y';
		}
		else 
		{
			result.item.material.restricted = 'N';
		}

		result.item.measurement.unit = form.find('input[name=unitmeasure]:checked').val();
		result.item.condition.description = form.find('input[name=condition]:checked').val();

		if (form.find('input[name=shape]:checked').length > 0) 
		{
			result.item.measurement.shape = form.find('input[name=shape]:checked').val();
		}
		else 
		{
			result.item.measurement.shape = '';
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
	},

	populateEnumFields: function() {
		var result = this.model.get('result');
		var form = $(this.el).find('form');

		form.find('select[name="material"]').find('option[value="' + result.item.material.description + '"]').attr('selected', true);

		if (result.item.material.restricted === "Y")
		{
			form.find('input[name="restrictedCheck"]').attr('checked', true);
		}

		form.find('input[name="unitmeasure"][value="' + result.item.measurement.unit + '"]').prop('checked', true);

		if (result.item.measurement.shape)
		{
			form.find('input[name="shape"][value="' + result.item.measurement.shape + '"]').prop('checked', true);
		}

		form.find('#length').val(result.item.measurement.length);
		form.find('#height').val(result.item.measurement.height);
		form.find('#depth').val(result.item.measurement.depth);
		form.find('#diameter').val(result.item.measurement.diameter);

		form.find('input[name="condition"][value="' + result.item.condition.description + '"]').prop('checked', true);
	},

	displayUnitFields: function() {
		if (this.$('input[name=unitmeasure]:checked') === 'inches')
		{
			this.$('.centimeters').addClass('invisible');
			this.$('.inches').removeClass('invisible');
		}
		else 
		{
			this.$('.inches').toggle();
			this.$('.centimeters').toggle();
		}
	}

});

'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var InventoryItem = require('../models/InventoryItem');
var FormEnums = require('../models/FormEnums');
var InventoryFormView = require('../views/InventoryFormView');
var EnumsView = require('../views/EnumsView');

module.exports = Backbone.Router.extend({
	
	routes: {
		'': 'init'
	},

	init: function() {
		this.inventoryItem = new InventoryItem();
		this.inventoryFormView = new InventoryFormView({model: this.inventoryItem});
		this.inventoryItem.fetch();
		$('.formcontainer').html(this.inventoryFormView.el);
	}
});
		

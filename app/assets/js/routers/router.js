'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var InventoryItem = require('../models/InventoryItem');
var InventoryFormView = require('../views/InventoryFormView');

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
		

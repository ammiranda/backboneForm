'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
var InventoryItem = require('./models/InventoryItem');
var InventoryFormView = require('./views/InventoryFormView');

module.exports = Backbone.Router.extend({
	
	routes: {
		"": "init"
	},

	init: function() {
		this.inventoryItem = new InventoryItem();
		this.inventoryFormView = new InventoryFormView({model: this.inventoryItem});
		var that = this;
		this.inventoryItem.fetch({});
		$('.formcontainer').html(this.inventoryFormView.el);
	}

});
		

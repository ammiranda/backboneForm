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

	init: function() {}

});
		

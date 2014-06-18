var Backbone = require('backbone');
var $ 			 = require('jquery');
var _				 = require('lodash');
var InventoryItem = require('../models/InventoryItem');

module.exports = Backbone.Collection.extend({
	model: InventoryItem,
	url: 'http://localhost:3000/item.json'
});

var Backbone = require('backbone');
var $ 			 = require('jquery');
var _				 = require('lodash');
var InventoryItem = require('../models/InventoryItem');
var FormEnums = require('../models/FormEnums');

module.exports = Backbone.Collection.extend({
	model: InventoryItem,
	url: '/item.json'
});

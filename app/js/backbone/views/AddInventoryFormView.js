var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
var template = require('../templates/FormView.hbs');

module.exports = Backbone.View.extend({

	tagname: 'div',
	className: 'inventoryform',

	initialize: function() {
		this.render();
	},

	
});

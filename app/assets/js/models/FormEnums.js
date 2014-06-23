'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	
	url: '/enums.json',
	defaults: {
		'itemEnums': {
			'material': [],
			'measurement': {
				'unit': {},
				'shape': []
			},
			'condition': {
				'description': []
			}
		}
	}
});

'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	
	urlRoot: 'http://localhost:3000/enums.json',
	defaults: {
		'itemEnums': {
			'material': [],
			'measurement': {
				'unit': {
					'in': 'inches',
					'cm': 'centimeters'
				},
				'shape': []
			},
			'condition': {
				'description': []
			}
		}
	}
});

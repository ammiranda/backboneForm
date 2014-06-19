'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

	url: '/item.json',	
	defaults: {
		'httpCode': 404,
		'message': 'ERROR',
		'result': {
			'item': {
				'id': null,
				'title': '',
				'description': '',
				'dealerInternalNotes': '',
				'material': {
					'description': '',
					'restricted': ''
				},
				'measurement': {
					'unit': '',
					'shape': '',
					'length': '',
					'depth': '',
					'height': ''
				},
				'condition': {
					'description': ''
				}		
			}
		}
	}
});

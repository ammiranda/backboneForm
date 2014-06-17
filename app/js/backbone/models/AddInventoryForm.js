var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');

module.exports = Backbone.Model.extend({
	
	defaults: {
		"httpCode": 404,
		"message": "ERROR",
		"result": {
			"item": {
				"id": null,
				"title": "",
				"description": "",
				"dealerInternalNotes": "",
				"material": {
					"description": "",
					"restricted": ""
				},
				"measurement": {
					"unit": "",
					"shape": "",
					"length": "",
					"depth": "",
					"height": ""
				},
				"condition": {
					"description": ""
				}		
			}
		}
	}
});

'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('lodash');
Backbone.$ = $;
Backbone._ = _;

var Routes = require('./routers/router');

$(function() {
	var routes = new Routes();
	Backbone.history.start();
});

/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap : {
			deps :['jquery']
		}
	},
	paths: {
		jquery: '../../bower_components/jquery/dist/jquery.min',
		underscore: '../../bower_components/underscore/underscore-min',
		backbone: '../../bower_components/backbone/backbone-min',
		text: '../../bower_components/text/text',
		bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min'
	}
});

require([
	'backbone',
	'routers/router',
	'bootstrap'
], function (Backbone, AppRouter) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	var router = new AppRouter();
	Backbone.history.start();
});

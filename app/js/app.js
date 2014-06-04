'use strict';

var app = angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'myApp.filters',
		'myApp.services', 'myApp.directives', 'myApp.controllers']);


app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/exercises', {
		templateUrl : 'partials/exerciseTable.html',
		controller : 'exerciseController'
	});
	
	$routeProvider.when('/overview', {
		templateUrl : 'partials/exercises.html',
		controller : 'exerciseController'
	});
	
	$routeProvider.when('/processes', {
		templateUrl : 'partials/exercises.html',
		controller : 'exerciseController'
	});
	
	$routeProvider.when('/json_data/:exerciseName', {
		templateUrl : 'partials/system.html',
		controller : 'systemController'
	});

	$routeProvider.otherwise({
		redirectTo : '/exercises'
	});
} ]);

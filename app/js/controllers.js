'use strict';

/* Controllers */
var myModule = angular.module('myApp.controllers', []);

// No need to do app.config (app.js) and the controller will get the data only
// when the service is sucessful
myModule.controller('exerciseController', function($scope,
		getExerciseListService) {
	// alert('controller.js: dashboardControllerOnSucess: ' +
	// restServiceOnSucess.getExerciseList());
	getExerciseListService.getExerciseList().success(function(data) {
		$scope.exerciseList = data
	});
});

myModule.controller('systemController', function($scope, getSystemInfoService) {
	getSystemInfoService.getVmList().success(function(data) {
		$scope.vmList = data._collectiondata
	});
	
	
	$scope.max = 100;

	$scope.random = function() {
		var value = Math.floor((Math.random() * 100) + 1);
		var type;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		$scope.showWarning = (type === 'danger' || type === 'warning');

		$scope.dynamic = value;
		$scope.type = type;
	};
	$scope.random();

	$scope.randomStacked = function() {
		$scope.stacked = [];
		var types = [ 'success', 'info', 'warning', 'danger' ];

		for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
			var index = Math.floor((Math.random() * 4));
			$scope.stacked.push({
				value : Math.floor((Math.random() * 30) + 1),
				type : types[index]
			});
		}
	};
	$scope.randomStacked();
	
	
});

//This is for progress bar in System page
myModule.controller('progressDemoCtrl', function($scope) {
	$scope.max = 200;

	$scope.random = function() {
		var value = Math.floor((Math.random() * 100) + 1);
		var type;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		$scope.showWarning = (type === 'danger' || type === 'warning');

		$scope.dynamic = value;
		$scope.type = type;
	};
	$scope.random();

	$scope.randomStacked = function() {
		$scope.stacked = [];
		var types = [ 'success', 'info', 'warning', 'danger' ];

		for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
			var index = Math.floor((Math.random() * 4));
			$scope.stacked.push({
				value : Math.floor((Math.random() * 30) + 1),
				type : types[index]
			});
		}
	};
	$scope.randomStacked();
});

// call data that stored in json_data/trainings.json file
myModule.controller('dashboardController2', function($scope, $http) {
	$http.get('json_data/trainings.json').success(function(data) {
		alert('controller.using json data in json_data/trainings.json');
		$scope.exerciseList = data;
	}).error(function(data, status, headers, config) {
		alert("error.status: " + status);
	})
});

// call data that manually entered here
myModule
		.controller(
				'dashboardController3',
				function($scope) {
					alert('controller.using json data');
					$scope.exerciseList = [
							{
								"name" : "DisasterRelief-EX1",
								"poc" : "Mr. James Boerke",
								"role" : "Planner",
								"state" : "Running",
								"url" : "http://msco-db.sd.spawar.navy.mil/nm.php/SystemConfig/TrngEvents/1397088033689",
								"time" : "2014-04-09 17:02:12"
							},
							{
								"name" : "CBRN-EX1",
								"poc" : "Mr. James Boerke",
								"role" : "Planner",
								"state" : "Planning",
								"url" : "http://msco-db.sd.spawar.navy.mil/nm.php/SystemConfig/TrngEvents/1397604270805",
								"time" : "2014-04-15 16:24:30"
							} ];
				});

// normal call but may not work because data in service may not be ready
myModule.controller('dashboardController4', function($scope,
		getExerciseListService) {
	$scope.exerciseList = getExerciseListService.getExerciseList();
	alert('controller.js: Controller.exerciseList: ' + $scope.exerciseLis);
});

// app.config resolve (app.js) to make sure all dependencies ready in service
// before controller calls
myModule.controller('dashboardController', function($scope,
		getExerciseListService) {
	alert('controller.js: Promise is now resolved: '
			+ restService.getExerciseList());
	$scope.exerciseList = getExerciseListService.getExerciseList();
});

myModule.controller('MyCtrl1', [ '$scope', function($scope) {
} ]);

myModule.controller('MyCtrl2', [ '$scope', function($scope) {
} ]);

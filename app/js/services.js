'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var myService = angular.module('myApp.services', []).value('version', '0.1');

myService.factory('getExerciseListService', function($http){
    return {
        getExerciseList: function() {
            var url = "json_data/trainings.json";
            return $http.get(url);
        }
    };
});


myService.factory('getSystemInfoService', function($routeParams, $http){
    return {
        getVmList: function() {
        	var vmList =  $http.get('json_data/' + $routeParams.exerciseName + '.json');
        	 return vmList;
        }
    };
});

// promise implementation
myService.factory('restService', function($http){
	var exerciseList = null;
	var restUri = "/TrainingEvents";
	var localTrainingUri = 'json_data/trainings.json';
	var exampleRestUri = 'http://www.json-generator.com/j/bVgdXHisoi?indent=4';
	
	var promise = $http.get(exampleRestUri).success(function(data) {
		exerciseList = data;
	}).error(function(data, status, headers, config) {
		alert("error.status: " + status);
	});
	
	return{
		promise:promise,
		setData: function(data) {
			exerciseList = data;
		},
		
		getExerciseList: function(){
			return exerciseList;
		}
	};
});

myService.factory('restService2', function($http) {
    return {
    	getExerciseList: function() {
    		var exerciseList =  							
            [
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
			}
			];
    		
    		return exerciseList;
        }
    };
});

// myService
// .factory(
// 'restService',
// function() {
// return {
// getExerciseList : function() {
// [
// {
// "name" : "DisasterRelief-EX1",
// "poc" : "Mr. James Boerke",
// "role" : "Planner",
// "state" : "Running",
// "url" :
// "http://msco-db.sd.spawar.navy.mil/nm.php/SystemConfig/TrngEvents/1397088033689",
// "time" : "2014-04-09 17:02:12"
// },
// {
// "name" : "CBRN-EX1",
// "poc" : "Mr. James Boerke",
// "role" : "Planner",
// "state" : "Planning",
// "url" :
// "http://msco-db.sd.spawar.navy.mil/nm.php/SystemConfig/TrngEvents/1397604270805",
// "time" : "2014-04-15 16:24:30"
// }
// ];
// }
//
// };
// });

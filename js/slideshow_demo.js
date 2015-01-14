(function() {
	'use strict';
    /* Controllers */
    angular.module('App',[])
    	.controller('AppController',AppController);

    AppController.$inject = ['$scope','$timeout','$http','$cacheFactory'];

    function AppController($scope,$timeout,$http,$cacheFactory){
    	var slidesInSlideshow = 9;
 		var slidesTimeIntervalInMs = 4000; 
  		$scope.slideshow = 1;		
    	var slideTimer =
    		$timeout(function interval() {
      			$scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      			slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    		}, 
    	slidesTimeIntervalInMs);

    	
    	$http.get('sites/all/modules/slideshow_demo/js/cars.json',{timeout: 300000, cache: true}).success(function(data){
				$scope.cars = data;

                var $httpDefaultCache = $cacheFactory.get('$http');

		});
    }
}());
    

(function(){
	'use strict';

	angular
		.module('ngForecast')
		.controller('HomeController', HomeController);

	function HomeController($scope, $route, Storage, Widget) {
		// var home = $scope;
		$scope.cities = [];
		$scope.err = false;
		$scope.message = {};
		$scope.message.title = "";
		$scope.message.text = "";

		$scope.getData = function() {
			if(Storage.get().length === 0) {
				$scope.err = true;
				$scope.message.title = 'Your forecast menu is empty !';
				$scope.message.text = 'You can add cities via the <a href="settings">Settings</a> menu.';
			} else {
				$scope.cities = Storage.cities;
			}
		}

		$scope.init = function() {
			$scope.getData();
		};
		
	  	
	  	$scope.init();
	}
})();
(function(){
	'use strict';

	angular
		.module('ngForecast')
		.factory('Storage', StorageFactory);

	function StorageFactory(Widget,$http, $q, $window) {
		var factory = {};

		factory.cities = [];
		
		angular.element($window).on('storage', function(event) {
		    if (event.key === 'cities') {
		      	$rootScope.$apply();
		    }
	  	});

    	function setData(val) {
      		$window.localStorage && $window.localStorage.setItem('cities', val);
  			return this;
	    };
    	function getData() {
			return $window.localStorage && $window.localStorage.getItem('cities');
	    };
		function addToLS(code) {
			if(code) {
				var dataTab = JSON.parse(getData());
				dataTab.push(code);
				setData(JSON.stringify(dataTab));
			}
		};
		factory.get = function() {
			
			return factory.cities;
		};
		factory.updateData = function() {
			// todo : rewrite for refresh button
			// if(JSON.parse(getData()).length > 0) {
			// 	var cityCodes = JSON.parse(getData());
			// 	for (var i = 0; i < cityCodes.length; i++) {
			// 		factory.cities.push(Widget.getCity(cityCodes[i]));
			// 	}
			// }
		}
		factory.addData = function(city) {
			factory.cities.push(city);
			addToLS(city.id);
		};
		factory.remove = function(cityCode) {
			for (var i = 0; i < factory.cities.length; i++) {
				if(factory.cities[i].id === cityCode) {
					factory.cities.splice(i, 1);
				}
			}
		};
		return factory;
	}
})();
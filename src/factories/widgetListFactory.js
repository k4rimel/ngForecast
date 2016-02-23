(function(){
	'use strict';

	angular
		.module('ngForecast')
		.factory('WidgetList', WidgetListFactory);

	function WidgetListFactory(Widget,$http, $q, $window) {
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

		factory.get = function() {
			// if(factory.cities.length) {
				var cityCodes = JSON.parse(getData('cities'));
				if(!cityCodes === null && typeof cityCodes === "object") {
					for (var i = 0; i < cityCodes.length; i++) {
						factory.cities.push(Widget.getData(cityCodes[i]));
					}
				}
			// }
			return factory.cities;
		};
		factory.add = function(cityCode) {

		}
		factory.remove = function(cityCode) {
			factory.cities
		}
		return factory;
	}
})();
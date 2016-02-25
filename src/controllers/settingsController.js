(function(){
	'use strict';

	angular
		.module('ngForecast')
		.controller('SettingsController', SettingsController);

	function SettingsController($scope, $route, Storage, Widget) {
		$scope.cities = Storage.cities;


		function addCityByName(name) {
			Storage.addByName(name);
		};	
		function addCityByCode(code) {
			Storage.addByName(code);
		};
		function update() {
			$scope.cities = Storage.cities;
		}
		$scope.getData = function() {
			console.log(Storage.cities);
			if(Storage.get().length !== 0) {
		  		update();
			}
		};
		$scope.add = function(value) {
			// TEST value
			Widget.getCity(value).then(function(res) {
				var city = {};
				var prefix = 'wi wi-';
				var wCode = res.weather[0].id;
			  	var icon = ICONS[wCode].icon;
			  	if (!(wCode > 699 && wCode < 800) && !(wCode > 899 && wCode < 1000)) {
		  	 	icon = 'day-' + icon;
			  	}
			  	icon = prefix + icon;
				city.name = res.name;
				city.temp = res.main.temp;
				city.id = res.id;
				Storage.addData(city);
				update();
				city.icon = icon;
				console.log(city.icon);
			});
		}
		$scope.removeCity = function(code) {
			for (var i = 0; i < Storage.cities.length; i++) {
				if(Storage.cities[i].id === code) {
					Storage.remove(code);
				}
			}
			update();
			// Storage.remove(code);
		};
	}
})();
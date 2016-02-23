(function(){
	'use strict';

	angular
		.module('ngForecast')
		.factory('Widget', WidgetFactory);

	function WidgetFactory($http, $q) {
		var factory = {};

		factory.data = {};

		factory.key = '765f1d4652f5fd3e9e7adefc65db2b47';

		function makeRequest(url) {
      		var deferred = $q.defer();
      		$http.get(url).then(function(resp) {
  		  		deferred.resolve(resp.data);
      		});
      		return deferred.promise;
    	};

		factory.get = function(code) {
	 		factory.data = makeRequest('http://api.openweathermap.org/data/2.5/weather?q='+code+'&APPID='+factory.key);
	 		
			return factory.data;
		};

		return factory;
	}
})();
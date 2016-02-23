(function(){
	'use strict';

	angular
		.module('ngForecast')
		.controller('HomeController', HomeController);

	function HomeController(WidgetList, Widget) {
		var home = this;
		home.data = {};
		home.error = false;
		home.message = "";
		home.active = false;
		$scope.pastille = "pastille";

		home.getData = function() {
			if(WidgetList.get().length === 0) {
				home.error = true;
				home.message = "Your forecast menu is empty ! add cities via the Settings menu.";

			}
		  	home.data = WidgetList.get();
		}

		home.init = function() {
			home.active = true;
			console.log("init");
			home.getData();
		};
		
	  	
	  	// home.init();
	}
})();
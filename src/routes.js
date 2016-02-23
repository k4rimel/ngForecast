(function() {
    'use strict';

    angular
        .module('ngForecast')
        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: '/src/views/partials/home/home.html',
                        controller: 'HomeController'
                    })
                    .when('/settings', {
                        templateUrl: '/src/views/partials/settings/settings.html',
                        controller: 'SettingsController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                // <base href="">
            }
        ]);
})();
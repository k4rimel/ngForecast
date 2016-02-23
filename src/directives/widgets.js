(function() {
    'use strict';

    angular
        .module('ngForecast')
        .directive('widget', widget);

    function widget() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'src/views/partials/home/widgets.html',
        };
    };
})();
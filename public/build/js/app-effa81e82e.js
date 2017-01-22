var App = angular.module('App', ['moment-picker','ngRoute','ui.bootstrap','ui.calendar']);

App.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'templates/calendar.html',
            controller: 'eventsController'
        });
        $routeProvider.otherwise('/');
    }
]);
//# sourceMappingURL=app.js.map

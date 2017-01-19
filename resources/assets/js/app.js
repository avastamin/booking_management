var App = angular.module('App', ['ngRoute','ui.bootstrap','ui.calendar']);

App.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'templates/calendar.html',
            controller: 'eventsController'
        });
        $routeProvider.otherwise('/');
    }
]);
// Declare app level module which depends on filters, and services
angular.module('feizai', [ 'ngResource', 'ngRoute', 'homeControllers' ])
		.config([ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'views/home.html',
				controller : 'homeController'
			}).when('/signup', {
				templateUrl : 'views/signup.html',
				controller : 'signUpController'
			}).when('/login', {
				templateUrl : 'views/login.html',
				controller : 'loginController'
			}).otherwise({
				redirectTo : '/'
			});
		} ]);

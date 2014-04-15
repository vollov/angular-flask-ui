'use strict';

var homeModule = angular.module('homeControllers', []);

homeModule.controller('homeController',
		[ '$scope', '$location', function($scope, $location) {

			$scope.openLoginPage = function() {
				$location.path('login');
			}

			$scope.openSignUpPage = function() {
				$location.path('signup');
			}

		} ]).controller(
		'signUpController',
		[
				'$scope',
				'$http',
				'$location',
				function($scope, $http, $location) {
					//$scope.user = {};

					// $scope.$on('LoginEvent', function(event, bLoggedIn) {
					// $scope.loggedIn = bLoggedIn;
					// });

					$scope.signUp = function() {
						// var user = new User($scope.user);
						// LoginService.setLogin(true);
						// $scope.loggedIn = true;
						// $scope.$apply();
						$http.post('/users', $scope.user).success(
								function(data, status, headers, config) {
									// will be called asynchronously when the response is available
									if (data.id != '') {
										console.log('signup successful');
										$location.path('/');
									}
								}).error(
								function(data, status, headers, config) {
									// called asynchronously if an error occurs, or server returns response with an error status.
									console.log('signup failed');
								});

					}
				} ]).controller(
		'loginController',
		[
				'$scope',
				'$http',
				'$location',
				function($scope, $http, $location) {
					$scope.submit = function() {
						$http.post('/login', $scope.login).success(
								function(data, status) {
									console.log('login success');
									//LoginService.setLogin(true);
								}).error(
								function(data, status, headers, config) {
									// called asynchronously if an error occurs, or server returns response with an error status.
									console.log('login failed');

								});

						$location.path('/');
					}
				} ]).controller(
		'logoutController',
		[ '$scope', '$location', 'LoginService',
				function($scope, $location, LoginService) {

					$scope.submit = function() {
						LoginService.setLogin(false);
						$location.path('login');
					}
				} ])

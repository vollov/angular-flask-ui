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
		[ '$scope', '$location', 'User', 'LoginService',
				function($scope, $location, User, LoginService) {
					$scope.user = {};

					//$scope.$on('LoginEvent', function(event, bLoggedIn) {
					//    $scope.loggedIn = bLoggedIn;
					//});

					$scope.signUp = function() {
						var user = new User($scope.user);
						LoginService.setLogin(true);
						//$scope.loggedIn = true;
						//$scope.$apply();
						user.$save(function(data, rsp) {
							if (!data.error) {
								console.log('login successful');
								$location.path('/');
							}
						});

					}
				} ]).controller(
		'loginCtrl',
		[
				'$scope',
				'$http',
				'$location',
				'LoginService',
				function($scope, $http, $location, LoginService) {
					$scope.submit = function() {
						$http.post('/login', $scope.login).success(
								function(data, status) {
									console.log('login success')
								});

						LoginService.setLogin(true);
						$location.path('/');
					}
				} ]).controller(
		'logoutCtrl',
		[ '$scope', '$location', 'LoginService',
				function($scope, $location, LoginService) {

					$scope.submit = function() {
						LoginService.setLogin(false);
						$location.path('login');
					}
				} ])

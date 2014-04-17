var serviceModule = angular.module('mainServices', ['ngResource','ngRoute']);

serviceModule.factory('Advertisement', ['$resource', function($resource){
	// A factory which creates a resource object that lets you interact with RESTful server-side data sources.
	// $resource(url[, paramDefaults][, actions]);
	return $resource('/ads/:adId', {}, {
		// This name becomes the name of the method on resource object.
		// query: {method:'GET', params:{propertyId:'properties', isArray:true}}
	});
}]).factory('LoginService', ['$rootScope', function($rootScope){
	return{
		setLogin: function(val){
			//$rootScope.$emit('LoginEvent', $rootScope.loggedIn);
			$rootScope.loggedIn = val;
		}
	};
}]);
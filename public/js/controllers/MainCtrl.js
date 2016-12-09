angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$http({
		method: 'GET',
		url: '/getS3Video',
	}).then(function(url) {
		console.log(url.data);
		$scope.videoURL = url.data.videoURL;
	}).catch(function(err) {
		console.log(err);
	});

});
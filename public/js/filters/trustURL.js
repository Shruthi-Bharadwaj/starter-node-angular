"use strict";
angular.module("sampleApp").filter('trustURL', ['$sce', function($sce) {
    return function(URL) {
        return $sce.trustAsResourceUrl(URL);
    };
}]);
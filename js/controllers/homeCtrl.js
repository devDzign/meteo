'use strict';

/**
 * @ngdoc controller
 * @name homepage
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */
app
    .controller('home', function ($scope,$ionicLoading,$state, $location) {

        $scope.search = function (city) {
          $state.go('weather',{city:city});
        }
    });

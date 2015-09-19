'use strict';

/**
 *
 */
app
    .controller('weather', function($ionicLoading, $scope, $stateParams, $http){

    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $stateParams.city + "&mode=json&units=metric&cnt=10";
    $ionicLoading.show({
      template: 'Chargement...'
    });
    $http.get(url).success(function(response){
      $ionicLoading.hide();

      $scope.weather = response;

    });

    $scope.Math = Math;
    $scope.name = $stateParams.city;

  })

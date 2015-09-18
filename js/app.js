// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('HomeCtrl', function($scope, $ionicLoading, $state){

  $scope.search = function(city){
    $state.go('weather', {city: city})
  }

})

.controller('WeatherCtrl', function($ionicLoading, $scope, $stateParams, $http){

  url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $stateParams.city + "&mode=json&units=metric&cnt=10";
  $ionicLoading.show({
      template: 'Chargement...'
   });
  $http.get(url).success(function(response){
      $ionicLoading.hide();
      $scope.weather = response;
  })
  $scope.Math = Math

})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    views: {
      main: {templateUrl: 'templates/home.html', controller: 'HomeCtrl'}
    }

  })
  $stateProvider.state('about', {
    url: '/about',
    views: {
      about: {templateUrl: 'templates/about.html'}
    }
  })
  $stateProvider.state('weather', {
    url: '/weather/:city',
    views: {
      main: {
        templateUrl: 'templates/weather.html',
        controller: 'WeatherCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/home')

});
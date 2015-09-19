'use strict';
var app = angular.module('meteo', ['ionic']).run(function ($ionicPlatform, $location) {

        $ionicPlatform.ready(function () {

                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }

                $location.path('/');
            }
        );
    }
);

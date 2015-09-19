/**
 * Created by mc on 17/09/2015.
 */
'use strict';

var cacheActive = false;

app.config(function ($stateProvider) {

    $stateProvider
        .state('home',
        {
           cache: cacheActive,
            url: '/',
            templateUrl: 'js/views/homepage/home.html',
            controller: 'home'

        }
    )

        .state('about',
        {
            cache: cacheActive,
            url: '/about',
            templateUrl: 'js/views/about/about.html',
            controller: 'about'

        }
    )
            .state('weather',
            {
                cache: cacheActive,
                url: '/weather',
                templateUrl: 'js/views/weather/weather.html',
                controller: 'weather'

            }
    )

});

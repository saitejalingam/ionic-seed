(function(angular) {
    'use strict';

    angular.module('egen.mobile')
        .run(runConfig);

    // @ngInject
    function runConfig($ionicPlatform, upLangFactory, $window) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            upLangFactory.setLanguage();

            if ($window.cordova && $window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if ($window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
}(angular));

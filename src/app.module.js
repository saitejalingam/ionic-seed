(function(angular) {
    'use strict';

    angular.module('egen.mobile', [
        // 3rd party
        'ionic',
        'ngCordova',
        'tmh.dynamicLocale',
        'pascalprecht.translate'
    ])
        .constant('upAvailableLanguages', ['en-US', 'ru-RU', 'el-GR'])
        .constant('UpDefaultLanguage', 'en-US')
        .config(translateConfig)
        .config(appConfig);

    // @ngInject
    function translateConfig($translateProvider, UpDefaultLanguage) {
        $translateProvider.useStaticFilesLoader({
            'prefix': 'i18n/',
            'suffix': '.json'
        });
        $translateProvider.preferredLanguage(UpDefaultLanguage);
    }

    // @ngInject
    function appConfig($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
        $stateProvider
            .state('egen', {
                url: '/egen',
                abstract: true,
                template: '<ion-nav-view name="appView"></ion-nav-view>'
            });
        $urlRouterProvider.otherwise('/egen/login');
    }
}(angular));

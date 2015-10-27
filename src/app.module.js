(function(angular) {
    'use strict';

    angular.module('egen.mobile', [
        // 3rd party
        'ionic',
        'ngCordova',
        'tmh.dynamicLocale',
        'pascalprecht.translate',

        // routes
        'egen.mobile.login'
    ])
        .constant('upAvailableLanguages', ['en-US', 'el-GR'])
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
    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('egen', {
                url: '/egen',
                abstract: true,
                template: '<ion-nav-view name="appView"></ion-nav-view>'
            });
        $urlRouterProvider.otherwise('/egen/login');
    }
}(angular));

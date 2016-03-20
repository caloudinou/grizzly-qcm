(function (angular) {
    'use strict';

    angular.module(angular.mApp.name).run(['$rootScope', 'TranslationLoaderService', 'ConfigurationLoaderService',
        function($rootScope, TranslationLoaderService, ConfigurationLoaderService){

        //event Angular
        $rootScope.$on('$routeChangeSuccess', function() {
        });

        $rootScope.$on("$routeChangeStart", function(){
            //reload config
            ConfigurationLoaderService.init();
        });

        // event custom
        //once configuration.json loaded
        $rootScope.$on('configurationFileLoaded', function(){
            TranslationLoaderService.init();
        });

    }]);
})(angular);
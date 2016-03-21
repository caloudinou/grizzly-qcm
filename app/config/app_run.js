(function (angular) {
    'use strict';

    angular.module(angular.mApp.NAMESPACE.app.name)
        .run(['$rootScope', 
            function($rootScope){

            //event Angular
            /*$rootScope.$on('$routeChangeSuccess', function() {
            });

            $rootScope.$on("$routeChangeStart", function(){
                //reload config
                ConfigurationLoaderService.init();
            });

            // event custom
            //once configuration.json loaded
            $rootScope.$on('configurationFileLoaded', function(){
                TranslationLoaderService.init();
            });*/

        }]);
})(angular);
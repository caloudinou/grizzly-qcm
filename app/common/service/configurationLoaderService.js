/**
 * @author Pascal Navière <pascalou@gmail.com>
 */

(function (angular) {
    'use strict';

    angular.module(angular.mApp.NAMESPACE.app.name).factory('ConfigurationLoaderService', ['$rootScope', '$http',
        function ($rootScope, $http) {

            function init(){
                    __loadParameters();
                    __loadGlobals();
                    __loadConfig();
            }

            /**
             * Load parameters.json and inject it in $rootScope.parameters
             */
            function __loadParameters(){
                if($rootScope.parameters === void 0 || typeof  $rootScope.parameters == 'undefined'){
                    $http({url:angular.mApp.NAMESPACE.app.prod.default+'config/route_api.json', method:'GET'})
                        .then(function successCallback(response) {
                            $rootScope.route_api = response.data;
                            //@todo => 'kill' app if required parameters are not found (uri_serv, key_Oauth)
                        });
                }
            }

            /**
             * Load parameters.json and inject it in $rootScope.globals
             */
            function __loadGlobals(){
                if($rootScope.globals === void 0 || typeof  $rootScope.globals == 'undefined'){
                    //@todo test if we can get globals from localStorage
                    $http({url:angular.mApp.NAMESPACE.app.prod.default+'config/server_api.json', method:'GET'})
                        .then(function successCallback(response) {
                            $rootScope.server_api = response.data;
                        });
                }
            }

            /**
             * Load parameters.json and inject it in $rootScope.config
             */
            function __loadConfig(){
                if($rootScope.config === void 0 || typeof  $rootScope.config == 'undefined'){
                    //@todo test if we can get config from localStorage
                    $http({url:angular.mApp.NAMESPACE.app.prod.default+'config/parrametters.json', method:'GET'})
                        .then(function successCallback(response) {
                            $rootScope.config = response.data;
                            $rootScope.$emit('configurationFileLoaded');
                        });
                }
            };

            return {
                init: init
            }
        }
    ]);
})(angular);
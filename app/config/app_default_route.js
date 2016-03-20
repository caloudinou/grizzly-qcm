(function (angular) {
    /**
     * App default routing
     */
    'use strict';

    angular.module(angular.mApp.name).config([ '$routeProvider', '$httpProvider',
        function ($routeProvider, $httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            //delete $httpProvider.defaults.headers.common['X-Requested-With'];

            //Default route if no route found
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ]);
})(angular);
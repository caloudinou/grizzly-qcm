(function (angular) {
    /**
     * App default routing
     */
    'use strict';

    angular.module(angular.mApp.NAMESPACE.app.name)
        .config([ '$routeProvider', '$locationProvider', '$httpProvider',
        function ($routeProvider, $locationProvider, $httpProvider) {

            $httpProvider.defaults.useXDomain = true;
            //delete $httpProvider.defaults.headers.common['X-Requested-With'];

            //Default route if no route found
            $routeProvider.otherwise({
                redirectTo: '/qcm'
            });
        } 
    ]);
})(angular);
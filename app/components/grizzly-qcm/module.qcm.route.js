(function (angular){
    'use strict';

    angular.module(angular.mApp.NAMESPACE.qcm.name).config([
        '$routeProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider.when(angular.mApp.NAMESPACE.routes.default.path,{
                controller:angular.mApp.NAMESPACE.controllers.default,
                templateUrl: angular.mApp.NAMESPACE.routes.default.templateUrl
            });

        }
    ])
})(angular);
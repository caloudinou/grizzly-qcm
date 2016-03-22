(function (angular){
    'use strict';

    angular.module(angular.mApp.NAMESPACE.qcm.name).config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when(angular.mApp.NAMESPACE.qcm.routes.default.path,{
                controller  : angular.mApp.NAMESPACE.qcm.controllers.default,
                templateUrl : angular.mApp.NAMESPACE.qcm.routes.default.templateUrl
            });

        }
    ])
})(angular);
(function (angular) {
    /**
     * Main App Configuration
     * We define the default routing here
     */
    'use strict';

    angular.module(angular.mApp.NAMESPACE.app.name)
        .config(['$locationProvider',
        function ($locationProvider) {

            //If html 5 is enabled (navigator is compatible), we enable clean urls
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false,
                rewriteLinks:true
            });
        }
    ]);
})(angular);
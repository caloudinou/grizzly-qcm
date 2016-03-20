   (function (angular){
    'use strict';

    angular.mApp.NAMESPACE.qcm= {
        name: 'qcm',
        controllers: {
            default: 'asideCtrl'
        },
        routes: {
            default:{
                templateUrl:'/app/components/grizzly-qcm/views/show/show.html',
                path:'/qcm'
            }
        }
    };

    angular.module(angular.mApp.NAMESPACE.qcm, [
        'ngRoute'
    ]);


})(angular);
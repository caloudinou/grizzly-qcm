(function (angular){
    'use strict';

    angular.mApp.NAMESPACE.qcm ={
        name:'qcm',
        controllers:{
            default:'qcmCtrl'
        },
        routes  : {
            default : {
                path        :'/qcm',
                    templateUrl : angular.mApp.NAMESPACE.app.prod.views  +   '/grizzly-qcm/views/show/show.html'
            }
        }
    };
    
    angular.module(angular.mApp.NAMESPACE.qcm.name, [
        'ngRoute'
    ]);
    
})(angular);
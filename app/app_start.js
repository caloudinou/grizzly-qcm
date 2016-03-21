(function(angular){
    'use strict';
    
    /**
     * Init Main App module
     */
    angular.module(angular.mApp.NAMESPACE.app.name, [
            angular.mApp.NAMESPACE.qcm.name,
            'ngRoute'
    ]);
    
})(angular);
(function(angular){
    'use strict';
    
    /**
     * Init Main App module
     */
    angular.module(angular.mApp.name, [
            angular.mApp.NAMESPACE.qcm,
            'ngRoute',
            'ngLocale',
            'ngMaterial',
            'ngMessages',
            'ngSanitize',
            'ngAnimate'
    ]);
    
})(angular);




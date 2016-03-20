/**
 * @author Pascal Navière <pascalou@gmail.com>
 */

(function (angular) {
    'use strict';

    angular.module(angular.mApp.name).filter('capitalize', function () {
        return function (text){
            return (text != null ? text.substring(0,1).toUpperCase()+text.substring(1):'');
        }
    });
})(angular);
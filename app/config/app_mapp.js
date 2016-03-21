(function (angular) {
    'use strict';

    var mApp = angular.mApp = angular.mApp || {};

        angular.mApp.NAMESPACE={
            app : {
                name : 'grizzlyLTDA-apps',
                prod :{
                    views:'/src/views',
                    default:'/src'
                } ,
                dev  :{
                    views: '/components',
                    default:''
                }  
            }
        };
    
})(angular);
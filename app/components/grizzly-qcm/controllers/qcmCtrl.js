/**
 * @author Pascal Navière <pascalou@gmail.com>
 */
'use strict';


(function (angular) {
    'use strict';

    angular.module(angular.mApp.NAMESPACE.qcm.name)
        .controller(angular.mApp.NAMESPACE.qcm.controllers.default, ['$scope', 

        function ($scope) {
            $scope.test='test A';
        }
    ]);
})(angular);
/**
 * @author Pascal Navière <pascalou@gmail.com>
 *
 * https://docs.angularjs.org/api/ng/directive/ngTransclude
 *
 * Modal directive. Insert <modal-dialog show="true|false" width="400px" height="400px">your content</modal-dialog>
 */


(function (angular) {
    'use strict';

    angular.module(angular.mApp.name).directive('modalDialog', function() {
        return {
            restrict: 'E',
            scope: {
                show: '='
            },
            replace: true, // Replace with the template below
            transclude: true, // we want to insert custom content inside the directive
            link: function(scope, element, attrs) {
                scope.dialogStyle = {};
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
            },
            template: "<div class='ng-modal' ng-show='show'>" +
            "<div class='ng-modal-overlay' ></div>" +
            "<div class='ng-modal-dialog' ng-style='dialogStyle'>" +
            "<div class='ng-modal-dialog-content' ng-transclude></div>" +
            "</div></div>"
        }
    });
})(angular);
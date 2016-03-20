/**
 * @author Pascal Navière <pascalou@gmail.com>
 * @author Slim Fraoua <sfraoua@gmail.com>
 *
 * This service deals with translation loading
 */

'use strict';

app.factory('TranslationLoaderService', ['$rootScope', '$http', '$sce',

    function ($rootScope, $http) {

        var navigatorLanguage = 'en';

        function init(){
            __loadNavigatorLanguage();
            __loadLanguage();
        }

        /**
         * Load navigator languages
         */
        function __loadNavigatorLanguage() {

            angular.forEach($rootScope.config.allowed_locales, function(item) {
                var str = navigator.language;
                var patt = new RegExp(item.prefix);

                if (patt.test(str)) {
                    navigatorLanguage = item.prefix;
                }
            });
        }

        /**
         * Load language from translation
         */
        function __loadLanguage() {

            var query = $http({
                method: 'get',
                url: '/translation/'+navigatorLanguage+'.json'
            });

            query.then(function successCallback(response) {
                $rootScope.translation = response.data.content;
            }, function errorCallback(response) {
                // @todo
            });

        }

        return {
            init : init
        };
    }
]);

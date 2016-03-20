/**
 * This Service is used to init / load project assets (logo ..)
 *
 * @author Pascal Navière <pascalou@gmail.com>
 */

(function (angular) {
    'use strict';

    angular.module(angular.mApp.name).factory('AssetsSvgService', ['$http', '$sce',

        function ($http, $sce) {

            var svg ={
                regex : /((http:\/\/|https:\/\/)?(www.)?(([a-zA-Z0-9-]){2,}\.){1,4}([a-zA-Z]){2,6}(\/([a-zA-Z-_\/\.0-9#:?=&;,]*)?)?)/,
               init : function(data){
                    if(!data)return false;
                    this.__loadSvg(data);
                }, 
                /**
                 * Load svg 
                 * @private
                 */
                 __loadSvg : function(data) {
                    /**
                    * est ce que c'est une url ou un svg à insérer
                    */
                    if(this.regex.test(data)){
                        //if url
                        var query = $http({
                            method: 'get',
                            url: data
                        });

                        /**
                         * Load and inject svg (vector) logo
                         */
                        query.then(
                            function successCallback(response) {
                                return $sce.trustAsHtml(response.data);
                            },
                            function errorCallback(response) {
                                //@todo common ajax error catcher
                            }
                        );
                    }else{
                        return $sce.trustAsHtml(data);
                    }



                }
            };


            return {
                init: function(data){
                    return svg.init(data);
                }
            };
        }

    ]);
})(angular);
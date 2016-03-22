/**
 * @author Pascal Navière <pascalou@gmail.com>
 */
'use strict';


(function (angular) {
    'use strict';

    angular.module(angular.mApp.NAMESPACE.qcm.name)
        .controller(angular.mApp.NAMESPACE.qcm.controllers.default, ['$scope', 

        function ($scope) {
            //valeur de test de l'initialization du projet
            $scope.test='test A';
            
            /**
             * Exemple de json que la variable $scope.quizz pourrais contenir
             * @todo : implementer une api server et faire un service qui recupere le json du retour de l'api
             */
            $scope.quizz = [
                {
                    "title" : "QUIZZ de Test",
                    "description" : "Ceci est un quizz de test qui illustre les possibilités de qu'offre mon questionnaire",
                    "questions" : [
                        {
                            "title" : "Question A : la ou les reponses sont des multiple de 2",
                            "description" : "test d'une question à choix multiple",
                            "type_anwser" : "multiple",
                            "max_answer"  : "",
                            "choice" : [
                                { "anwser" : "Reponse 1", "check_answer" : false},
                                { "anwser" : "Reponse 2", "check_answer" : true },
                                { "anwser" : "Reponse 3", "check_answer" : false},
                                { "anwser" : "Reponse 4", "check_answer" : true }
                            ]
                        },
                        {
                            "title" : "Question A bis : la ou les reponses sont des multiple de 2",
                            "description" : "version chip mode test d'une question à choix multiple",
                            "type_anwser" : "delete",
                            "max_answer"  : "",
                            "choice" : [
                                { "anwser" : "Reponse 1", "check_answer" : false},
                                { "anwser" : "Reponse 2", "check_answer" : true },
                                { "anwser" : "Reponse 3", "check_answer" : false},
                                { "anwser" : "Reponse 4", "check_answer" : true }
                            ]
                        },
                        {
                            "title" : "Question B : la reponse est un multiple de 4",
                            "description" : "test d'une question à choix unique",
                            "type_anwser" : "single",
                            "max_answer"  : "",
                            "choice" : [
                                { "anwser" : "Reponse 1", "check_answer" : false},
                                { "anwser" : "Reponse 2", "check_answer" : false},
                                { "anwser" : "Reponse 3", "check_answer" : false},
                                { "anwser" : "Reponse 4", "check_answer" : true }
                            ]
                        },
                        {
                            "title" : "Question C : donner deux multiple de trois compris entre 0 et 30 inclus",
                            "description" : "test d'une question à choix unique",
                            "type_anwser" : "free",
                            "max_answer"  : "5",
                            "choice" : [
                                { "anwser" : "0", "check_answer" : true},
                                { "anwser" : "3", "check_answer" : true},
                                { "anwser" : "6", "check_answer" : true},
                                { "anwser" : "9", "check_answer" : true},
                                { "anwser" : "12", "check_answer" : true},
                                { "anwser" : "15", "check_answer" : true},
                                { "anwser" : "18", "check_answer" : true},
                                { "anwser" : "21", "check_answer" : true},
                                { "anwser" : "24", "check_answer" : true},
                                { "anwser" : "27", "check_answer" : true},
                                { "anwser" : "30", "check_answer" : true}
                            ]
                        }
                    ]
                }
            ];
            
            angular.forEach($scope.quizz, function(q){
                angular.forEach(q.questions, function(question){
                    if(question.type_anwser == 'delete'){
                        $scope.chipsDelete = angular.copy(question.choice);
                    }
                });
            });
            
            $scope.chipsfree=[];
        }
    ]);
})(angular);
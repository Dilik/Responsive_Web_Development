'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope','$filter',function($scope,$filter) {
        document.getElementById('input').focus();
        $scope.TaskList = [];
        $scope.TLTween = [];
        $scope.AddToList = function () {
            if ($scope.task) {
                var TaskObj = {
                    title: $scope.task,
                    date1: $scope.dp,
                    priority: $scope.pty1
                };
                $scope.TaskList.push(TaskObj);
                $scope.task = $scope.dp = $scope.pty1 = "";
                document.getElementById('input').focus();
            }
        };

        $scope.sortList = null;
        $scope.sort = function (predicate, reverse) {
            $scope.sortList = predicate;
            var orderBy = $filter('orderBy');
            $scope.TaskList = orderBy($scope.TaskList, predicate, reverse);
        };
        $scope.sort('-date1',false)

        $scope.removeTask = function() {
            $scope.TaskList = $scope.TaskList.filter(
                function (task) {
                    return !task.selected;
                }
            )
        };

        $scope.remove = function(index) {
            $scope.TaskList.splice(index,1);
        };

        $scope.edit = function(index) {
            alert("Please !!! Copy or Memorize the Original Data Before You Edit It. Cancel Function Still Under Construction )))")
            document.getElementById("editTitle"+index).hidden = '';
            document.getElementById("title"+index).hidden = 'hidden';
            document.getElementById("editPriority"+index).hidden='';
            document.getElementById("priority"+index).hidden='hidden';
            document.getElementById("editDate"+index).hidden='';
            document.getElementById("date1"+index).hidden='hidden';

            //icon change
            document.getElementById("save"+index).hidden = '';
            document.getElementById("cancel"+index).hidden = '';
            document.getElementById("edit"+index).hidden = 'hidden';
            document.getElementById("remove"+index).hidden = 'hidden';

            $scope.save = function (index) {
                document.getElementById("editTitle"+index).hidden = 'hidden';
                document.getElementById("title"+index).hidden = '';
                document.getElementById("editPriority"+index).hidden='hidden';
                document.getElementById("priority"+index).hidden='';
                document.getElementById("editDate"+index).hidden='hidden';
                document.getElementById("date1"+index).hidden='';

                //icon
                document.getElementById("save"+index).hidden = 'hidden';
                document.getElementById("cancel"+index).hidden = 'hidden';
                document.getElementById("edit"+index).hidden = '';
                document.getElementById("remove"+index).hidden = '';



                $scope.cancel = function(index){
                    document.getElementById("editTitle"+index).hidden = 'hidden';
                    document.getElementById("title"+index).hidden = '';
                    document.getElementById("editPriority"+index).hidden='hidden';
                    document.getElementById("priority"+index).hidden='';
                    document.getElementById("editDate"+index).hidden='hidden';
                    document.getElementById("date1"+index).hidden='';

                    //icon
                    document.getElementById("save"+index).hidden = 'hidden';
                    document.getElementById("cancel"+index).hidden = 'hidden';
                    document.getElementById("edit"+index).hidden = '';
                    document.getElementById("remove"+index).hidden = '';
                }
            }

        }

    }
    ]);
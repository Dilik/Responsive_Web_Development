'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$filter', function($scope, $filter) {
        $scope.taskList = [
            {title: "Learn to code", priority: "A"},
            {title: "Take out trash", priority: "B"},
            {title: "Make dinner", priority: "C"}
        ];
        $scope.sortField = null;
        $scope.sort = function(pred, reverse) {
            $scope.sortField = pred;
            var orderBy = $filter("orderBy");
            $scope.taskList = orderBy($scope.taskList, pred, reverse);
        }
        $scope.sort("-priority", false);
        $scope.addTask = function() {
            if($scope.task) {
                var taskObj = {title: $scope.task,
                               priority: 'A'};
                $scope.taskList.push(taskObj);
                console.log($scope.taskList);
                $scope.task = "";
            }
        };
        $scope.removeMe = function(task) {
            console.log("Removing", task);
            $scope.taskList = $scope.taskList.filter(
                function(t){return t !== task});
        }
}]);
/*
Create an Angular module.
Create an Angular controller.
Use the $http angular service to read the contents of topspots.json into a local variable in your controller.
Use $scope in your controller to bind the JSON data received to the view elements in your html.
*/

var ToDoListApp = angular.module("ToDoListApp", []);

// We're passing a function into a function = called a closure
	ToDoListApp.controller("MainController", function($scope) {
		
		$scope.todos = [];
		$scope.sortType = "";

		$scope.addTodo = function () {
			$scope.todos.push({"name": $scope.todoInput, "priority": $scope.priority});
			$scope.todoInput = "";
			//console.log($scope.todos);
			$scope.priority = "";
	};

	});


	// What needs to be done: When orderButton1 is clicked, the rows in the table need to sort by value, highest (3) to lowest (1).
	// When orderButton2 is clicked, the rows in the table need to sort alphabetically...
	// When orderButton 3 is clicked, the rows in the table need to sort from lowest to highest.
	// When High Priority is selected, the table data needs an ng-class of red, etc., etc.


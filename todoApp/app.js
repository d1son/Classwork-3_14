var todoApp = angular.module("todoApp", []);
todoApp.controller('TodoListController', ['$scope','$log', function($scope,$log){
	$scope.toDoItems= [
			{ name: "My Homework", done: true },
			{ name: "My Laundry", done: true },
			{ name: "Buy Groceries", done: true },
			{ name: "Walk the Dog", done: true },
		]

		$scope.onChange = function() {
			$log.log($scope.toDoItems);
		}

}])
	
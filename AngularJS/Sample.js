/**
 * アプリケーションの定義
 */
var app = angular.module('App', []);

/**
 * controllerでアプリケーションの機能を設定する
 */
app.controller('todoController', function($scope) {
    // [a1] - $scopeにtodosプロパティを追加し、初期値を定義
    $scope.todos = [
      { text: 'AngularJSを勉強する', done: true },
      { text: 'AngularJSを使ったアプリを作る', done: false }
    ];

    // [a2] - todosに項目を追加するメソッド
    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.todoText, done: false });
        $scope.todoText = '';
    };

    // [a3] - todosを検索し、終わっていないtodoの数を出力するメソッド
    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    // [a4] - todosの中身を終わっていないtodoだけにする
    $scope.archive = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}
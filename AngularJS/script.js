/**
 * アプリケーションの定義
 */
var app = angular.module('App', []);

/**
 * controllerでアプリケーションの機能を設定する
 */
app.controller('AppController', function($scope){
    $scope.items = [
	               { "name": "iPhone6s", "price": 69800 },
	               { "name": "book", "price": 980 },
	               { "name": "watch", "price": 19800 },
	               { "name": "pc", "price": 198000 },
	               { "name": "display", "price": 39800 },
	               { "name": "key board", "price": 1980 },
    ];
});

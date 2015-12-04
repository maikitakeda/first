var app = angular.module('testApp', [])
    .controller('testAppController', function () {
    var taskList = this;
    taskList.tasks = [{ text: 'GMの予約', done: true }, { text: '月次報告書の作成', done: false }];

    taskList.remaining = function () {
        var count = 0;
        angular.forEach(taskList.tasks, function (task) { count += task.done ? 0 : 1;});
        return count;
    };

    taskList.add = function () {
        taskList.tasks.push({ text: taskList.text, done: false });
        taskList.text = '';
    };

    taskList.delete = function () {
        var oldtasks = taskList.tasks;
        taskList.tasks = [];
        angular.forEach(oldtasks, function (task) {
            if (!task.done) taskList.tasks.push(task);
        });
    };

});

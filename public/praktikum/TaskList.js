"use strict";

var TaskList = function (title) {
    this.title = title;
    this.taskList = [];
}

TaskList.prototype = {
    addTask: function (task) {
        this.taskList.push(task)
    },
    removeTaskByIndex: function (index) {
        if (index > -1) {
            this.taskList.splice(index, 1);
        }
    },
    removeTask: function (task) {
        const index = this.taskList.indexOf(task);
        this.removeTaskByIndex(index);
    },
    render: function () {
        var wrapperHtml = $('<div>');
        var titleHtml = $('<h1>', {id: 'taskListTitle'}).text(this.title);
        var taskListHtml = $('<ul>', {id: "taskList"});
        for (var i = 0; i < this.taskList.length; i++)
        {
            taskListHtml.append(this.taskList[i].render(i));
        }

        wrapperHtml.append(titleHtml, taskListHtml);
        return wrapperHtml;
    }
}
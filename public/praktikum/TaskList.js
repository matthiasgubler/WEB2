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
        for (let taskItem of this.taskList) {
            taskListHtml.append(taskItem.render());
        }

        wrapperHtml.append(titleHtml, taskListHtml);
        return wrapperHtml;
    }
}
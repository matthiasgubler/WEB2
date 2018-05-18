"use strict";

var apiUrl = "https://zhaw.herokuapp.com/task_lists/";

var TaskList = function (id, title) {
    this.id = id;
    this.title = title;
    this.tasks = [];
}

TaskList.prototype = {
    addTask: function (task) {
        this.tasks.push(task)
        this.dataChanged();
    },
    removeTaskByIndex: function (index) {
        if (index > -1) {
            this.tasks.splice(index, 1);
            this.dataChanged();
        }
    },
    removeTask: function (task) {
        const index = this.tasks.indexOf(task);
        this.removeTaskByIndex(index);
        this.dataChanged();
    },
    render: function () {
        var wrapperHtml = $('<div>');
        var titleHtml = $('<h1>', {id: 'taskListTitle'}).text(this.title);
        var taskListHtml = $('<ul>', {id: "taskList"});
        for (var i = 0; i < this.tasks.length; i++) {
            taskListHtml.append(this.tasks[i].render(i));
        }

        wrapperHtml.append(titleHtml, taskListHtml);
        return wrapperHtml;
    },
    dataChanged: function () {
        updateServerPost(this.id, this, function (result) {
            console.log("Server Update Successful");
            console.log(result);
        });
    }
}

TaskList.load = function (id, callback) {
    $.getJSON(apiUrl + id, null, function (result) {
        callback(TaskList.mapObjectToTaskList(result));
    }).fail(function () {
        taskList = new TaskList(id, id);
        updateServerPost("", taskList, function (result) {
            window.location.hash = result.id;
        });
    });
}

TaskList.mapObjectToTaskList = function (result) {
    let taskList = new TaskList(result.id, result.title);
    for (var index in result.tasks) {
        let resultTask = result.tasks[index];
        taskList.tasks.push(Task.mapObjectToTask(resultTask, taskList));
    }
    return taskList;
}

function updateServerPost(id, taskList, callback) {
    $.post(apiUrl+id, JSON.stringify(taskList), callback, "json")
        .fail(function () {
            console.log("HTTP Post Failed");
        });
}
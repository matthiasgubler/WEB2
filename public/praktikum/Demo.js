"use strict";

var taskList;

window.addEventListener("hashchange", function () {
    loadTaskList(getHashParamOrDefault());
});

function taskListLoaded(loadedTaskList) {
    taskList = loadedTaskList;
    renderTodoContent();
}

$(function () {
        loadTaskList(getHashParamOrDefault());
        $('#addTodo').on('click', function () {
            taskList.addTask(new Task("", false));
            renderTodoContent();
        })
    }
);

function loadTaskList(id) {
    TaskList.load(id, taskListLoaded);
}

let renderTodoContent = function () {
    let todoContent = $("#todos");
    todoContent.empty();
    todoContent.append(taskList.render());
}

function getHashParamOrDefault() {
    let hashParamValue = window.location.hash.substr(1);
    return hashParamValue === "" ? "demo" : hashParamValue;
}

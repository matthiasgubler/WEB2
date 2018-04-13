"use strict";
var taskList = new TaskList("Demo");

$(function(){
    taskList.addTask(new Task("Buy Milk"));
    taskList.addTask(new Task("Freddy"));
    renderTodoContent();

    $('#addTodo').on('click',function(){
        taskList.addTask(new Task(""));
        renderTodoContent();
    })
});

let renderTodoContent = function(){
    let todoContent = $("#todos");
    todoContent.empty();
    todoContent.append(taskList.render());

}



"use strict";

var Task = function (title, done, taskList) {
    this.title = title;
    this.done = done;
    this.taskList = taskList;
}

Task.prototype = {
    markDone: function () {
        this.done = true;
        this.taskList.dataChanged();
    },
    markUndone: function () {
        this.done = false;
        this.taskList.dataChanged();
    },
    setTitle: function (title) {
        this.title = title;
        this.taskList.dataChanged();
    },
    render: function (i) {
        let checkBoxId = 'checkbox-'+i;
        var task = this;
        let appendClass = task.done ? 'done' : '';
        var parentListItem = $('<li>', {class: 'todoItem '+appendClass})
        var check = $('<input>', {type: 'checkbox', name: 'done', checked: this.done, id: checkBoxId});
        var label = $('<label>', {for: checkBoxId, class: 'checkboxlabel'});
        var span = $('<span>', {class: 'checkbox'});
        var fieldDiv = $('<div>', {class: 'fielddiv'});
        var field = $('<input>', {type: 'text', name: 'title', value: this.title});
        field.on('change', function () {
            task.setTitle($(this).prop('value'));
        });

        check.on('change', function () {
            const checkbox = $(this);
            let checked = checkbox.prop('checked');
            if (checked) {
                parentListItem.addClass('done');
                task.markDone();
            }else{
                parentListItem.removeClass('done');
                task.markUndone();
            }
        });
        fieldDiv.append(field);
        label.append(check, span);
        return parentListItem.append(label, fieldDiv);
    },
    toJSON: function () {
        return {
            title: this.title,
            done: this.done
        };
    }
}

Task.mapObjectToTask = function (result, taskList){
    return new Task(result.title, result.done, taskList);
}
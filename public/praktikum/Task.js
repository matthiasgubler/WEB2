"use strict";

var Task = function (title) {
    this.title = title;
    this.done = false;
}

Task.prototype = {
    markDone: function () {
        this.done = true;
    },
    markUndone: function () {
        this.done = false;
    },
    render: function () {
        var task = this;
        let appendClass = task.done ? 'done' : '';
        var parentListItem = $('<li>', {class: 'todoItem '+appendClass})

        var check = $('<input>', {type: 'checkbox', name: 'done', checked: this.done});
        var field = $('<input>', {type: 'text', name: 'title', value: this.title});
        field.on('change', function () {
            task.title = $(this).prop('value');
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

        return parentListItem.append(check, field);
    }
}
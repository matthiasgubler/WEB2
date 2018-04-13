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
        var check = $('<input>', {type: 'checkbox', name: 'done', checked: this.done});
        var field = $('<input>', {type: 'text', name: 'title', value: this.title});
        var task = this;
        field.on('change', function () {
            task.title = $(this).prop('value');
        });

        check.on('change', function () {
            const checkbox = $(this);
            let checked = checkbox.prop('checked');
            console.log(checked);
            console.log(task);
            if (checked) {
                task.markDone();
            }else{
                task.markUndone();
            }
        });

        return $('<li>').append(check, field);
    }
}
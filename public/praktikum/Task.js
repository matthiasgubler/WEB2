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
            task.title = $(this).prop('value');
        });

        check.on('change', function () {
            const checkbox = $(this);
            let checked = checkbox.prop('checked');
            if (checked) {
                parentListItem.addClass('done');
                task.markDone();
                //parentListItem.slideUp();
            }else{
                parentListItem.removeClass('done');
                task.markUndone();
            }
        });
        fieldDiv.append(field);
        //span.append(field);
        label.append(check, span);
        return parentListItem.append(label, fieldDiv);
    }
}
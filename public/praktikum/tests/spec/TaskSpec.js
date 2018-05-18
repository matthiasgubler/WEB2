"use strict";

describe("Task", function () {
    var task, taskList;
    beforeEach(function () {
        taskList = new TaskList("", "");

        spyOn(taskList, "dataChanged");
        task = new Task("MyTitle", false, taskList);
    });

    describe("basic features", function () {
        it("should be correctly initialized", function () {
            expect(task.title).toEqual("MyTitle");
            expect(task.done).toBeFalsy()
        });
        it("should be able mark a task as done", function () {
            task.markDone();
            expect(task.done).toBeTruthy();
        });
        it("should be able mark a task as undone", function () {
            task.markUndone();
            expect(task.done).toBeFalsy();
        });
    });
    describe("render", function () {
        it("renders an checkbox and an text-input", function () {
            let renderedTask = task.render();
            expect(renderedTask.children().length).toBe(2);
            expect(renderedTask.find('input[name=title]'));
            expect(renderedTask.find('input[name=done]'));
            expect(renderedTask.find('.checkboxlabel'));
        });
        it("renders an unckeched checkbox", function () {
            let renderedTask = task.render();
            expect(renderedTask.find('input[name=done]')).not.toBeChecked();
        });
        it("renders an checked checkbox", function () {
            task.markDone();
            let renderedTask = task.render();
            expect(renderedTask.find('input[name=done]')).toBeChecked();
        });
        it("renders an MyTitle field", function () {
            let renderedTask = task.render();
            expect(renderedTask.find('input[name=title]')).toHaveValue('MyTitle');
        });
        it("renders an custom field", function () {
            task.title = 'custom';
            let renderedTask = task.render();
            expect(renderedTask.find('input[name=title]')).toHaveValue('custom');
        });
    });
});



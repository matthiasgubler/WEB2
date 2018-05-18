describe("TaskList", function () {
    var taskList;
    beforeEach(function () {
        taskList = new TaskList("MyTitleList");
    });

    describe("basic features", function () {
        it("should be correctly initialized", function () {
            expect(taskList.title).toEqual("MyTitleList");
            expect(taskList.tasks.length).toEqual(0);
        });

        it("should possible to add elements", function () {
            taskList.addTask(new Task("Element1"));
            taskList.addTask(new Task("Element2"));
            expect(taskList.tasks.length).toEqual(2);
            expect(taskList.tasks[0].title).toEqual("Element1");
            expect(taskList.tasks[1].title).toEqual("Element2");
        });

        it("should possible to remove elements", function () {
            taskList.addTask(new Task("Element1"));
            var task2 = new Task("Element2");
            taskList.addTask(task2);
            expect(taskList.tasks.length).toEqual(2);
            taskList.removeTaskByIndex(0);
            expect(taskList.tasks.length).toEqual(1);
            expect(taskList.tasks[0].title).toEqual("Element2");

            taskList.removeTask(task2);
            expect(taskList.tasks.length).toEqual(0);
        });
    });

    describe("render", function () {
        it("has h1 title MyTitleList", function () {
            let renderedTaskList = taskList.render();
            expect(renderedTaskList.find('h1')).toHaveText('MyTitleList');
        });
        it("has h1 title custom", function () {
            taskList.title = 'custom';
            let renderedTaskList = taskList.render();
            expect(renderedTaskList.find('h1')).toHaveText('custom');
        });
        it("has empty ul", function () {
            let renderedTaskList = taskList.render();
            expect(renderedTaskList.find('ul')).toBeEmpty();
        });
        it("has ul with one task", function () {
            taskList.addTask(new Task('Task1'));
            let renderedTaskList = taskList.render();
            expect(renderedTaskList.find('ul')).not.toBeEmpty();
            expect(renderedTaskList.find('ul li:first-child input[name=title]')).toHaveValue('Task1');
        });
    });

});

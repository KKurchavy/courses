//Менеджер руководит проектом (связывает программистов и проект, имя, фамилия, опыт (используется как коэфициент к труду программистов), список сотрудников, список проектов)

function Manager(name, surname, experience, salary) {
    Worker.apply(this, arguments);
    this.experience = experience;
    this.salary = salary;
    this.htmlWiev = filling.createNode(this);
}

Manager.prototype = Object.create(Worker.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getProject = function(list) {
    this.project = list.pop();
}

Manager.prototype.selectDeveloperForProject = function(devsList) {
    let developer = devsList.pop();
    this.project.addDeveloper(developer);
}
Manager.prototype.addLinesForProject = function() {
    this.project.linesCount -= this.project.developer.linesCount * this.experience;
}
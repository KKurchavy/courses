class Manager extends Worker {

    constructor(name, surname, experience, salary){
        super(name, surname)
        this.salary = salary;
        this.experience = experience;
        this.htmlView = filling.createNode(this);
    }

    getProject(list) {
        this.project = list.pop();
    }

    selectDeveloperForProject(devsList) {
        this.project.addDeveloper(devsList.pop());
    }

    addLinesForProject() {
        this.project.linesCount -= this.project.developer.linesCount * this.experience;
    }
}

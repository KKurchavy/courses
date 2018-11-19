//Проект (название, стоимость, необходимое количество строк кода (мера завершенности проекта))

function Project(name, cost, linesCount){
    this.name = name;
    this.cost = cost;
    this.linesCount = linesCount;
    this.developers = [];
    this.free = true;
    this.htmlWiev = filling.createNode(this);
}

Project.prototype.constructor = Project;
Project.prototype.addDeveloper = function(developer) {
    this.developer = developer;
}
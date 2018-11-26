class Project{

    constructor(name, cost, linesCount){
        this.name = name;
        this.cost = cost;
        this.linesCount = linesCount;
        this.free = true;
        this.htmlView = filling.createNode(this);
    }

    addDeveloper(developer) {
        this.developer = developer;
    }
}
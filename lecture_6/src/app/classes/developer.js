class Developer extends Worker{
    constructor(name, surname, level, salary) {
    super(name, surname);
    this.level = level;
    this.salary = salary;
    this.linesCount = this.getLinesCount(this.level);
    this.htmlView = filling.createNode(this);
    }
    
    getLinesCount() {
        switch(this.level) {
            case "junior" :
                return 2000;
            case "middle" :
                return 5000;
            case "senior" :
                return 10000;
            default :
                return 100;
        }
    }
}


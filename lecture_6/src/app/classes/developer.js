//Программист (имя, фамилия, уровень (junior, middle, senior), пишет определенное количество строк (зависит от уровня), зарплата)

function Developer(name, surname, level, salary){
    Worker.apply(this, arguments);
    this.level = level;
    this.salary = salary;
    this.linesCount = this.getLinesCount(this.level);
    this.htmlWiev = filling.createNode(this);
}

Developer.prototype = Object.create(Worker.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getLinesCount = (level) => {
    switch(level) {
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

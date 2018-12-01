var developers = {
    all: [],

    addDeveloper(developer) {
        this.all.push(developer);
    }

}

var managers = {
    all: [],
    
    addManager(manager) {
        this.all.push(manager);
    } 

}

var butget = {
    __money__ : 100000,

    getMoneyCount() {
        return this.__money__;
    },

    getSalary(worker) {
        this.__money__ -= worker.salary;
    },

    setProfit(project) {
        this.__money__ += project.cost;
    }
}


var developers = {
    all: [],

    addDeveloper: function(developer) {
        this.all.push(developer);
    }

}

var managers = {
    all: [],
    
    addManager: function(manager) {
        this.all.push(manager);
    } 

}

function removeElementFromList(list, element) {
    
        for(let i = 0; i < list.length; i++){

            if(list[i] == element) {
                list.splice(i, 1);

                return element;
            }
        
        }

}

var butget = {
    __money__ : 100000,

    getMoneyCount: function() {
        return this.__money__;
    },

    getSalary: function(worker) {
        this.__money__ -= worker.salary;
    },

    setProfit: function(project) {
        this.__money__ += project.cost;
    }
}


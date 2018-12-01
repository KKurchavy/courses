const process = (() => {
    let TIMER_ID;
    const TICK_TIME = 2000;

    let UNOCCUPIED_PROJECTS;
    let UNOCCUPIED_DEVELOPERS;
    let UNOCCUPIED_MANAGERS;

    let WORKING_MANAGERS = [];

    return {
        start() {
            getWorkers();

            if(toWork()){
                TIMER_ID = setInterval(run, TICK_TIME);
            }
            
        },

        stop() {
            clearTimeout(TIMER_ID); 
        }
    }

    function run() {
        UNOCCUPIED_DEVELOPERS.forEach(butget.getSalary);
        WORKING_MANAGERS.forEach((manager) => {
            butget.getSalary(manager);
            butget.getSalary(manager.project.developer);
            manager.addLinesForProject();

            if(manager.project.linesCount < 0){
                UNOCCUPIED_DEVELOPERS.push(manager.project.developer);
                UNOCCUPIED_MANAGERS.push(WORKING_MANAGERS.remove(manager));
                butget.setProfit(manager.project);
                removeHtmlViewIn(manager.project, document.querySelector(".projects").childNodes )
                entities.projects.remove(manager.project);
                filling.showListInNode(entities.projects, document.querySelector(".projects"));
                toWork();
            }

        });
        document.querySelector(".butget").innerText = `${butget.getMoneyCount()}$`;
    }

    function toWork() {
        
        if(!UNOCCUPIED_MANAGERS.length || !UNOCCUPIED_DEVELOPERS.length){
            alert("необходимо нанять минимум одного пр-та и менеджера");
            return;
        }

        UNOCCUPIED_MANAGERS.forEach((manager) => {

            if(UNOCCUPIED_PROJECTS.length){
            manager.getProject(UNOCCUPIED_PROJECTS);
            manager.selectDeveloperForProject(UNOCCUPIED_DEVELOPERS);
            WORKING_MANAGERS.push(UNOCCUPIED_MANAGERS.remove(manager));
            } else {
				clearTimeout(TIMER_ID);
                alert("Невероятно, на данный момент проектов нет :(");
                return;
            }

        });
        
        return true;
    }

    function removeHtmlViewIn(element, ListHtmlViews) {
        for(let i = 0; i < ListHtmlViews.length; i++) {

            if(element.htmlView == ListHtmlViews[i]) {
                ListHtmlViews[i].remove();
                
                return;
            }

        }
    }
    

    function getWorkers() {
        UNOCCUPIED_PROJECTS = entities.projects.copy();
        UNOCCUPIED_DEVELOPERS = developers.all.copy();
        UNOCCUPIED_MANAGERS = managers.all.copy();
    }

})();


Array.prototype.copy = function () {
    return this.slice();
}

Array.prototype.remove = function (element) {

    for (let i = 0; i < this.length; i++) {

        if (this[i] == element) {
            element = this.splice(i, 1)[0];

            return element;
        }

    }

}
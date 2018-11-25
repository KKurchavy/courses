var process = (function() {
    var TIMER_ID;
    var TICK_TIME = 2000;

    var UNOCCUPIED_PROJECTS = [];
    var UNOCCUPIED_DEVELOPERS = [];
    var UNOCCUPIED_MANAGERS = [];

    var WORKING_MANAGERS = [];

    return {
        start: function() {
            getWorkers();

            if(UNOCCUPIED_MANAGERS == 0 || UNOCCUPIED_DEVELOPERS == 0){
                alert("необходимо нанять минимум одного пр-та и одного менеджера");

                return;
            }

            toWork();
            TIMER_ID = setInterval(run, TICK_TIME);
        },

        stop: function() {
            clearTimeout(TIMER_ID);
            getWorkers(); 
        }
    }

    function run() {
        WORKING_MANAGERS.forEach(function(manager) {
            butget.getSalary(manager);
            butget.getSalary(manager.project.developer);
            manager.addLinesForProject();

            if(manager.project.linesCount < 0){
                UNOCCUPIED_DEVELOPERS.push(manager.project.developer);
                UNOCCUPIED_MANAGERS.push(removeElementFromList(WORKING_MANAGERS, manager));
                butget.setProfit(manager.project);
                
                removeHtmlWievIn(manager.project, document.querySelector(".projects").childNodes)
                removeElementFromList(entities.projects, manager.project);


                filling.showListInNode(entities.projects, document.querySelector(".projects"));
                
                toWork();
            }

        });
        
        document.querySelector(".butget").innerText = butget.getMoneyCount() + "$";
    }

    function toWork() {
        UNOCCUPIED_MANAGERS.forEach(function(manager) {

            if(UNOCCUPIED_PROJECTS.length){
            manager.getProject(UNOCCUPIED_PROJECTS);
            manager.selectDeveloperForProject(UNOCCUPIED_DEVELOPERS);
            WORKING_MANAGERS.push(removeElementFromList(UNOCCUPIED_MANAGERS, manager));
            } else {
				clearTimeout(TIMER_ID);
                alert("Невероятно, на данный момент проектов нет :(");
                return;
            }

        });
    }

    function removeHtmlWievIn(element, ListHtmlWievs) {
        for(let i = 0; i < ListHtmlWievs.length; i++) {

            if(element.htmlWiev == ListHtmlWievs[i]) {
                ListHtmlWievs[i].remove();
                
                return;
            }

        }
    }
    

    function getWorkers() {
        copyArray(UNOCCUPIED_PROJECTS, entities.projects);
        copyArray(UNOCCUPIED_DEVELOPERS, developers.all);
        copyArray(UNOCCUPIED_MANAGERS, managers.all);
    }

    function copyArray(duplicate, array) {
        duplicate.length = 0;
        for(let i = 0; i < array.length; i++){
            duplicate[i] = array[i];
        }
    }
})()
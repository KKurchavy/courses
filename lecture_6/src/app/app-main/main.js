(() => {
    function connectScript(scriptURL) {
        const script = document.createElement('script');
        script.src = scriptURL;
        document.body.appendChild(script);
    };

    connectScript("./src/app/classes/worker.js");
    connectScript("./src/app/classes/developer.js");
    connectScript("./src/app/classes/manager.js");
    connectScript("./src/app/classes/project.js");
    connectScript("./src/app/app-filling/filling.js");
    connectScript("./src/app/app-entities/entities.js");
    connectScript("./src/app/app-resources/resources.js");
    connectScript("./src/app/app-events/events.js");
    connectScript("./src/app/app-process/process.js");

    window.onload = () => {
        const applicantsList = document.querySelector(".applicants");
        const projectsList = document.querySelector(".projects");
        filling.showListInNode(entities.developers, applicantsList.querySelector(".developers"));
        filling.showListInNode(entities.managers, applicantsList.querySelector(".managers"));
        filling.showListInNode(entities.projects, projectsList);
        events.setHandler(document.querySelector(".applicants"), events.hireHandler);
        events.setHandler(document.querySelector(".workers"), events.fireHandler);
        events.setHandler(document.querySelector(".start"), process.start);
        events.setHandler(document.querySelector(".pause"), process.stop);
    }

})();
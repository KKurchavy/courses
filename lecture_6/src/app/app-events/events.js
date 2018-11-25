var events = (function(){
    return {

        hiringHandler: function(event) {

            if(event.target.className == "hire-button") {

                if(event.target.parentElement.className == "worker developer") {
                    let developer = events.hiring(event.target.parentElement, entities.developers);
                    developers.addDeveloper( developer );
                } else {
                    let manager = events.hiring(event.target.parentElement, entities.managers);
                    managers.addManager( manager );
                }

            }

        },

        removingHandler: function(event) {
            
            if(event.target.classList[1] == "remove-button") {

                if(event.target.parentElement.className == "worker developer") {
                    let developer = events.removing(event.target.parentElement, developers);
                    removeElementFromList(developers.all, developer);
                } else {
                    let manager = events.removing(event.target.parentElement, managers);
                    removeElementFromList(developers.all, manager);
                }

            }

        },

        setEventForElem: function(elem, func) {
            elem.addEventListener("click", func);
        },

        hiring: function(elem, list) {
            var currentElem = events.searchElement(elem, list);
            events.changeButton(currentElem.htmlWiev.lastChild);

            document.querySelector(".workers")
                .querySelector("."+ elem.classList[1] +"s")
                .appendChild(currentElem.htmlWiev);

            return currentElem;    
        },

        removing: function(elem, list) {
            var currentElem = events.searchElement(elem, list.all);
            events.changeButton(currentElem.htmlWiev.lastChild);
            
            document.querySelector(".applicants")
                    .querySelector("."+ elem.classList[1] +"s")
                    .appendChild(currentElem.htmlWiev);

            removeElementFromList(list, currentElem);
            
            return currentElem;
        },

        searchElement: function(htmlWiev, list) {
            for(let i = 0; i < list.length; i++){

                if(list[i].htmlWiev == htmlWiev){
                    return list[i];    
                }

            }
        },

        changeButton: function(button) {
            if(button.innerText == "нанять"){

                button.innerText = "уволить";
                button.classList.add("remove-button");
            } else {

                button.innerText = "нанять";
                button.classList.remove("remove-button");
            }
        },

    }
})()


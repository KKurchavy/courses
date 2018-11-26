let events = (function(){
    return {

        hireHandler(event) {

            if(event.target.className == "hire-button") {

                if(event.target.parentElement.className == "worker developer") {
                    let developer = events.hire(event.target.parentElement, entities.developers);
                    developers.addDeveloper( developer );
                } else {
                    let manager = events.hire(event.target.parentElement, entities.managers);
                    managers.addManager( manager );
                }

            }

        },

        fireHandler(event) {
            
            if(event.target.classList[1] == "remove-button") {

                if(event.target.parentElement.className == "worker developer") {
                    let developer = events.fire(event.target.parentElement, developers.all);
                    developers.all.remove(developer);
                } else {
                    let manager = events.fire(event.target.parentElement, managers.all);
                    developers.all.remove(manager);
                }

            }

        },

        setHandler(elem, func) {
            elem.addEventListener("click", func);
        },

        hire(elem, list) {
            const currentElem = events.searchElement(elem, list);
            events.changeButton(currentElem.htmlView.lastChild);

            document.querySelector(".workers")
                .querySelector("."+ elem.classList[1] +"s")
                .appendChild(currentElem.htmlView);

            return currentElem;    
        },

        fire(elem, list) {
            const currentElem = events.searchElement(elem, list);
            events.changeButton(currentElem.htmlView.lastChild);
            
            document.querySelector(".applicants")
                    .querySelector("."+ elem.classList[1] +"s")
                    .appendChild(currentElem.htmlView);

            list.remove(currentElem);
            
            return currentElem;
        },

        searchElement(htmlView, list) {
            for(let i = 0; i < list.length; i++){

                if(list[i].htmlView == htmlView){
                    return list[i];    
                }

            }
        },

        changeButton(button) {
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

const filling = (function () {
    return {

        createNode(object) {

            let node = document.createElement("div");
            
            switch (object.constructor.name) {
                case "Project":
                    node.classList.add("project");
                    node.appendChild(document.createTextNode(object.name));
                    node.appendChild(document.createElement("hr"));
                    node.appendChild(document.createTextNode(`строки: ${object.linesCount}`));
                    node.appendChild(document.createElement("hr"));
                    node.appendChild(document.createTextNode(`цена:${object.cost}`));
                    break;

                default: 
                    node.classList.add("worker");
                    node.appendChild(document.createTextNode(`${object.name} ${object.surname}`));
                    node.appendChild(document.createElement("hr"));

                    if (object instanceof Developer) {
                        node.classList.add("developer");
                        node.appendChild(document.createTextNode(object.level));
                    } else {
                        node.classList.add("manager");
                        node.appendChild(document.createTextNode(object.experience));
                    }

                    node.appendChild(document.createElement("hr"));
                    node.appendChild(document.createTextNode(`ЗП: ${object.salary}$`));
                    node.appendChild(document.createElement("hr"));
                    var button = document.createElement("button");
                    button.classList.add("hire-button");
                    button.innerText = "нанять";
                    node.appendChild(button);
                    break;
            }
            return node;
        },

        showListInNode(list, node) {
            list.forEach((obj) => {
                node.appendChild(obj.htmlView);
            })
        }
    }
})();

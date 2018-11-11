var toolsHistory = (function() {
    return {
        setHistoryElement: function() {
            this.elem = document.querySelector(".history");
        },
        addHistoryChild: function(result) {
            var textNode = document.createElement('p');
            textNode.innerText = computingTools.getExpression() + ' = ' + result;
            this.elem.appendChild(textNode);
        }
    }
})()
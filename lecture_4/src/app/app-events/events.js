var events = (function() {
    var me = this;
    return {
        addForArray: function(arr) {
            arr.forEach = Array.prototype.forEach;
            arr.forEach(this.setHandler);
        },
        getChildNodeText: function(obj) {
            return obj.querySelector("p").innerText;
        },
        setHandler: function(obj) {
            switch(events.getChildNodeText(obj)) {
                case "=" : 
                    obj.addEventListener('click', events.keydownEnter);
                    break;
                case "CE" : 
                    obj.addEventListener('click', events.keydownClean);
                    break;
                default:
                    obj.addEventListener('click', function () { 
                        events.keydownDefault(events.getChildNodeText(obj)); 
                    } );
                    break;
            }
        },
        setKeyDownHandler: function() {
            document.body.addEventListener('keydown', this.keyDownHandler)
        },
        keyDownHandler: function(key) {
            if(key.key != "Shift")
            switch(key.key) {
                case "Enter" :  
                        events.keydownEnter();
                    break;
                case "Delete" : 
                        events.keydownClean();
                    break;
                default:
                        events.keydownDefault(key.key)
                    break;
            }
        },
        keydownEnter: function() {
            var result = computingTools.getCalculationsResult();
            computingTools.showResult();
            toolsHistory.addHistoryChild(result);
            computingTools.clearExpression();
            computingTools.setExpression(result);
        },
        keydownClean: function() {
            computingTools.clearEntered(); 
            computingTools.clearExpression();
        },
        keydownDefault: function(str) {
            computingTools.setExpression(str); 
            computingTools.setOutputText();
        }
    }
})()
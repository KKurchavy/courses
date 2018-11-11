var computingTools = (function() {
    var me = this;
    me.expression = "";
    return {
        getNumbersArray: function() {
            return document.querySelectorAll(".number");
        },
        getOperationsArray: function() {
            return document.querySelectorAll(".operation");
        },
        getCalculationsResult: function() {
            return eval(me.expression);
        },
        getExpression: function() {
            return me.expression;
        },
        getOutputElement: function() {
            me.output = document.querySelector(".output").querySelector("p");
        },
        setExpression: function(str) {
            me.expression += str;
        },
        setOutputText: function() {
            if(me.expression) {
                me.output.innerText = me.expression;
            }
        },
        clearExpression: function() {
            me.expression = "";
        },
        clearEntered: function() {
            me.output.innerText = "0";
        },
        showResult: function() {
            me.output.innerText = this.getCalculationsResult();
        }
    }
})()
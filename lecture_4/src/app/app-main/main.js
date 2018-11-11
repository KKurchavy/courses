
connectScript("./src/app/app-calculator/calculator.js");
connectScript("./src/app/app-history/history.js");
connectScript("./src/app/app-events/events.js");


window.onload = function() {
    var numbersArray = computingTools.getNumbersArray();
    var operationsArray = computingTools.getOperationsArray();
    computingTools.getOutputElement();
    toolsHistory.setHistoryElement();
    events.addForArray(numbersArray);
    events.addForArray(operationsArray);
    events.setKeyDownHandler();
}

function connectScript(scriptURL) {
    var script = document.createElement('script');
    script.src = scriptURL;
    document.documentElement.appendChild(script);
}
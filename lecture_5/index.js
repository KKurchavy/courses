function debounce(callback, delay) {
    var timerId;

    return function () {
        var args = arguments;

        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(function () {
            callback.apply(null, args);
        },
            delay
        );
    }
}

function setTimer(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}



function XHR(method, url, body) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.send(body);

        // плохая идея была делать через onreadystatechange
        // теперь отваливается только где нужно)
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }

            }
        }
    });
}

function request(url) {
    return new Promise((res, rej) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;

        setTimeout(() => res(url), delayTime);
    });
}

function performRequests(list) {
    return new Promise((res, rej) => {
        var promises = list.map(request);
        var resArray = [];

        promises.forEach(element => {

            element.then(result => {
                resArray.push(result);

                if (resArray.length == promises.length) {
                    res(resArray)
                }
            }, rej);

        });
    });
}
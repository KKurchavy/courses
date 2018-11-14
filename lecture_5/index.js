function debounce(callback, delay) {

    return function () {

        var args = arguments;
        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        this.timerId = setTimeout(function () {
            callback.apply(null, args);
        },
            delay
        );

    }

}

function setTimer(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    });
}

function httpGet(url) {

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

function request(url) {
    return new Promise((res, rej) => {
        const delayTime = Math.floor(Math.random() * 10000) + 1;

        setTimeout(() => res(url), delayTime);
    });
}

function getResults() {
    return Promise.all(Array.prototype.map.call(arguments, request));
}

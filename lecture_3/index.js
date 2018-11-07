var toolsBox = (function () {
    return {
        isUndefined: function (any) {
            if (arguments.length) {
                return any === undefined;
            }
        },
        isNull: function (any) {
            return any === null;
        },
        isNaN: function (any) {
            return any != any;
        },
        isEmptyObj: function (obj) {
            return Object.keys(obj).length === 0;
        },
        mapping: function (obj, func) {
            var mapResult = {};
            for (var key in obj) {
                mapResult[key] = func(obj[key]);
            }
            return mapResult;
        },
        getRandomNumber: function (minNumber, maxNumber) {
            return Math.floor(Math.random() * (maxNumber - minNumber + 1) + 1);
        },
        compareObj: function (firstObj, secondObj) {
            if(Object.keys(firstObj).length !== Object.keys(secondObj).length) {
                return false;
            } else {
                if(this.isEmptyObj(firstObj) && this.isEmptyObj(secondObj)) {
                    return true;
                } else {
                    var result;
                    for(var key in firstObj) {
                        if(typeof(firstObj[key]) == 'object') {
                            result = this.compareObj(firstObj[key], secondObj[key]);
                        } else {
                            result = (firstObj[key] === secondObj[key]);
                        }
                        if(!result) {
                            return false;
                        }
                    }
                    return result;
                }
            }
        },
        filterObj: function (obj, func) {
            var resultObj = {};
            for (var key in obj) {
                if (func(obj[key])) {
                    resultObj[key] = obj[key];
                }
            }
            return resultObj;
        }
    }
})();
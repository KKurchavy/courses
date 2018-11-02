/**
 * Возвращает true, если a > b, и false в других случаях
 *
 * @param {number} a Число для сравнения.
 * @param {number} b Число для сравнения.
 * @return {boolean} результат сравнения.
 */
function compare(a, b) {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        if (a > b) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log('Error. The arguments is not a number')
    }
}




/**
 * Возвращает новую строку в виде "вы ввели + str"
 *
 * @param {string} str Заданная строка.
 * @return {string} результат конкатенации.
 */
function changeString(str) {
    return 'Вы ввели ' + str;
}




/**
 * Проверяет, является ли переданный аргумент null или undefined
 *
 * @param {any} obj объект для проверки на null и undefined.
 * @return {boolean} Результат проверки.
 */
function checkForEmpty(obj) {
    if(arguments.length == 0) {
        console.log('Error. No arguments');
        return;
    } 

    if(obj === undefined || obj === null) {
        return true;
    } else {
        return false;
    }
}




/**
 * Добовляет объекту свойство checked со значение true
 *
 * @param {object} a Число для сравнения.
 */
function addCheckProp(obj) {
    obj.checked = true;
}




/**
 * Выводит в консоль все числа от введенного числа до нуля (в обе стороны)
 *
 * @param {number} a Конец интервала.
 */
function showInterval(number) {
    if(!Number.isFinite(a)) return;

    for(var i = -number; i <= number; i++) {
        console.log(Math.abs(i));
    }
}


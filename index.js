const arr = [];
const START_DIGIT = 0;
const END_DIGIT = 100;
const DELIMITR = 2;

/**
 * Заполнение массива четными числами
 *
 * @param arrIn Массив для заполнения
 */

function addOddInArray(arrIn) {
    for (let i = START_DIGIT; i <= END_DIGIT; i++) {
        if (!(i%DELIMITR)) {
            arrIn.push(i)
        }
    }
}
addOddInArray(arr);
console.log(arr);
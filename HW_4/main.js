// 1) функция принимает массив и возвращает сумму всех его элементов

let arr1 = [1, 3, 7, 100, -100, 22];

function arrSum(arr) {
    const arrLength = arr.length;
    let sum = 0;

    for (let i = 0; i < arrLength; i++) {
        sum += arr[i];
    }

    return sum;
}

arrSum(arr1);
console.log(arrSum(arr1));
// 2) функция принимает массив и искомое значение
// и возврат его индекс в массиве, если значение найдено, если нет - то -1

let value1 = 100;
let value2 = 5;

function findIndex(arr, value) {
    const arrLength = arr.length;
    let index = -1;

    for (let i = 0; i < arrLength; i++) {
        if (value === arr[i]) {
            index = i;
            break;
        }
    }

    return index;
}

findIndex(arr1, value1);
console.log(findIndex(arr1, value1));
console.log(findIndex(arr1, value2));

// 3) функция принимает 2 массива и возвращает новый,
// состоящий из элементов обоих массивов

let arr2 = [99, 45, 32, 1, -120];

function joinArr(arr1, arr2) {
    return [...arr1, ...arr2];
}

joinArr(arr1, arr2);
console.log(joinArr(arr1, arr2));
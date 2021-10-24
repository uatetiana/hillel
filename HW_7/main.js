const arr1 = [1, 2, 3];

//1)С помощью рекурсии последовательно выведем элементы массива.

function func(arr, start, index) {
  const el = arr.slice(start, index).join();
  console.log(el);

  if (arr.length > index) {
    return func(arr, start + 1, index + 1);
  }
}
//func(arr); //1,2,3
func(arr1, 0, 1);

//2)С помощью рекурсии найдем сумму элементов этого массива. (console.log(getSum(arr)); // выведет 6)
let arr = [1, 2, 3];
function getSum(arr) {
  let sum = arr.shift();

  if (arr.length) {
    sum += getSum(arr);
  }
  return sum;
}
console.log(getSum(arr));

//3) задачи на слайдах 33-35 по желанию, или если есть проблемы с понимаем как делать

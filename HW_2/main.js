// Задача 1. Секунды в часы и минуты

// Дано n секунд. Определить сколько это в часах и минутах;
// Пример
// 7260с это 2 часа 1 мнута

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

let seconds = parseInt(prompt('Please enter seconds to convert into minutes: '));

let hours = Math.trunc(seconds /  SECONDS_IN_HOUR);
let minutes = Math.trunc(( seconds % SECONDS_IN_HOUR ) / SECONDS_IN_MINUTE);

alert(`${seconds} seconds are ${hours} ${hours < 2 && hours > 0 ? 'hour' : 'hours'} and ${minutes} ${minutes < 2 && minutes > 0 ? 'minute' :  'minutes'}`);

// Задача 2. Поклейка комнаты

// Программа расчитывает необходимое количество рулонов
// обоев для поклейки комнаты по данным введенным пользователем.
// Известно, что комната имеет одинаковые окна и одну дверь.
// Пользователь вводит:
//  - высоту потолка (в метрах)
//  - ширину комнаты (в метрах)
//  - длину комнаты (в метрах)
//  - к-во окон
//  - высоту окна
//  - ширину окна
//  - высоту двери
//  - ширину двери

const QTY_OF_DOORS = 1; //could not be used if equals 1;
const WIDTH_OF_ROLL = 0.53;
const LENGTH_OF_ROLL = 10;

let heightOfCeiling = parseInt(prompt('Enter height of ceiling, meters: '));
let widthOfRoom = parseInt(prompt('Enter width of room, meters: '));
let lengthOfRoom = parseInt(prompt('Enter length of room, meters: '));
let qtyOfWindow = parseInt(prompt('Enter quantity of windows, units'));
let heightOfWindow = parseInt(prompt('Enter height of window, meters: '));
let widthOfWindow = parseInt(prompt('Enter width of window, meters: '));
let heightOfDoor = parseInt(prompt('Enter height of the door, meters: '));
let widthOfDoor = parseInt(prompt('Enter width of the door, meters: '));

let rollSqM = LENGTH_OF_ROLL * WIDTH_OF_ROLL;
let qtyOfRolls = ((( heightOfCeiling * lengthOfRoom  * 2 + heightOfCeiling * widthOfRoom * 2) - qtyOfWindow * heightOfWindow * widthOfWindow - heightOfDoor * widthOfDoor) / rollSqM).toFixed(0);

alert(`Quantity of rolls: ${qtyOfRolls}`);

// Задача 3. Максимальное из введенных чисел

// Пользователь вводит с клавиатуры 5 целых чисел. Напишите программу, которая
// определяет максимальное из этих 5 чисел (Подсказка – решение должно быть простым).

let firstNum = parseInt(prompt("Enter the 1st number: "));
let secondNum = parseInt(prompt("Enter the 2nd number: "));
let thirdNum = parseInt(prompt("Enter the 3rd number: "));
let fourthNum = parseInt(prompt("Enter the 4th number: "));
let fifthNum = parseInt(prompt("Enter the 5th number: "));

let max = 0;

if (firstNum > secondNum) {
  max = firstNum;
}

if (secondNum > max) {
  max = secondNum;
}

if (thirdNum > max) {
  max = thirdNum;
}

if (fourthNum > max) {
  max = fourthNum;
}

if (fifthNum > max) {
  max = fifthNum;
}

alert(`Maximum number is ${max}`);

// Задача 4. Тест

// Создать тест на 10 вопросов.
// Вопросы с вариантами ответа 1-то, 2-то, 3-то , пользователь 
// вводит только номер правильного, по его мнению, ответа.
// Пользователь отвечает на них последовательно и получает оценку по 12 балльной 
// системе оценивания.

// Например:

// Сколько будет 2+2?
// 1 - 5
// 2 - 3
// 3 - 4
// 4 - неизвестно
// введите номер ответа:

confirm('Please choose one correct answer, there will be 10 questions.');

let count = 0;
const scoreForOneQuestion = parseFloat(1.2.toFixed(1));
console.log(scoreForOneQuestion)

let test1 = parseInt(prompt(`I'm sorry,
he just __________________________ ( = left the office).
He'll be back in half an hour.

1. stormed out
2. walked
3. stepped out
`));

if (test1 === 3) {
    count++;
}

let test2 = parseInt(prompt(`Please let me know ________________.

1. through email
2. by email
3. with email
`));

if (test2 === 2) {
    count++;
}

let test3 = parseInt(prompt(`The amount of work that
you have to do is called your __________________________.

1. workload
2. job load
3. work-heap
`));

if (test3 === 1) {
    count++;
}

let test4 = parseInt(prompt(`I remember faces very well. = I'm

1. good at faces
2. good with faces
3. good in faces
`));

if (test4 === 2) {
    count++;
}

let test5 = parseInt(prompt(`He is the head of the accounting department. =
He's __________________________ of the accounting department.

1. in charge
2. charge
3. in control
`));

if (test5 === 1) {
    count++;
}

let test6 = parseInt(prompt(`He has been programming for 15 years,
 and sometimes uses terms that are no longer __________________ in programming.
 ( = slightly outdated terms)

1. overused
2. used up
3. widely used
`));

if (test6 === 3) {
    count++;
}

let test7 = parseInt(prompt(`This function __________________
( = produces) the wrong value.

1. returns
2. reveals
3. replays
`));

if (test7 === 1) {
    count++;
}

let test8 = parseInt(prompt(`Do a search to find every __________________ of this variable.
 ( = a list of every time the variable appears in the code).

1. instant
2. constant
3. instance
`));

if (test8 === 3) {
    count++;
}

let test9 = parseInt(prompt(`Other parts of the program
will be able to __________________
these objects using simple function calls.

1. work
2. work with
3. work at
`));

if (test9 === 2) {
    count++;
}

let test10 = parseInt(prompt(`I'm not sure I can keep ______ this.

1. doing
2. to do
3. do
`));

if (test10 === 1) {
    count++;
}

alert(`Your total score is ${count * scoreForOneQuestion}`);

// Задача 5. Проверка даты

// Написать приложение, которое позволяет проверить дату введенную пользователем.
// Учесть, что в году 12 месяцев, в январе - 31 день, в феврале 28 дней для не високосного
// года и 29 дней для високосного года и т.д.
// Год високосный, если он делится на четыре без остатка, но если он делится на 100 без остатка, это не високосный год. 
// Однако, если он делится без остатка на 400, это високосный год. Таким образом, 2000 г.
// является особым високосным годом, который бывает лишь раз в 400 лет.

let dayToBeChecked = parseInt(prompt('Enter the day of the date - dd: '));
let monthToBeChecked =  parseInt(prompt('Enter the month of the date - mm: '));
let yearToBeChecked =  parseInt(prompt('Enter the year of the date - yyyy: '));
let maxDaysInMonth;

let isCorrectMonth = false;
let isCorrectYear = false;
let isCorrectDay = false;

if (monthToBeChecked > 0 && monthToBeChecked < 13) {
    isCorrectMonth = true;
}

if (yearToBeChecked > 0) {
    isCorrectYear = true;
}

const isLeapYear = yearToBeChecked % 4 === 0 
&& yearToBeChecked % 100 !== 0 || yearToBeChecked % 400 === 0;

switch (monthToBeChecked) {
    case 1: maxDaysInMonth = 31;
    break;
    case 2: if (isLeapYear && monthToBeChecked === 2) {
                maxDaysInMonth = 29;
            } else {
                maxDaysInMonth = 28;
            }
    break;
    case 4: maxDaysInMonth = 30;
    break;
    case 5: maxDaysInMonth = 31;
    break;
    case 6: maxDaysInMonth = 30;
    break;
    case 7: maxDaysInMonth = 31;
    break;
    case 8: maxDaysInMonth = 31;
    break;
    case 9: maxDaysInMonth = 30;
    break;
    case 10: maxDaysInMonth = 31;
    break;
    case 11: maxDaysInMonth = 30;
    break;
    case 12: maxDaysInMonth = 31;
    break;
    default: maxDaysInMonth = false;
}

if (maxDaysInMonth) {
    if (dayToBeChecked <= maxDaysInMonth && dayToBeChecked > 0) {
        isCorrectDay = true;
    }
}

let isCorrectDate = isCorrectDay && isCorrectMonth && isCorrectYear;

alert(`The date dd/mm/yyyy ${dayToBeChecked}/${monthToBeChecked}/${yearToBeChecked} is ${isCorrectDate ? 'correct' : 'incorrect'}`);

// Задача 6. Линейное уравнение

// Линейным называют уравнение вида ax+b=0, где a и b - числовые коэффициенты,
// например 2x+4=0. Написать программу, решающую такое уравнение.
// Пользователь вводит значение коэффициентов a и b,
// выводит решение, учесть ситуации a=0 и b=0.

let a1 = parseFloat(prompt("Введите значение а: "));
let b1 = parseFloat(prompt("Введите значение b: "));

if (a1 !== 0) {
  if (b1 === 0) {
    alert(`x = 0`);
  } else {
    if (b1 > 0) {
      alert(`x = ${(b1 * -1) / a1}`);
    }
    if (b1 < 0) {
      alert(`x = ${(b1 * -1) / a1}`);
    }
  }
} else {
  if (b1 === 0) {
    alert("Корень уравнения - любое число.");
  } else {
    alert("У уравнения нет корней.");
  }
}

// Задача 7. Квадратное уравнение

// Квадратным называют уравнение вида ax^2+bx+c=0, где a,b,c - числовые коэффициенты.
// Решение данного уравнения можно найти
// по формуле дискриминанта (http://edu.glavsprav.ru/info/diskriminant/). Написать программу,
// которая решает квадратные уравнения по введенным пользователем коэффициентам.

let a = parseFloat(prompt("Введите значение а: "));
let b = parseFloat(prompt("Введите значение b: "));
let c = parseFloat(prompt("Введите значение c: "));

if (a !== 0) {
  let D = b * b - 4 * a * c;

  if (D > 0) {
    alert(
      `x1 = "${(b * -1 + Math.sqrt(D)) / (2 * a)}";  x2 = "${(-b -
        Math.sqrt(D)) /
        (2 * a)}"`
    );
  } else {
    if (D === 0) {
      alert(`x =  ${(b * -1) / (2 * a)}`);
    }
    if (D < 0) {
      alert("Не имеет действительных решений, так как D меньше 0");
    }
  }
} else {
  alert("Это не квадратное уравнение.");
}

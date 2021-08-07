// 1) Написать функцию принимающую число и считающую его факториал

function getFactorial(num) {
  let increment = 1;
  let result = 1;
  for (let i = 0; i < num; i++) {
    result *= increment++;
  }

  return result;
}

getFactorial(6);
console.log(getFactorial(6));

// 2) Написать функцию принимающую число и степень и
// выводящую результат возведения (применять цикл а не Math.pow)

function pow(base, exponent) {
  let result = 1;
  const value = exponent % 2 === 0 ? 1 : -1;
  const coefficient = exponent > 0 ? 1 : -1;

  if (isInteger(exponent)) {
    for (let i = 0; i < exponent * coefficient; i++) {
      result *= base;
    }
    result * value;

    if (exponent < 0) {
      result = 1 / result;
    }
  } else if (!isInteger(exponent) && base > 0) {
    let coefficient = exponent < 0 ? -1 : 1;
    let iterations = (1 / exponent) * coefficient;
    let num = base / 2;
    for (let i = 0; i < iterations; i++) {
      result = base / num;
    }

    if (exponent < 0) {
      result = 1 / result;
    }

    return result;
  } else {
    return "Операция невозможна. Вы попытались возвести отрицательное число в нецелую степень";
  }

  return result;
}

function isInteger(num) {
  return (num ^ 0) === num;
}

pow(-1.5, -10);
console.log(pow(16, 0.25));

// 3) Написать функцию для нахождения наименьшего общего кратного

// 4*) Написать функцию для вывода числа "задом на перед"

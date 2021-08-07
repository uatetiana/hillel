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
    
    for (let i = 0; i < exponent; i++) {

    }
}

pow(3, 4);
console.log(pow(3, 4));

// 3) Написать функцию для нахождения наименьшего общего кратного


// 4*) Написать функцию для вывода числа "задом на перед"
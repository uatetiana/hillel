//Task 1

let firstNumber = prompt('Please enter the first number: ');
let secondNumber = prompt('Please enter the second number: ');
let thirdNumber = prompt('Please enter the third number: ');
let qtyOfNum = 3;
let arithmeticMean = (parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber)) / qtyOfNum;

alert('Arithmetic mean: ' + arithmeticMean);

//Task 2

let temperatureInCelsius= prompt('Please enter temperature in Celsius: ');
let temperatureInFahrenheit = parseInt(temperatureInCelsius) * 9/5 + 32;

alert('Temperature in Fahrenheit: ' + temperatureInFahrenheit);

//Task 3

let rectangleFirstSide = parseInt(prompt('Enter the first side of the rectangle, cm: '));
let rectangleSecondSide = parseInt(prompt('Enter the second side of the rectangle, cm: '));
let perimeterOfRectangleInCm = rectangleFirstSide * 2 + rectangleSecondSide * 2;
let squareOfRectangleInCm = rectangleFirstSide * rectangleSecondSide;

alert('Perimeter of the rectangle in cm: ' + perimeterOfRectangleInCm);
alert('Square of rectangle in cm: ' + squareOfRectangleInCm);




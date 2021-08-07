// Дополнительные задачи

// Задача 1. Самолет и топливо

// Грузовой самолет перевозит груз из пункта A в пункт B, осуществляя остановку в пункте C.
// Расход топлива самолета зависит от веса груза следующим образом:
// до 1т - 25л/100км
// до 2т - 30л/100км
// до 3т - 35л/100км
// до 4т - 42л/100км
// до 5т - 50л/100км
// более 5т - не взлетит

// Пользователь вводит объем бака самолета в литрах,
// исходное количество топлива в баке, вес груза и расстояния AC и CB.
// Программа должна выяснить долетит ли самолет и необходима
// ли дозаправка в пункте C и в каком объеме. Учесть что бак
// не "резиновый" (дозаправка может не поместится в бак)

const FUEL_CONSUMPTION_CARGO_MAX_1T = 25; // per 100km
const FUEL_CONSUMPTION_CARGO_MAX_2T = 30; // per 100km
const FUEL_CONSUMPTION_CARGO_MAX_3T = 35; // per 100km
const FUEL_CONSUMPTION_CARGO_MAX_4T = 42; // per 100km
const FUEL_CONSUMPTION_CARGO_MAX_5T = 50; // per 100km

const cargoWeight = parseFloat(prompt("Введите вес груза, кг: ") / 1000);
const fuelTankVolume = parseFloat(
  prompt("Введите объем топливного бака в литрах: ")
);
const distanceAC = parseFloat(
  prompt("Введите расстояние из пункта А в пункт С, км: ")
);
const distanceCB = parseFloat(
  prompt("Введите расстояние из пункта С в пункт B, км: ")
);
const initialFuelQtyInTank = parseFloat(
  prompt("Введите исходное количество топлива в баке, л: ")
);

let fuelConsumption; // per 100km

const CARGO_WEIGHT_1T = 1;
const CARGO_WEIGHT_2T = 2;
const CARGO_WEIGHT_3T = 3;
const CARGO_WEIGHT_4T = 4;
const CARGO_WEIGHT_5T = 5;

if (cargoWeight < CARGO_WEIGHT_1T) {
  fuelConsumption = FUEL_CONSUMPTION_CARGO_MAX_1T;
}

if (cargoWeight >= CARGO_WEIGHT_1T && cargoWeight < CARGO_WEIGHT_2T) {
  fuelConsumption = FUEL_CONSUMPTION_CARGO_MAX_2T;
}

if (cargoWeight >= CARGO_WEIGHT_2T && cargoWeight < CARGO_WEIGHT_3T) {
  fuelConsumption = FUEL_CONSUMPTION_CARGO_MAX_3T;
}

if (cargoWeight >= CARGO_WEIGHT_3T && cargoWeight < CARGO_WEIGHT_4T) {
  fuelConsumption = FUEL_CONSUMPTION_CARGO_MAX_4T;
}

if (cargoWeight >= CARGO_WEIGHT_4T && cargoWeight < CARGO_WEIGHT_5T) {
  fuelConsumption = FUEL_CONSUMPTION_CARGO_MAX_5T;
}

const fuelNeededAC = (distanceAC / 100) * fuelConsumption;
const fuelRemainingAC = initialFuelQtyInTank - fuelNeededAC;
const isEnoughFuelInTankAC = fuelRemainingAC >= 0 ? true : false;

const fuelNeededCB = (distanceCB / 100) * fuelConsumption;
const isTripPossibleCB = fuelNeededCB <= fuelTankVolume;
let fuelToBeChargedCB;
const needToChargeAdd = fuelNeededCB > fuelRemainingAC;

if (isEnoughFuelInTankAC && isTripPossibleCB) {
  if (needToChargeAdd) {
    fuelToBeChargedCB = fuelNeededCB - fuelRemainingAC;
    alert(`Нужна дозаправка в пункет С: ${fuelToBeChargedCB} литров`);
  } else {
    alert(`Полет возможен без дозаправки в пункте С.`);
  }
} else {
  alert(`Полет не возможен`);
}

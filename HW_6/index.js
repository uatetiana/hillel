// реализовать функции для работы с массивами:
// map(arr, mapper), some(arr, predicate), every(arr, predicate),
// доп. - reduce(arr, predicate,startValue)

const string = (item) => (typeof item === "string" ? item : undefined);

const arr = [12, 25, 31, "hello", "Javascript"];
const arr1 = [12, 20, 100];
const arr2 = ["hello", "Javascript", "2021"];

// map(arr, mapper)
function myMap(arr, mapper) {
  let mappedArr = [];
  for (const arrElement of arr) {
    const el = mapper(arrElement);
    if (el) {
      mappedArr.push(el);
    }
  }
  return mappedArr;
}
console.log(myMap(arr, string));
console.log(myMap(arr1, string));

//some(arr, predicate)
function mySome(arr, predicate) {
  let res = false;
  for (const arrElement of arr) {
    const el = predicate(arrElement);
    if (el) {
      res = true;
      break;
    }
  }
  return res;
}

console.log(mySome(arr, string));
console.log(mySome(arr1, string));

//every(arr, predicate)
function myEvery(arr, predicate) {
  let res = true;
  for (const arrElement of arr) {
    const el = predicate(arrElement);
    if (!el) {
      res = false;
      break;
    }
  }
  return res;
}

console.log(myEvery(arr, string));
console.log(myEvery(arr1, string));
console.log(myEvery(arr2, string));

// Задача 2
// ------------------------------------
const collection = [
  {
    name: "Александр",
    surname: "Алексеев",
    patronymic: "Игоревич",
    phone: "00380502213261",
  },
  {
    name: "Алина",
    surname: "Миронова",
    patronymic: "Игоревна",
    phone: "00380504787878",
  },
  {
    name: "Константин",
    surname: "Коровин",
    patronymic: "Александрович",
    phone: "00380502213271",
  },
  {
    name: "Павел",
    surname: "Комаров",
    patronymic: "Трофимов",
    phone: "00380995476556",
  },
  {
    name: "Павел",
    surname: "Петров",
    patronymic: "Маркович",
    phone: "00380675478974",
  },
];

// а) Используя методы для работы с массивами выбрать из массива людей тех,
// кого имя и фамилия начинаются на одну букву (Александр Алексеев), про одного человека хранить: имя, фамилию и отчество
const firstLetter = collection
  .filter(
    ({ name, surname }) => name[0].toUpperCase() === surname[0].toUpperCase()
  )
  .map(({ name, surname, patronymic }) => {
    return {
      name,
      surname,
      patronymic,
    };
  });
console.log("firstLetter:", firstLetter);

// б) Преобразовать массив людей в массив строк с фамилией и инициалами
const stringArray = collection.map(
  ({ name, surname, patronymic }) => `${surname} ${name[0]}.${patronymic[0]}`
);
console.log("string Array: ", stringArray);

// в) Осуществить поиск контактов по массиву по началу номера телефона (контакт = имя+телефон)
function findPhone(phone) {
  return collection
    .filter((user) => !user.phone.indexOf(phone))
    .map((contact) => `${contact.name} ${contact.phone}`);
}
console.log("filtered Users1: ", findPhone("003805036"));
console.log("filtered Users2: ", findPhone("003806754"));

// г) Проверить наличие телефонного номера среди массива контактов
function checkFullPhone(phone) {
  const result = collection.filter((user) => user.phone === phone);
  if (result.length) {
    return "Contact is found";
  } else {
    return "Contact not found";
  }
}
console.log("full phone1:", checkFullPhone("00380502213271"));
console.log("full phone2:", checkFullPhone("00380502213277"));

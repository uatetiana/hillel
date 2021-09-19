// Строки:
// ——————————————————————————————————————————————————
// Задание 1:
// ——————————————————————————————————————————————————
//  Задача: 
//  Написать функцию , 
//  которая принимает строку и подсчитывает в ней число пробелов и тегов <br/>
//  результат в виде alert « Вы ввели стоку: ……………., в ней ХХ пробелов и УУ переводов строки»
// ——————————————————————————————————————————————————

function spacesLineBreaksCount(string) {
    let lineBreak = '<br/>';
    let space = 32;
    let counterLineBreaks = 0;
    let counterSpaces = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) === space) {
            counterSpaces++;
        }
    }
    counterLineBreaks = Array.from(string.matchAll(lineBreak)).length;

    alert(`Вы ввели стоку: ${string} в ней ${counterSpaces} пробелов и ${counterLineBreaks} переводов строк`)
    //return [counterSpaces, counterLineBreaks];    
}

const testString1 = "Let's test spaces.";
const testString2 = "There should be 5 spaces found.";
const testString3 = `Line breaks for test.<br/><br/>. To be equal 3.<br/>
The end of the string.`;
// console.log(spacesLineBreaksCount(testString1));
// console.log(spacesLineBreaksCount(testString2));
// console.log(spacesLineBreaksCount(testString3));
// spacesLineBreaksCount(testString1);
// spacesLineBreaksCount(testString2);
// spacesLineBreaksCount(testString3);

// Задание 2:
// ——————————————————————————————————————————————————
//  Задача: 
//  Написать функцию , которая принимает количество 
//  cлов и генерирует текст из этого количества слов
//  Дополнительно*:
//  использовать Math.random() для генерации кода символа
// ——————————————————————————————————————————————————

function randomText(num) {
    let words = [];  

    for (let j = 0; j < num; j++) {
        let letter = [];
        for (let i = 0; i < Math.floor(Math.random() * 9 + 1); i++) {
            letter.push(String.fromCharCode(Math.floor(Math.random() * 26 + 97)));
        }
        words.push(letter.join(''));
    }

    return words.join(' ');
}

randomText(7);
console.log(randomText(7));

// Задание 3:
// ——————————————————————————————————————————————————
//  Задача: 
//  Написать функцию , 
//  которая принимает строку и слово и возвращает 
//  массив всех положений данного слова в строке
function findWord(str, word) {
    let wordIndex = [];
    const regExp = /\.|,|:|!|\?|;/g;
    const res = str.replace(regExp, '');
    const a = res.split(' ');

    a.forEach((item, index) => {
        if (a[index] === word) {
            wordIndex.push(index);
        }
    });

    return wordIndex;
}

const testSentence = 'I ;ate to a sock!,. because people ...on the Internet told me to.';
const word = 'to';

findWord(testSentence, word);
console.log(findWord(testSentence, word));

// ——————————————————————————————————————————————————
// Задание 4*:
// ——————————————————————————————————————————————————
//  Задача: 
//  Написать функцию , которая принимает 
// название задачи и добавляет ее в массив по алфавиту

function sortNames(str, arr) {
    const names = [...arr, str].sort();

    return names;
}

sortNames('sort', ['shuffle', 'replace']);

console.log(sortNames('sort', ['shuffle', 'replace']));
console.log(sortNames('12sas', ['10ssss', 'sdsdsd']))
// 1) Оголосіть три різні змінні за допомогою "let", "const", "var"
let a = 1;
const d = 'Name';
var c = { 
    name :'Rob' 
}; 

// 2) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення

let a1 = 1;
const b1 = 2;

// 3) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

// I like JS

/* I like JS
and learn 
something 
new it si cooll */

// 4) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу String.
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let l = 'Hello';
console.log (typeof l );

// 5) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Number.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let l1 = 4;
console.log (typeof l1 );

// 6) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Boolean.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let hisHome = true;
console.log (typeof hisHome );

// 7) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Object яке буде містити хоча б 3 ключі.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let myInfo = {
    age : 24,
    name : 'Robert',
    location : 'Ukraine'
   
};
console.log (typeof myInfo);

// 8) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Array яке буде містити хоча б 3 значення.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let carModel = ['X5', 'CLS', 'Megan'];
console.log (typeof carModel);

// 9) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Function.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

//First option

let myFunc = function() {};
console.log (typeof myFunc);

//Second option

let myFunc1 = () => {};
console.log (typeof myFunc1);

// 10) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Undefined.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let newVar;
console.log(typeof newVar);

// 11) Оголосіть одну змінну і прийсвойте в неї будь яке значення типу Null.
// * Bиведіть в консоль тип змінної виклристовуючи оператор "typeof" і функцію "console.log()"

let l2 = null;
console.log(typeof l2);

// 12) Оголосіть змінну user типу Object і опишіть своє: ім'я, фамілію, дату народження,
// місце проживання, стать і можете добавити ще додаткові параметри використовуючи різні типи даних.

let user = {
    age: 24,
    male: 'man',
    lastName: 'Kulik',
    firstName: 'Robert',
    location: 'Uzhgorod',
    birthDate: '04/08/1996',
    Cars: [ 'Volkswaden', 'Opel']
};





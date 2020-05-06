// 1) Оголосіть одну змінну якій можна міняти значення і одну змінну якій не можна міняти значення
let a = 1;
const b =2;

// 2) Напишіть 1 коментар в 1 рядок і напишіть ще один коментар на 4 рядки

//hello world !

/* Hello
world */

// 3) Створіть "масив" який буде містити 5 довільних значень.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з масиву перше і останнє значення.
// * Виведіть змінну в консоль за допомогою "console.log"

let myCars = [ 'Opel','VW','Porshe','BMW','Mercedes' ];
console.log(myCars);

delete myCars [0];
delete myCars [4];

console.log(myCars);

// 4) Створіть "об'єкт" який буде містити 5 довільних ключів із довільними значеннями.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Видаліть з об'єкту перший і останній ключ
// * Виведіть змінну в консоль за допомогою "console.log"

let myCars = {
    car1:'Opel',
    car2:'VW',
    car3:'Porshe',
    car4:'BMW',
    car5:'Mercedes' 
};
console.log(myCars);

delete myCars.car1;
delete myCars.car5;

console.log(myCars);

// 5) Напишіть всі способи створення функції.
function myCar() {};

let myCar = () => {};

let myCar = function () {};

let sum = new Function('arg1,arg2', ' return arg1+arg2; ');

// 6) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.
let a = 10;
let b = 5;
let c = 5;

let sum = function(arg1,arg2,arg3 )  {
         return arg1 + arg2 + arg3

};
sum (10,5,5);

let sum = function(arg1,arg2,arg3 )  {
    return arg1 + arg2 + arg3

};
sum (a,b,c);



// 7) За допомогою тернарного оператору присвойте значення у змінну "salary" використовуючи змінну "workType". Якщо workType дорівнює "fulltime", тоді значення змінної має бути "1000" інакше "500".
// * Виведіть "salary" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "1000" в іншому "500"
let workType = 'fulltime';
let salary = ( workType === 'fulltime') ? '1000' : '500';
console.log(workType);

let workType = 'part-time';
let salary = ( workType === 'fulltime') ? '1000' : '500';
console.log(workType);


// 8) Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// * Виведіть змінну в консоль за допомогою "console.log"
// * Використовуючи "switch" виведіть в консоль "a" або "b" або "c", виконайте те саме за допомогою "if else";
// * Зробіть два різні приклади

let qestion = prompt('Hello, how are you');
console.log(qestion)

switch (qestion) {
    case 'fine' : {
        console.log ('a')
         break;
    }
    case 'norm' : {
        console.log('b')
         break;
    }
    default : {
        console.log ( 'c' )
         break;
    }
};

if (qestion === 'fine'){
    console.log("a")
 } else if ( qestion === 'Norm') {
    console.log("b")
 } else {
    console.log("c")
 };
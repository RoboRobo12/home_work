// 1. Створіть функцію за допомогою "function expression".
function getHello () {
    console.log('Hello');
};

getHello()

// or

let getHello1 = function() {
    console.log('Hello');
};

getHello1()

// 2. Створіть функцію за допомогою "new Function".

let opels = 3;
let bmw = 2;
let vw = 5;

let sumCars = new Function ( 'car1', 'car2', 'car3', 'return car1 + car2 +car3' );

sumCars (opels, bmw, vw);

// 3. Створіть функцію за допомогою "arrow function".

 let hello = ()=> {
      console.log('Hello');
 };

 hello();


// 4. Створіть функцію яка приймає два аргументи, перший це обєкт другий це колбек.

let numbers = {
    first: 1,
    second: 2,
    third: 3
  };


function showNumber1 (one) {
    console.log (numbers.first) ;
};

function showNumber2 (two) {
    console.log (numbers.second) ;
};

function showNumber3 (three) {
    console.log (numbers.third) ;
};

function showNumbers ( obj , cb ) {
    console.log(obj);
    cb(obj.first);
      
};

showNumbers(numbers,showNumber1);
showNumbers(numbers,showNumber2);
showNumbers(numbers,showNumber3);


// 5. Створіть рекурсивну функцію.

let animals = ['Pantera', 'Dog', 'Elefant' ];

function animalTypes (types) {

    for (let allTypes of types ) {
         console.log(allTypes);
         if( Array.isArray(allTypes)) {
            animalTypes(allTypes);
        }
    }
};

// 6. Створіть самовикликаючусь функцію.

let sum = (function(randomNum) {
    return 20 + randomNum;
  })(10);
console.log(sum);


// 7. Створіть функцію і виведіть в консоль всі аргументи які були їй передані.

function data ( arg1, arg2, arg3 ) {
    console.log(arguments);
};

data(1,2,'Hello');



//or


function data ( arg1, arg2, arg3 ) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
};

data(1,2,'Hello');










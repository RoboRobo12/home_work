// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let a = 1;
let a2 = String(a);
typeof a2;
console.log (a2);

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let b = 2;
let b2 = Boolean(b);
typeof b2;
console.log (b2);

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let c = 3;
let c2 = null;
typeof c2;
console.log (c2);

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let d = '10';
let d2 = Number(d);
typeof d2;
console.log (d2);

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let e = '11';
let e2 = Boolean(e);
typeof e2;
console.log (e2);

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let f = 'hello';
let f2 = null;
typeof f2;
console.log (f2);

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let g = false;
let g2 = String(g);
typeof g2;
console.log (g2);

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let h = true;
let h2 = Number(h);
typeof h2;
console.log (h2);

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let i = true;
let i2 = null;
typeof i2;
console.log (i2);

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let j = null;
j2 = String(j);
typeof j2;
console.log (j2);

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let k = null;
let k2 = Number(k);
typeof k2;
console.log (k2);

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"
let l = null;
let l2 = Boolean(l);
typeof l2;
console.log (l2);

// 13) Напишіть всі способи створення функції.
// Option_1 Function Declaration
function myCar() {};
// Option_2 Function Expression
let myCar = function () {};
//Option_3 New Function
let sum = new Function('arg1,arg2', ' return arg1+arg2; ');

// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію
function getNothing (){
    return;
};
getNothing();

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію

//Option_1
function getName1() {
    return 'Robert';
};

getName1();


//Opption_2
let name = 'Robert';

function getName2() {
    return name;
};
getName2();

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними напряму aбо із змінними.

//1
let getData = function(arg1) {
    return arg1
};
getData(1);

//2
let data = 1;
let getData = function(arg1) {
    return arg1
};
getData(data);

// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму aбо із змінними.

//1
let sum = function( s1, s2 ) {
    return s1+s2
};
sum(5,5);

//2
let a = 5;
let b= 5;

let sum = function( s1, s2 ) {
    return s1+s2
};
sum(a,b);

// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними напряму aбо із змінними.

//1
let sum = function( s1, s2, s3 ) {
    return s1+s2+s3
};
sum(5,5,5);

//2
let a = 5;
let b= 5;
let c =5;

let sum = function( s1, s2,s3 ) {
    return s1+s2+s3
};
sum(a,b,c);
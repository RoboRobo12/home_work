// 1) Використовуючи оператор "Рівності (==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a = 1;
let b = 2;

a == 2;

console.log (a == 2);

a == 1;

console.log (a == 1);

//Також є варіант через перепресвоєння змінної

let a = 1;
let b = 2;

a == b;

console.log (a == b);

let b = 1;

a == b;

console.log (a == b);


// 2) Використовуючи оператор "Нерівності (!=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a1 = 3;
let b1 = 3;

a1 != b1;

console.log (a1 != b1);

let b1 = 4;

a1 != b1;

console.log (a1 != b1);

// 3) Використовуючи оператор "Строгої рівності (===)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a2 = '5';
let b2 = 5;

a2 === b2

console.log(a2 === b2);

let a2 = 5;

a2 === b2

console.log(a2 === b2);

// 4) Використовуючи оператор "Строгої нерівності (!==)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a3 = 4;
let b3 = 4;

a3 !== b3;

console.log(a3 !== b3);

let b3 = '4';

a3 !== b3;

console.log (a3 !== b3);

// 5) Використовуючи оператор "Більше ніж (>)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a4 = 3;
let b4 = 4;

a4 > b4;

console.log(a4 > b4);

let a4 = 5;

a4 > b4;

console.log(a4 > b4);

// 6) Використовуючи оператор "Більше чи дорівнює (>=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a5 = 6;
let b5 = 7;

a5 >= b5;

console.log(a5 >= b5);

let a5 = 7;

a5 >= b5;

console.log(a5 >= b5);

// 7) Використовуючи оператор "Менше ніж (<)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a7 = 10;
let b7 = 8;

a7 < b7;

console.log(a7 < b7);

let b7 = 11;

a7 < b7;

console.log(a7 < b7);

// 8) Використовуючи оператор "Менше чи дорівнює (<=)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let a8 = 12;
let b8 = 10;

a8 <= b8;

console.log(a8 <= b8);

let b8 = 12;

a8 <= b8;

console.log(a8 <= b8);

// 9) Використовуючи оператор "Логічне І (&&)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let c = 3;
let c1 = 4;

c === 5 && c1 === 4;

console.log (c === 5 && c1 === 4);

c === 3 && c1 === 4;

console.log (c === 3 && c1 === 4);

// 10) Використовуючи оператор "Логічне АБО (||)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let d = 10;
let d1 = 15;

d === 5 || d1 === 9;

console.log (d === 5 || d1 === 9);

d === 5 || d1 === 15;

console.log (d === 5 || d1 === 15);

// 11) Використовуючи оператор "Логічне НЕ (!)" порівняйте два значення так, щоб в першому випадку ви отримали "false" а в другому випадку "true".
// * Виведіть результат порівняння в консоль за допомогою "console.log"
let h = true;
let h1 = false;

!h
console.log (!h); // !true - вертає false

!h1
console.log (!h1); // !false - вертає true 


// 12) Використовуючи оператор "Рядкове додавання (+)" додайте два значення типу "string".
// * Виведіть результат в консоль за допомогою "console.log"
let nameP1 = 'Ro';
let nameP2 = 'bert';

nameP1 + nameP2;

console.log(nameP1 + nameP2);

// or 

console.log('Ro' + 'bert');

//or

let firstName = 'Robert';

console.log ( firstName + 'Kulik');


// 13) За допомогою тернарного оператору присвойте значення у змінну "type" використовуючи змінну "color". Якщо колір дорівнює "червоний", тоді значення змінної має бути "пожежна" інакше "медична".
// * Виведіть "type" в консоль за допомогою "console.log". Зробіть два варіанти в одному резyльтат в консолі має бути "пожежна" в іншому "медична"
let color = 'Red';

let type = ( color === 'Red') ? 'fire department' : 'medical';

console.log(type);

let color = 'Blue';

let type = ( color === 'Red' ) ? 'fire department' : 'medical';

console.log(type);


// 14) Створіть об'єкт з довільними ключами і видаліть довільний ключ за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"
let myCars = {
    car1 : 'Astra',
    car2 : 'Polo',
    car3 : 'Golf'
};

delete myCars.car1;

console.log (myCars);

// 15) Створіть масив з довільними значеннями і видаліть довільне значення за допомогою оператору "delete"
// * Виведіть результат в консоль за допомогою "console.log"

let allCars = [ 'Astra','Polo','Golf'];

delete allCars [0];

console.log (allCars);


// 16) Створіть об'єкт з довільними ключами і за допомогою оператору "in" визначіть наявність ключів у об'єкті. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"

let myHouse = {
    room1 : 'Bedroom',
    room2:  'Bathroom',
    room3 : 'Kitchen'
};

console.log ('room1' in myHouse);

let myHouse = {
    room1 : 'Bedroom',
    room2:  'Bathroom',
    room3 : 'Kitchen'
};

console.log ('room4' in myHouse);

// 17) Створіть масив з довільними значеннями і за допомогою оператору "in" визначіть наявність значення у масиві. Одне значення повинно бути наявне а інше повинно бути відсутнє
// * Виведіть результат в консоль за допомогою "console.log"

let cars = [ 'Opel',  'BMW',  'Mercedes', 'Lexus' ];

console.log (3 in cars);

let cars = [ 'Opel',  'BMW',  'Mercedes', 'Lexus' ];

console.log (4 in cars);
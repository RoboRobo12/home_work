// 1. Створіть дві змінні типу стрінг і виведіть їх в консоль разом, використовуючи конкатинацію стрiнги.

let firstName = 'Robert';
let lasttName = 'Kulik';

console.log(`${firstName} ${lasttName}`);

// 2. Створіть змінну типу стрінг і виведіть в консоль її довжину.

let weather = 'The weather is good'
console.log( weather.length );

// 3. Створіть змінну типу стрінг і виведіть в консоль перший символ стрінги.

let weather = 'The weather is good'
console.log( weather[0] );

// 4. Створіть змінну типу стрінг і виведіть в консоль останній символ, довільної стрінги.

let weather = 'The weather is good'
console.log( weather[18] );

// 5. Створіть змінну типу стрінг і приведіть змінну до верхнього регістру.

let cat = 'Simba';

console.log( cat.toUpperCase());

// 6. Створіть змінну типу стрінг і приведіть змінну до нижнього регістру.

let cat = 'Simba';

console.log(cat.toLowerCase());

// 7. Створіть змінну і присвойте в неї дату вашого народження.

let myBirthday = new Date( 1997, 03, 08);

console.log(myBirthday);

// 8. Виведіть рік вашого народження (Використовуючи змінну з 7 завдання).

console.log(myBirthday.getFullYear());

// 9. Виведіть місяць вашого народження (Використовуючи змінну з 7 завдання).

console.log(myBirthday.getMonth());

// 10. Виведіть день вашого народження (Використовуючи змінну з 7 завдання).

console.log(myBirthday.getDate());

// 11. Виведіть в консоль рік місяць день вашого народження через тире (-) (Використовуючи змінну з 7 завдання).

//option_1
console.log ( myBirthday.getFullYear() + '-' + myBirthday.getMonth() + '-' + myBirthday.getDate() );

//option_2 

console.log(myBirthday.toISOString());

//option_3

let myBirthday = new Date( 1996, 03, 09); // змінюєм "08" на "09" так як при виконуванні коду чомусь віднімає 1 

console.log(myBirthday.toISOString());


// 12. Створіть нову дату яка має 14 годину і 23 хвилини.

let date = new Date( 2020, 04, 10, 14, 23);

console.log(date);

// 13. Порівняйте дві дати між собою і результат виведіть в консоль.

let now = new Date();

let yesterday = new Date()

yesterday.setHours(-1);

console.log( now > yesterday );
console.log( now < yesterday );
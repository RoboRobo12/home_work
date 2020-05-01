// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.
alert ('Hello, welcome to VSCode');

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let question = prompt('How are you today?');
console.log (question);

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let age = prompt('how old are you?', 13 );
console.log (age);

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
let dog = confirm("Do you have a dog?");
console.log(dog);

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна
let age2 = confirm("Do you have 18 years old?");
console.log (age2);

if (age2) {
   console.log(1)
};

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"
let car = prompt('Do you have a car');
console.log (car);

if (car === 'Yes') {
    console.log(1)
} else { 
    console.log(2)
};

// або цей варіант - так як юзер може вписати або з маленької або з велікої в цьому віпадку якщо з маленької тоді буде False тому і два варіанти

if (car === 'Yes') {
    console.log(1) 
} else if (car === 'yes') {
    console.log(1) 
} else { 
    console.log(2)
};

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"
let cat = prompt('Do you have a cat');
console.log (cat);

if (cat === 'Yes'){
    console.log(1)
 } else if (cat === 'Maybe') {
    console.log(2)
 } else {
    console.log(3)
 };

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна
let study = confirm ('Are you study');
console.log (study);

switch (study) {
    case true : {
        console.log (1)
         break;
    }
    default : {
        console.log ( 'default')
         break;
    }
};
     
 // 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"
let study = prompt('Are you study?');
console.log (study);

switch (study) {
    case 'yes' : {
        console.log (1)
         break;
    }
    case  'no' : {
        console.log(2)
         break;
    }

    default : {
        console.log ( 'default')
         break;
    }
};

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"
let study = prompt('Are you study?');
console.log (study);

switch (study) {
    case 'yes' : {
        console.log (1)
         break;
    }
    case 'no': {
        console.log(2)
         break;
    }
    case 'not yet' : {
        console.log(3)
         break;
    }
    default : {
        console.log ( 'default')
         break;
    }
};

// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади

/* option_1  - '10' і '5' і '3' це стрінга так як prompt вертає не число а стрінгу, і відповідно якщо буде 
число то код упаде */

let cars = prompt(' how many cars do you have ? ');
console.log (cars);

switch (cars) {
    case '10' : {
        console.log (1)
         break;
    }
    case '5' : {
        console.log(2)
         break;
    }
    default : {
        console.log ( 3 )
         break;
    }
};

/* option_2 - '10' і '5' це стрінга так як prompt по дефолту вертає не число а стрінгу, 
і відповідно якщо буде число то код упаде */

let cars2 = prompt(' how many cars do you have ? ');
console.log (cars2);

if (cars2 === '10') {
    console.log(1)
 } else if (cars2 === '5') {
    console.log(2)
 } else {
    console.log(3)
 };

 // Вирішення проблеми !!! робимо явне перетворення за допомогою Number() який в результаті видає число
 
 let cars = Number(prompt(' how many cars do you have ? '));
 console.log (cars);


switch (cars) {
    case  10 : {
        console.log (1)
         break;
    }
    case 5 : {
        console.log(2)
         break;
    }
    default : {
        console.log (3)
         break;
    }
};

// Вирішення проблеми !!! або за допомогою унарного + 
 
let cars = +prompt(' how many cars do you have ? ');
console.log (cars);


switch (cars) {
   case  10 : {
       console.log (1)
        break;
   }
   case 5 : {
       console.log(2)
        break;
   }
   default : {
       console.log (3)
        break;
   }
};


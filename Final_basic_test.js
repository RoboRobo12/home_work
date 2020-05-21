// 1. Створіть обєкт та масив
// * Використовуйте обєкт і масив створені в першому заданні у всіх наступних завданнях
let obj1 = {
    birthdate: Date( 1996, 03, 08),
    getMyName: ()=> 'Robert Kulik',
};

let arr = [];

// 2. Додайте до обєкту ключ "birthdate" типу Date
birthdate = new Date( 1996, 03, 08); 

// 3. Додайте новий елемент в кінець масиву
arr.push(1);

// 4. Видаліть з обєкту доданий ключ у завданні 3
delete obj1.birthdate;

// 5. Видаліть елемент з масиву доданий у завданні 4
delete arr[0]
// 6. Додайте до обєкту метод який буде виводити ваше імя і прізвище.
getMyName: ()=> 'Robert Kulik'

// 7. Створіть конструктор який буде відтворювати функціонал який є наявний в обєкті

function Object1(obj){
    this.obj = obj;
    this.showObj = ()=> this.obj
};
const showObj = new Object1 (obj1);

// 8. Створіть новий конструктор який буде унаслідувати функціонал конструктору з попереднього звдання і буде мати додатковий метод для виводу дати народження.

function Object2(obj){
    this.obj = obj;
    this.showObj = ()=> this.obj.birthdate
};

const showObj2 = new Object2 (obj1.birthdate);

// 9. Створіть новий eлемент за допомогою конструктору з попереднього завдання і виведіть імя та прізвище або дату народження.
const getName = new Object2 (obj1.getMyName());
// 1. Створіть одновимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи довільний цикл.
let newNumb = [1,2,3,4,5];
console.log(newNumb);
let i = 1;
 
while ( i < 6 ) {
    console.log(i)
    ++i
};

//or 

for (let numbers of newNumb ) {
    
    console.log( numbers )
};

// 2. Створіть одновимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкту в консоль.
// *Виведіть кожний ключ і його значення в консоль.

let myPets = {
    first: "dog",
    second: "cat",
    third: "snake"
};
console.log(myPets);

for (let pets in myPets ) {
    console.log( pets + ": "  + myPets[pets])

};

// або для спрощення створити функцію ( це вже я "грався")

function showMyPets (myPets) {

for (let pets in myPets ) {
    console.log( pets + ": "  + myPets[pets])

  } 
};

showMyPets (myPets);


// 3. Створіть масив і видаліть останнє значення з масиву, викoристовуючи "pop"
// *Виведіть в консоль нову довжину масиву

let newNumb2 = [1,2,3,4,5];
newNumb2.pop();

console.log(newNumb2.length);

// 4. Створіть масив і додайте нове значення до масиву з кінця, викoристовуючи "push"
// *Виведіть в консоль нову довжину масиву

let newNumb3 = [1,2,3,4,5];
newNumb3.push(6);

console.log(newNumb3.length);

// 5. Створіть масив і видаліть перше значення з масиву, викoристовуючи "shift"
// *Виведіть в консоль нову довжину масиву

let newNumb4 = [1,2,3,4,5];
newNumb4.shift();

console.log(newNumb4.length);

// 6. Створіть масив і додайте нове значення до масиву з початку, викoристовуючи "unshift"
// *Виведіть в консоль нову довжину масиву

let newNumb5 = [1,2,3,4,5];
newNumb5.unshift(0);

console.log(newNumb5.length);

// 7. Створіть рекурсивну функцію для того, щоб вивести в консоль всі значення багатовимірного масиву

function showCars(arg) {

        for (let all of arg ) {
             console.log(all)
             if( Array.isArray(all)) {
                showCars(all)
            }
        }
    };


// 8. Створіть рекурсивну функцію для того, щоб вивести в консоль всі ключі багатовимірного обєкту

function showProfileRecur (arg1) {

    for (let key in arg1 ) {
         console.log(key + ": "  + arg1[key] )
         if( typeof arg1[key] === "object") {
            showProfileRecur (arg1[key])
        }
    }
};

// 9. Створіть багатовимірний масив і присвойте його в змінну.
// *Виведіть значення масиву в консоль.
// *Виведіть кожне значення масиву використовуючи функцію з завдання 7.

let cars = ["Opel", "Shkoda", "VW",["Polo","Golf","Touareg"]];
console.log(cars);

showCars(cars);

// 10. Створіть багатовимірний обєкт і присвойте його в змінну.
// *Виведіть значення обєкт в консоль.
// *Виведіть кожний ключ і його значення в консоль використовуючи функцію з завдання 8.

let myProfile = {
    name: "Robert",
    age: 24,
    location: {
        city: "Uzhorod"
    }

};
console.log(myProfile);

showProfile (myProfile);

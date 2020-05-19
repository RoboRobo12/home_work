// 1. Створіть index.html file and index.js file. Підключіть джс до html.
//done

// 2. Виведіть в консоль body
console.log(document.body);

// 3. Виведіть в консоль довільний eлемент викoристовуючи getElementById

console.log(document.getElementById('id1'));

// 4. Виведіть в консоль довільний eлемент викoристовуючи getElementsByClassName
console.log(document.getElementsByClassName('logo'));

// 5. Виведіть в консоль довільний eлемент викoристовуючи getElementsByTagName
console.log(document.getElementsByTagName('p'));

// 6. Створіть елементи для взяємодії з користувачем (button and input)
//done

// 7. Напишіть функцію яка буде взяємодіяти з button і буде виводити alert користувачу з довільним текстом 
const pushMyButton = () =>{
    alert ('Congratulation, you did it');

};

// 8. Напишіть функцію яка буде взяємодіяти з input і буде виводити в консоль значення яке ввів користувач
const inputChan = function(event) {
    console.log(event.target.value);
  };
  
  const input = document.getElementById("inputOne");
  
  if(input){
      input.onchange = inputChan;
  
  };
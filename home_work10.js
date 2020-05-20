//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів
const person = {
     firstName: 'Robert',
     lasttName: 'Kulik',
     getName: ()=> 'Robert',
     getFullName: ()=> 'Robert Kulik'
};
//2 Просто функції

function showName() {
    return person.getName();
};

function showFullName() {
    return person.getFullName();
};

//or

function name1 (name) {
    const obj = {};
    obj.name = name;
    obj.getName = () => name;
    obj.getFullName = () => name;

    return obj;
  };
  
  const myName = name1 (person.getName());
  const myFullName = name1(person.getFullName());
  
  myName.getName();
  myFullName.getFullName();

//3 Функції конструктору

function Person(name){
    this.name = name;
    this.getName = () => this.name
    this.getFullName = () => this.name
};

const showMyName = new Person (person.getName());
const showMyFullName = new Person (person.getFullName());

showMyName.getName();
showMyFullName.getFullName();

//4 Класу

class Old {
 constructor(name){
     this.name = name;
  }
  getName = () =>{
    return this.name
  };
  getFullName = () =>{
    return this.name
  };

};

const robokop = new Old (person.getName());
const robokopFull = new Old (person.getFullName());

robokop.getMyName();
robokopFull.getFullName();


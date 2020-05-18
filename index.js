console.log(document.body);
console.log(document.getElementById('id1'));
console.log(document.getElementsByClassName('logo'));
console.log(document.getElementsByTagName('p'));

//Function for button.

const pushMyButton = () =>{
    alert ('Congratulation, you did it');

};

//Function for input.

const inputChan = function(event) {
  console.log(event.target.value);
};

const input = document.getElementById("inputOne");

if(input){
    input.onchange = inputChan;

};





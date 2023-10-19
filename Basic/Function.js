/*
syntax :
  function functionName(){
    // function body
  }
*/

// function printMessage(){
//     console.log("Hello Everyone");
// }
// printMessage();


// function sayMessage(){
//     console.log("I am happy to learn development");
// }
// sayMessage();


// function passMessage(){
//     return "I am happy to learn javascript";
// }
// const message=passMessage();
// console.log(message);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// const newMessage=message+" with pw skill";
// console.log(newMessage);



//function with one parameter

// function displayMessagewithparameter(coursename, enrollmessage){
//     return "i am learning " + coursename + enrollmessage;
// }
// console.log(displayMessagewithparameter("web development", "from today"));
// console.log(displayMessagewithparameter("frontend development", "from wedenesday"));
// console.log(displayMessagewithparameter("backend development", "from monday"));


// function sum(a,b){
//     return a+b;
// }
// const total=sum(1,2);
// console.log(total);

// function sumofallParameters(){
//     //console.log(arguments.length);
//     let sum=0;
//     for(let i=0; i<arguments.length-1; i++){
//         //console.log(arguments[i]);
//         sum+=arguments[i];
//     }
//     return sum;
// }
// const total=sumofallParameters(1,2,3,4,5,6,7,8,9,10);
// console.log(total);



// arrow function syntax

// function square(){  //named function
//     return x*x;
// }

const square=function(x){   // anonymous function
    return x*x;
}
console.log(square(2));

const square1 = (x) => x*x;
console.log(square1(3));

const square2= (x) =>{
    console.log("Input Value > ", x);
    return x*x;
};
console.log(square2(4));



const getFullName = function(firstname, lastname){
    return firstname + " " + lastname;
}
console.log(getFullName("Dibakar", "Bera"));



// immediately invoked function execution

(function (x){
    console.log(x*x);
})(2);
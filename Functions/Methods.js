// let welcome= () => "WELCOME";
// console.log(welcome());

// let myName="Shubham";
// console.log(myName.toLowerCase());


// for each method & callback :-

// let addition=function(a,b){
//     return a+b;
// }

// let multiplication=function(a,b){
//     return a*b;
// }



// function calculator(numOne,numTwo,addition,multiplication){
//    let addResult=addition(numOne,numTwo);
//    let mulResult=multiplication(numOne,numTwo);
//    let result=  `Add: ${addResult}, Mul: ${mulResult}  `;
//    //console.log(result);
//    return result;

// }

// console.log(calculator(5, 10, addition,multiplication));



//for each method:-

let products=["bread","butter","jam","botte"];

//products.forEach((product) => console.log(product));

//products.forEach(product => console.log(product.length));

let students=["dibakar","alex","deepak","john"];
students.forEach((student, index) => {
    console.log(student,index);
});
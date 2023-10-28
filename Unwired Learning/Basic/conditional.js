/*
1.if/else  statement
    comparison operator(such as <, >,== ) to compare two vales
    logical operator(such as &&,||) to combine multiple values

    if(condition){
        //code to be execute if the condition is true
    }
    else if(condition2){
        // code to be executed if the condition2 is true
    }
    else{
        // code to be execute if the condition is false
    }

2.switch statement
   multiple condition and execute differnet codes depends on the value

   switch(expression){
    case condition1:{
        //code to be executed
        break
    }
    case condition2:{
        //code to be executed
        break;
    }

    case condition2:{
        //code to be executed
        break;
}

   }

    

3.Ternary opertaor
   (conditon)? true [statement1] : false[statement2]


 */ 

let age=17;

if(age>= 18){
    console.log("Eligible for vote");
}
else{
    console.log("Not eligible for vote");
}

let brand= "chakki"
if(brand=="chakki"){
    console.log("yes i have");
}
else {
    console.log("no i do not have");
}



let trafficLight="green";

if (trafficLight="red"){
    console.log("stop");
}
else if (trafficLight="yellow"){
    console.log("slow down");
}

else if (trafficLight="green"){
    console.log("go ahead");
}
else{
    console.log("invalid signal")
}

//problem satement 1

let number=8;
if(number%2==0){
    console.log("even");
}
else if(number==0){
    console.log("neither even nor odd");
}
else{
    console.log("odd");
}

// switch case

/*switch (key) {
    case condition1:{
        
        break;
    }
    case condition2:{
        
        break;
    } 
    case condition3:{
        
        break;
    }
    default:{
        break;
    }
        
}

if(expression==condition1){

}else if(expression==condition2){

}
else if(expression==condition3){

}else {
    
}
*/


let day=5;
switch(day) {
    case 1:{
        console.log("Monday");
        break;
    }
    case 2:{
        console.log("Tuesday");
        break;
    }
    case 3:{
        console.log("Wednesday");
        break;
    }
    case 4:{
        console.log("Thursday");
        break;

    }
    case 5:{
        console.log("Friday");
        break;
    }
    case 6:{
        console.log("Saturday"); 
        break;
    }
    case 7:{
        console.log("Sunday");
        break;
    }
    default:{
        console.log("Invalid Day");
    }
}

//ternary operator
let num=11;

(num%2==0) ? console.log('even'):console.log('odd');
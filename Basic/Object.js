/* object
    ->It is an entity
    ->Can Contain many values
    -> written as key : value pairs(key and value separated by a colon)
    -> better data handling

    
    Object--
       -> attributes/Data  ex.:- name,Manufacture,fuel capacity
       -> Behaviour ex.:- can start, can stop, can accelerate      
   
*/

var car1={
    name:'Honda City',
    manufactoring:'Honda',
    fuelCapacity:40,
    isAutomatic:false,
    greetMe: function(){
        console.log("Hello From Dibakar");
    }
}
console.log(car1.greetMe());

var car2={
    name:'Sonet',
    manufactoring:'Kia',
    fuelCapacity:45,
    isAutomatic:true
}

var obj={
    key1:'value1',
    key2:'value2'
}

// console.log(car1);
// console.log(car2);
//console.log(car1.name, car1.manufactoring,car1.isAutomatic);

//console.log(car1['name']);
car1.color='Red';
//console.log(car1);

// objects using new keyword

// var myDetails={
//     name:'Dibakar',
//     title:'Student',
//     expertise:'Java',
//     followers:'485',
// }

var myDetails= new Object();
myDetails.name="Dibakar Bera";
myDetails.title="Student";
myDetails.expertise="Java";
myDetails.followers="485";

//console.log(myDetails);


// by using is an constructor

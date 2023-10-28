// store an orrdered list of elements.
/* need of array 
      - grouping related data
      - sorting large amount of data
      - imporving performance
      - ease of use
      - better readeability
    Declare
     - []
     - array constructor  

    Methods :
      pop()
      push()
      unshift()
      shift()
      concat()
      join()

*/


// let names=['dibakar','bera'];
// console.log(names);
// let num=[2,3,4,5];
// console.log(num);

var jobs=["web developer","fullstack","frontend"];
//var jobs=new Array("web developer","fullstack","frontend");
console.log(jobs);
//console.log(jobs[0]); // acess value in array

console.log(jobs[1]);
jobs[1]="fulstack developer"; //value chnage in array
console.log(jobs);

console.log(jobs.length); 

var roll=[1,2,3,4,5,6,7,8,9,10,11];


//using loop print
for(const rollno of roll){
    console.log(rollno);
}

var myName="dibakar bera";
for(const name of myName){
    console.log(name);
}




var movieLine=["Chirag","Alok","Pooja","Vikash","Amit"];
movieLine.push("Arpan"); //add last 

console.log(movieLine);

const person=movieLine.pop();
console.log(person);
//movieLine.pop(); //remove from last
console.log(movieLine);

movieLine.shift(); //remove from start
console.log(movieLine);

movieLine.unshift("VIP"); //add in the first
console.log(movieLine);

movieLine.splice(2,1); //(indeex, deletecount)
console.log(movieLine);

movieLine.splice(2,1,"DB"); //replace
console.log(movieLine);

var movieLine2=["ram","raban"]; // add another array
movieLine=movieLine.concat(movieLine2);
console.log(movieLine);

//console.log(movieLine.splice(0,4)); //(startIndex, number) //get value
console.log(movieLine.indexOf("Amit"));
console.log(movieLine.reverse()); //for reverse
console.log(movieLine.join(',')); // string format
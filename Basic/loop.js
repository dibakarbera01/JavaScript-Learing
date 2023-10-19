/*Type of loops:
  entry controlled loop -- 
   ex:- while loop
       syntax:
           while(condition){
            //body of loop
           }

  exit controlled loop -- 
    ex:- do-while loop 
        syntax:
          do{
            //body of loop
          } while(cndition)

*/


// to print numbers from 1 to 10
 
// let endnum=10;
// let startnum=1;
// while (startnum <= endnum) {
//     console.log(startnum);
//     startnum=startnum+1;
// }


// to print numbers from 1 to 10 decreasing order

// let endnum=1;
// let startnum=10;
// while(startnum >= endnum){
//     console.log(startnum);
//     startnum=startnum-1;
// }

// write a program 1 to 7 using do-while loop

// let endNumber=7;
// let num=1;
// let result='';
// do{
//     result=result+num;
//     num=num+1;
// } while(num <= endNumber);
// console.log(result);


// for(let count=1; count <= 3; count=count+1){
//     console.log("pw skill");
// }


//display a sequence of even numbers till 20

// for(let num=2;num<=20; num+=2){
//     console.log(num);
// }



// for(let outerCount=1; outerCount<=5; outerCount++){
//     //console.log("Outer Loop: ", outerCount);
//     let col='';
//     for(let innerCount=1; innerCount<=3;innerCount++){
//        // console.log("------Inner Loop: ", innerCount);
//        col=col+'*'
//     }
//     console.log(col);
// }



let endNumber=100;
let num=1;
while (num <= endNumber) {
    if(num>10){
        break;
    }
    console.log(`2* ${num} = ${2*num}`);
    num=num+1;
}
console.log("A");

// setTimeout(()=>{
//     console.log("B");
// },1000); // after 1000 milisecond means 1 second

// const welcome=function(){
//     console.log("B");
//     console.log("C");
// }

const random=function(){
    const n1=5;
    const n2=15;
    console.log(n1+n2);
}

const welcome=function(){
    console.log("B");
    random();
    console.log("c");
}

setTimeout(welcome,1000);

console.log("D");


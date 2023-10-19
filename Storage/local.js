
// Local Storage

// localStorage.setItem("name","Dibakar");
// localStorage.setItem("age",21);

// const name=localStorage.getItem("name");
// const age=localStorage.getItem("age");

// console.log(name,age);

// localStorage.removeItem("name");
// localStorage.removeItem("age");

// // localStorage.clear();


// json storage
const data=[
    {username: "dibakar", age:21},
    {username: "john", age:22}
];

// localStorage.setItem("data",data);
//localStorage.setItem("data", JSON.stringify(data));

const dataStringfy=JSON.stringify(data);
localStorage.setItem("data",dataStringfy);

const accessData=JSON.parse(localStorage.getItem("data"));
console.log(accessData);

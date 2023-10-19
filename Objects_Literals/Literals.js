let random = "RANDOM";

let user = {
    name: "Dibakar Bera",
    email: "dibakar@gmail.com",
    age:25,
    isLoggedIn: false,
    login: function(nickName){
        //console.log("LOGIN");
        //return "LOGIN";
        return `LOGIN ${nickName} `;
    },
    logout: function(){
       // console.log("LOGOUT");
       return "LOGOUT";
    }
};

console.log(user.login("DB"));
console.log(random.toLowerCase());


// console.log(user);
// console.log(user.email);
// user.login();
// random.toLowerCase();



// console.log(typeof(user));

// user.isLoggedIn= true;
// console.log(user.isLoggedIn);




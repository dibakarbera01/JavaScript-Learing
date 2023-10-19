let user = {
    name: "Dibakar Bera",
    email: "dibakar@gmail.com",
    age:25,
    isLoggedIn: false,
    login: function(){
        //return `LOGIN ${this.email} `;
        this.isLoggedIn=true;
        return `LOGGED IN- ${this.isLoggedIn} `;
    },
    logout: function(){
       //return "LOGOUT";
       this.isLoggedIn=false;
       return `LOGGED OUT - ${this.isLoggedIn} `;
    }
};

// function xyz(){
//     console.log(this)
// }

console.log(user.login());
console.log(user.logout());
console.log(this);

// console.log("Dibakar");
// console.log(this);
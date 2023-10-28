console.log("Start");

function loginUser(email, password){
    setTimeout(()=>{
        userData={userId:592,status:"Success"};
        return userData;
    },2000);
}

const data=loginUser("dibakar@gmail.com","random");
console.log(data);


console.log("Finish");
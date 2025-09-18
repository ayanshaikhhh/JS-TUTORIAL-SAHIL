// --------------------------------------Constructor-----------------------------------
// class User {
//     constructor(username,email,password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     usernameUpper() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// let chai = new User("faizan","abcd@gmail.com","1234");
// console.log(chai.encryptPassword());
// console.log(chai.usernameUpper());









class my {
    constructor(name,age,state) {
        this.name = name;
        this.age = age;
        this.state = state;
    } 

    house() {
        console.log(`my name is ${this.name} and age ${this.age} state ${this.state}`);       
    }
}
let myRes = new my("flipkart",21,"Rajastham");
myRes.house();














// -----------------------------------Inheritance----------------------------------------------------------
// class User {
//     constructor(username) {
//         this.username = username;
//     }
//     logMe() {
//         console.log(`username is ${this.username}`);   
//     }
// }

// let res = new User("Faizan");
// res.logMe();




// class Teacher extends User {
//     constructor(username,email,password) {
//         super(username);
//         this.email = email
//         this.email = password
//     }

//     addCourse() {
//         console.log(`A new course was added by ${this.username}`)
//     }
// }
// const chai = new Teacher("chai","chai@gmail.com","1234")
// chai.addCourse();

















// // -------------------------------------Static---------------------------------------------
// class Hello {
//     constructor(username) {
//         this.username
//     }

//     logMe() {
//         console.log(`Username : ${this.username}`);
        
//     }
// }

// let res = new Hello("ayan")
// res.logMe()





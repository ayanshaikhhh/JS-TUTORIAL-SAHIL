// ----------------------------------------------let & const-------------------------------------------------------
// 🔹 1. let और const
// let → block scoped variable (re-declare नहीं कर सकते, लेकिन re-assign कर सकते हो)
// const → block scoped constant (ना re-declare, ना re-assign)





// let name = "Ayan";
// name = "Mohammed";  // ✅ allowed


// const pi = 3.14;
// pi = 3.1415;  // ❌ error






// console.log(a); // undefined
// var a = 10;






// console.log(b); // ❌ ReferenceError
// let b = 20;












// ----------------------------------------------🔹 2. Arrow Functions ()=>{}-------------------------------------------------------
// 🔹 Syntax
// // Normal Function
// function add(a, b) {
    //   return a + b;
    // }
    
    // // Arrow Function
    // const add = (a, b) => {
        //   return a + b;
        // };
        
        
        

        // let add = (a,b) => a +b; 
        // let sum  = add(22,2)
        // console.log(sum);

        
        
        
        


// function Person() {
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }
// new Person();









// // Agar normal function hota:
// function Person() {
    //     this.age = 0;
    //     setInterval(function() {
//         this.age++;
//         console.log(this.age);
//     },1000)
// }
// new Person()








// rest parameters
// let sum = (...nums) => nums.reduce((a,b) => a+b,0);
// console.log(sum(1,2,3,4,5));










// // ----------------------------------------------🔹 3. Template Literals (` backticks)-------------------------------------------------------
// 👉 Simple words me:
// Normal string me sirf plain text hota hai.
// Template literals se aap variables, expressions aur multi-line text ko easily string ke andar use kar sakte ho.




// Multi-line Strings
// console.log(`hello,
//     my name is,
//     ayan shaikh
//     and i am from india`);
    

    

    
// // String Interpolation (variables & expressions embed karna)
// let name = "Facebook";
// let value = 1000000000000;
// console.log(`this is ${name} and value ${value} cror`) 





// // Expressions bhi likh sakte ho:
// console.log(`5 + 5 : ${5+5}`);






// // Function Calls inside ${ }..
// let toUpper = (str) => str.toUpperCase();
// console.log(`Hello, ${toUpper("ayan")}`);












// // ----------------------------------------------🔹 4. Default Parameters------------------------------------------------------
// Syntax:
// function funcName(param1 = defaultValue, param2 = defaultValue) {
//   // function body
// }





// function name(name = "shahid") {
//     console.log(name);   
// };
// name();





// Example 1: Basic Default Parameter
// function name(name = "guest") {
//     console.log(`Hello ${name}`)
// };
// name();  // Hello, Guest (default use hua)
// name("Atif"); // Hello, Ayan






// // Example 2: Multiple Default Parameters
// function sum(a = 5, b = 10) {
//     return a + b;
// };
// console.log(sum());        // 15 (5 + 10)
// console.log(sum(20));      // 30 (20 + 10)
// console.log(sum(20, 30));  // 50 (20 + 30)







// // Example 3: Default Parameter with Expressions
// function multiply(a,b = a * 2) {
//     return a * b;
// };
// console.log(multiply());      // NaN
// console.log(multiply(5));     // 50 (5 * (5*2))
// console.log(multiply(5,5));   // 25 (5*5)







// Important Points:
// // Default parameters tabhi apply hote hain jab argument undefined ho.

// function test(x=10) {
//     console.log(x);
// }
// test();       // 10 (default)
// test(undefined); // 10 (default)
// test(null);   // null (default apply nahi hua)






// // Default parameters functions, expressions ya objects bhi ho sakte hain.
// function greetUser(name = getDefaultName()) {
//     console.log("Hi " + name);
// }
// function getDefaultName() {
//     return "User";
// };
// greetUser();   // Hi User
// greetUser("Ali"); // Hi Ali











// ----------------------------------------------🔹 5. Destructuring Assignment-----------------------------------------------------
// JavaScript में Destructuring Assignment एक शॉर्टकट तरीका है जिससे हम arrays और objects से values निकालकर variables में assign कर सकते हैं।

// 👉 Short me:
// Array destructuring → [a, b] = arr
// Object destructuring → {x, y} = obj
// Default values, rename, nested destructuring, aur functions me bhi use hota hai.






// Objects और Arrays से values निकालना आसान।....
// // Array destructuring
// let [a, b] = [10, 20];
// console.log(a, b);  // 10 20

// // Object destructuring
// let person = {name: "Ayan", age: 19};
// let {name, age} = person;
// console.log(name, age); // Ayan 19








// // ✅ Array Destructuring
// const numbers = [10, 20, 30];
// // Destructuring
// const [a, b, c] = numbers;
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30





// const colors = ["red", "green", "blue"];
// const [first, , third] = colors;
// console.log(first); // "red"
// console.log(third); // "blue"





// // 🔹 Default values dena
// const fruits = ["apple"];
// const [fruit1, fruit2 = "banana"] = fruits;
// console.log(fruit1); // "apple"
// console.log(fruit2); // "banana"







// // ✅ Object Destructuring.......
// const person = { name: "Ayan", age: 19 };
// // Destructuring
// const { name, age } = person;
// console.log(name); // "Ayan"
// console.log(age);  // 19






// // 🔹 Variable ka naam change karna
// const user = { id: 101, username: "mohammed" };
// const { username: userName } = user;
// console.log(userName); // "mohammed"






// // 🔹 Default values ke sath
// const settings = {theme:"dark"};
// const {theme, fontSize = 20}= settings;
// console.log(theme);
// console.log(fontSize);






// // ✅ Nested Destructuring......
// const student = {
//     name:"Ali",
//     marks:{
//         math:90,
//         eng:85
//         }
// }
// const {name,marks:{math,eng}}= student;
// console.log(name);
// console.log(math);
// console.log(eng);






// // ✅ Function Parameters me Destructuring....
// function printUser({ name, age }) {
//   console.log(`${name} is ${age} years old.`);
// }
// const user = { name: "Ayan", age: 19 };
// printUser(user);
// // Output: "Ayan is 19 years old."












// ----------------------------------------------🔹 6. Spread और Rest Operator ...----------------------------------------------------
// Spread → values को expand करना
// Rest → multiple arguments को collect करना




// 🔑 Main Difference
// Spread → फैलाता है (expand karta hai)
// Rest → इकट्ठा करता है (collect karta hai)




// // // Spread
// // let arr1 = [1, 2, 3];
// // let arr2 = [...arr1, 4, 5];
// // console.log(arr2);  // [1, 2, 3, 4, 5]

// // // Rest
// // function sum(...numbers) {
// //   return numbers.reduce((a, b) => a + b);
// // }
// // console.log(sum(1, 2, 3, 4)); // 10





// // ✅ 1. Spread Operator (फैलाना / Expand करना)

// // Example 1: Array copy
// // let arr1 = [1, 2, 3];
// // let arr2 = [...arr1];   // copy using spread
// // console.log(arr2); // [1, 2, 3]








// // // Example 2: Array merge.....
// // let a = [1, 2];
// // let b = [3, 4];
// // let merged = [...a, ...b];
// // console.log(merged); // [1, 2, 3, 4]






// // Example 3: Object copy / merge...
// let obj1 = {name:"sajid"};
// let obj2 = {age:25};
// let newObj = {...obj1,...obj2};
// console.log(newObj);








// ✅ 2. Rest Operator (जोड़ना / Collect करना)
// Rest ka काम होता है multiple values ko ek array/object me collect karna.
// Iska use mostly functions me arguments collect karne ke liye hota hai.



// Example 1: Function arguments....
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10





// // Example 2: Object Destructuring with Rest
// let {x, y, ...rest} = {x: 1, y: 2, z: 3, w: 4};
// console.log(x, y);   // 1 2
// console.log(rest);   // {z: 3, w: 4}





// Example 3: Array Destructuring with Rest..
// let [first,second,...other] = [10,20,30,40,50];
// console.log(first,second);
// console.log(other);










// ---------------------------------------------🔹 7. Classes (OOP support in JavaScript)--------------------------------------------------
// 🔑 Key Points:
// class = blueprint (template) for objects.
// constructor = initialization function.
// extends = inheritance ke liye.
// super() = parent class ka constructor call karne ke liye.
// get / set = properties ko controlled access dene ke liye.
// static = class ke sath direct use hone wale methods.





// 🔑 Quick Recap (Interview ke liye):
// Getter = read-only access.
// Setter = write-only access.
// Encapsulation ke liye use hote hain.
// Property jaisi access hoti hai, function jaisa call nahi karna padta.
// Validation aur data security ke liye helpful hain.






// 1. Class Syntax......
// class person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }
// let resCls = new person("monu",26);
// resCls.greet();










// // 5. Getters and Setters..........
// class Product {
//   constructor(price) {
//     this._price = price;  // "_" ka use private jaisa dikhane ke liye
//   }

//   // Getter
//   get price() {
//     return this._price + "₹";
//   }

//   // Setter
//   set price(value) {
//     if (value > 0) {
//       this._price = value;
//     } else {
//       console.log("Invalid price!");
//     }
//   }
// }

// // Object create
// const item = new Product(100);

// // getter call (property ki tarah)
// console.log(item.price);  // 100₹

// // setter call (update karna)
// item.price = 200;
// console.log(item.price);  // 200₹

// // invalid set
// item.price = -50; // Invalid price!
// console.log(item.price);  // 200₹ (unchanged)











// ---------------------------------------------🔹 8. Modules (import/export)-----------------------------------------------











































































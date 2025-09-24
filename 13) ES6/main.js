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


















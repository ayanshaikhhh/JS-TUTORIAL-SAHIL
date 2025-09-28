// ----------------------------------------SetTimeout-----------------------


// console.log("helooo");
// setTimeout(() => {
//     console.log("runs after 2 seconds")
// }, 2000)









// setTimeout(() => {
//     console.log("helooo")
// }, 3000);


///////////////////////////// clearTimeout(id)















//  -----------------------------------SetInterval----------------------------------





// let count = 1;
// let interValid = setInterval(() => {
//     console.log(count);
//     count++;
//     if(count > 5) {
//         clearInterval(interValid);
//     }
// }, 1000);









// Example: Ek clock banane ke liye setInterval use hota hai:
// setInterval(() => {
//     let now = new Date();
//     console.log(now.toLocaleTimeString())
// }, 1000);































// // ---------------------------------------Difference----------------------------------
// | Feature          | `setTimeout()`                     | `setInterval()`            |
// | ---------------- | ---------------------------------- | -------------------------- |
// | Execution        | Sirf ek baar                       | Repeat hota hai            |
// | Stop karna       | `clearTimeout(id)`                 | `clearInterval(id)`        |
// | Common use cases | Notifications delay, splash screen | Timer, clock, auto-refresh |















// let num = 1;

// let res = setInterval(() => {
//     console.log(num)
//     num++

//     if(num > 10) {
//         clearInterval(res)
        
//     }
    
// }, 1000);







// -----------------------------------------------------------------------------------------------------

// import { users } from "../Practice/new/data.js";
// console.log(users)






import * as exam from "../Practice/new/data.js";
console.log(exam.users)
console.log(exam.add(5,5));

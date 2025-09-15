// ✅ Simple Definition (Interview Style):
// Higher Order Function is a function that either takes another function as an argument, or returns another function, or both.


// function greet(name) {
//     return "hello" + name;
// };
// function processUserInput(callback) {
//     let name = " ayan";
//     return callback(name);
// };
// console.log(processUserInput(greet));







// function multiplier(x) {
//      return function (y) {
//         return x * y;
//      }
// };
// let double = multiplier(5);
// console.log(double(5));







// let numbers = [1,2,3,4,5,6];
// let double = numbers.map(num => num * 2);
// console.log(double)






// map function with higher order function & call back function
// let numbers = [1,2,3,4,5,6];
// let res = numbers.map((m) => {
//     return m * 2;
// });
// console.log(res);












// -------------------------------------------Callback function--------------------------------------
// Simple Definition:
// 👉 Callback = function ko dusre function ke andar as argument pass karna aur baad me use call karna.





// function tofik(name, callback) {
//     console.log("hello" + name);
//     callback();
// };
// function coding() {
//     console.log("js coding")
// };
// tofik("tofik", coding);







// function my(a,b) {
//     console.log(a);
//     b();
// };
// function name() {
//     console.log("nameeeee");
// }
// my("my", name);















// ------------------------------------------------------------------------------------------------------------















// ------------------map-----------------------
// let arr = [1,2,3,4,5];
// let  arrRes = arr.map((num) => {
//     return num * 2;
// });
// console.log(arrRes);







// ------------------filter-----------------------
// let arr = [1,2,3,4,5];
// let arrRes = arr.filter((greater) => {
//     return greater % 2 === 0;
//     // return greater < 10;
// });
// console.log(arrRes);







// ------------------reduce-----------------------
// let arr = [1,2,3,4,5,6];
// let arrRes = arr.reduce((ele,num) => {
//     return ele + num;
// });
// console.log(arrRes);



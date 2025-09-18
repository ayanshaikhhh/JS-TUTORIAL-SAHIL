// let obj = {
//     name : "abcd",
//     state : "rajasthan",
//     city : "ajmer"
// };

// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));





// // let obj2 = {
// //     name : "ajajgsjbj",
// //     state : "rajasthan",
// //     city : "jaipur"
// // };

// let  res = Object.assign({},obj,obj2);
// console.log(res)






// let obj1 = {
//     a : 1,
//     b : 2
// };


// let obj2 = {
//     c : 3,
//     d : 4
// };
// let objRes = Object.assign({},obj1,obj2);
// console.log(objRes);






// let obj = {
//     a : 1,
//     b : 2
// };

// // Object.freeze(obj);

// obj.a = 30;

// console.log(obj)









// let obj = {
//     greet : function (name) {
//         console.log(`hello ${this.name}`);
//     }
// }
// let obj2 = Object.create(obj);
// obj2.name = "tofik"
// console.log(obj2)
// obj2.greet();







// let obj1 = {
//     name : "abcd",
//     city : "ajmer",
//     country : "india"
// };
// Object.seal(obj1);
// obj1.name = "tofik"
// obj1.age = 20
// console.log(obj1);









// let obj1 = {
//     name : "abcd",
//     city : "ajmer",
//     country : "india"
// };

// console.log(obj1);
// console.log(obj1.hasOwnProperty("name"));
















// const fruits = ["Apple", "Banana", "Watermelon", "Orange"];

// let res = fruits.hasOwnProperty(1);
// console.log(res);








// console.log(fruits.hasOwnProperty("Apple")); // true ('Orange')
// fruits.hasOwnProperty(4); // false - not defined







// console.log(Object.is(1,1));
// console.log(Object.is("1",1));
// console.log(Object.is(NaN, NaN));








// let obj1 = {
//     a : 1
// };

// let obj2 = {
//     a : 1
// };

// // console.log(Object.is(obj1, obj2));

// let str = "abcd"
// console.log(str);














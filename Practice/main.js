// ----------------------------for each----------------------------
// let arr = [1,2,3,4,5];
// arr.forEach((num) => {
//     console.log(num);
// });





// ------------------------------map-----------------------
// let arr = [1,2,3,4,5];
// let res = arr.map((num) => {
//     return num * 2
// });
// console.log(res);






// ----------------------------filter-------------------------
// let obj = [
//     {id : 1, name: "atif", active: true},
//     {id : 2, name: "rehan", active: false},
//     {id : 3, name: "faizan", active: true},
//     {id : 4, name: "akram", active: false},
// ];
// let  res = obj.filter((value) => {
//     return value.active;
// })
// console.log(res);







// ----------------------reduce--------------------
// let arr = [1,2,3,4,5];
// let res = arr.reduce((acc,cur) => {
//     return acc + cur
// },0);
// console.log(res);




// let arr = [
//     {product:"phone", price: 2000,},
//     {product:"laptop", price:5000},
//     {product:"watch",  price:1000}
// ];

// // let res = arr.reduce((acc, cur) => acc + cur.price,0);
// // console.log(res); // 8000


// let sum = arr.reduce((acc, cur) => {
//     return acc + cur.price;
// }, 0)
// console.log(sum); // 8000








// ---------------------------slice------------------
// let arr = [1,2,3,4,5];
// console.log(arr.slice(0,3));






// ---------------------------splice----------------------
// let age = [20,22,23,24,21,20]; 
// age.splice(1,0,99,99);
// console.log(age);





// ---------------------------sort--------------------
// let arr = [2,5,4,16,9,8,1,13];
// arr.sort((a,b) => a - b);
// console.log(arr);



// with arrow functio
// let arr = [2,5,4,16,9,8,1,13];
// let res = arr.sort((a,b) => {
//     return a-b;
// })
// console.log(res)






// ---------------------------concat-------------------
// let a = [1,2,3,4];
// let b = [5,6,7,8];
// let c = [9,10,11,12];
// let res = a.concat(b,c);
// console.log(res);






// ---------------------------fill--------------------
// let arr = [1,2,3,4,5];
// arr.fill(0);
// console.log(arr)







// -----------------------includes--------------------
// let arr = [1,2,3,4,5];
// console.log(arr.includes(2));  // true






// ----------------------join--------------------
// always return string
// let arr = ["aftab","tosif","sefan","mustkim"];
// console.log(arr.join(" - "));






// ----------------------reverse--------------------
// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);





// ----------------------push--------------------
// let arr = [1,2,3,4,5];
// arr.push("new")
// console.log(arr);






// ----------------------pop------------------------
// let arr = [1,2,3,4,5];
// arr.pop()
// console.log(arr);






// ----------------------unshift------------------------
// let arr = [1,2,3,4,5];
// arr.unshift(6,7);
// console.log(arr);





// ----------------------shift------------------------
// let arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);





// ----------------------indexOf------------------------
// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(2));  // 1





// ----------------------lastIndexOf----------------------
// let arr = [1,2,3,4,5,2];
// console.log(arr.lastIndexOf(2));  // 5





// ----------------------every------------------------
// let arr = [1,2,3,4,5];
// console.log(arr.every(num => num % 2 === 0)); // false


// let arr = [2,4,6,8];
// console.log(arr.every(num => num % 2 === 0)); // true







// ----------------------some------------------------
// let arr = [1,2,3,4,5];
// let res = arr.some((num) => {
//     return num % 2 === 0
// });
// console.log(res);  // true




// let arr = [
//     {id:1, name:"farhan", active:true},
//     {id:2, name:"zakir", active:false},
//     {id:3, name:"sakir", active:false},
// ];

// let res = arr.some((value) => {
//     return value.active;

// })
// console.log(res);  // true








// ----------------------find------------------------
// let arr = [11,61,31,44,65];
// let res = arr.find((num) => {
//     return num > 70;
// });
// console.log(res)  // undefined



// let arr = [11,61,31,44,65];
// let res = arr.find((num) => {
//     return num % 2 === 0;
// });
// console.log(res);  // 44







// ---------------------------findIndex------------------------
// let arr = [11,61,31,44,65];
// let res = arr.findIndex((num) => {
//     return num > 50;
// });
// console.log(res);  // 1







// ---------------------------Array.from------------------------
// let str = "Hello";
// console.log(Array.from(str));



// function demo() {
//     let arr = Array.from(arguments);
//     console.log(arr);
// };
// demo(1,2,3,4);  // 1,2,3,4



// let range = Array.from({length:6}, (_,i) => i+1);
// console.log(range);  // 1,2,3,4,5,6








// ---------------------------Array.isArray-----------------------
// console.log(Array.isArray([1,2,3])); // true


// let str = "sajid";
// console.log(Array.isArray(str)); // false







// ---------------------------flat---------------------
// let arr = [1,[2,3,4]];
// console.log(arr.flat())




// let arr = [1,[2,[3],4]];
// console.log(arr.flat())



















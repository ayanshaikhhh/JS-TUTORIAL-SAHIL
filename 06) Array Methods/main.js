// ------------------------------map()------------------------------
// ✅ Key Points:
// Always returns a new array.
// Original array unchanged rehta hai.
// Mostly use hota hai transformation ke liye (e.g., values ko modify karke naya array banana).
// let arr = [1,2,3,4,5];
// let arrRes = arr.map(num => num * 2);
// console.log(arrRes);





// let names = ['Ayan', 'Sahil', 'John', 'Doe'];
// let namesRes = names.map(name => name.toUpperCase())
// console.log(namesRes);




// let names = ['Ayan', 'Sahil', 'John', 'Doe'];
// names.map((name) => {
//     console.log(name.toUpperCase())
// });



// let arr = [1,2,3,4,5];
// arr.map((num) => {
//     console.log(num * 2);
// });





// let arr = [1,2,3,4,5];
// arr.map((num) => {
//     console.log(num * 2)
// });





// Objects ke array se naya array banana
// let users = [
//     {firstname : "Ayan", age : 20},
//     {firstname : "Sahil", age : 21},
//     {firstname : "John", age : 22},
//     {firstname : "Doe", age : 23},
// ];
// console.log(users.map(user => user.age));
// users.map((age) => {
//     console.log(age.age);
// });














// ------------------------------filter()------------------------------
// ✅ Key Points:
// filter() hamesha new array return karta hai (empty bhi ho sakta hai agar koi match na ho).
// Original array change nahi hota.
// Mostly use hota hai searching ya condition based data extraction ke liye.



// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.filter(number => number % 2 === 0));




// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arrRes = arr.filter((number) => {
//     return number % 2 === 0;
// });
// console.log(arrRes);







// let users = [
//     {firstname : "Ayan", age : 20},
//     {firstname : "Sahil", age : 21},
//     {firstname : "John", age : 22},
//     {firstname : "Doe", age : 23},
// ];
// let usresRes = users.filter(user => user.age > 21);
// console.log(usresRes);








// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// let fruRes = fruits.filter(frui => frui.includes("ap"));
// console.log(fruRes);













// ------------------------------reduce()------------------------------
// ✅ Key Points:
// reduce() hamesha ek single value return karta hai.
// Agar initialValue nahi doge, to pehla element hi accumulator ban jata hai.
// Mostly aggregation / calculation ke liye use hota hai.




// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((acc,num) => acc + num, 0);
// console.log(sum);  // 15






// let numbers = [1,2,3,4];
// let res = numbers.reduce((acc,num) => acc * num, 0);
// console.log(res);  // 24






// const numbers = [10,25,5,42,18];
// const max = numbers.reduce((acc,num) => (num > acc ? num : acc), numbers[0]);
// console.log(max);






// const cart = [
//     {item : "book", price : 100},
//     {item : "pen", price : 80},
//     {item : "bag", price : 120}
// ];
// const total = cart.reduce((acc,product) => acc + product.price,0);
// console.log("total : ",total);











// ------------------------------forEach()------------------------------
// Definition:
// forEach() ek array method hai jo har element par ek callback function execute karta hai.
// ➡️ Ye kuch return nahi karta (always undefined).
// ➡️ Mostly use hota hai iteration / looping ke liye.



// const numbers = [1,2,3,4,5];
// numbers.forEach((num) => {
//     console.log(num);
// });




// console.log(arr.filter(number => number % 2 === 0));





// let arr = [1,2,3,4,5];
// arr.forEach((num) => {
//     console.log(num*2)
// });








// ------------------------------find()------------------------------
// Definition:
// find() ek array method hai jo callback function ke basis par pehla matching element return karta hai.
// ➡️ Agar koi element match na kare → undefined return hota hai.
// ➡️ Sirf pehla match deta hai, saare nahi.





// let arr = [1,2,3,4,5];
// let res = arr.find(fin => fin > 4);
// console.log(res);







// let arr = [1,2,3,4,5];
// console.log(arr.find(fd => fd % 2 === 0));











// ------------------------------some()--------------------------------
Definition:
// some() ek array method hai jo check karta hai ki kya array me at least ek element condition ko satisfy karta hai.
// ➡️ Agar condition satisfy hoti hai → true return karta hai.
// ➡️ Agar nahi hoti → false.





















































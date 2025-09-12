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
// Definition:
// some() ek array method hai jo check karta hai ki kya array me at least ek (1) element condition ko satisfy karta hai.
// ➡️ Agar condition satisfy hoti hai → true return karta hai.
// ➡️ Agar nahi hoti → false.








// let numbers = [1,3,3,9,2];
// let res = numbers.some(sm => sm % 2 === 0);
// console.log(res);






// let users = [
//     {name : "owaish", age : 18},
//     {name : "azan", age : 20},
//     {name : "faizan", age : 22},
// ];
// let usersRes = users.some(som => som.age >= 22)
// console.log(usersRes);











// ----------------------------every()--------------------------------
// Definition:
// every() ek array method hai jo check karta hai ki kya array ke saare elements condition ko satisfy karte hain.
// ➡️ Agar sabhi elements condition pass karte hain → true.
// ➡️ Agar ek bhi fail kare → false.




// let arr = [1,22,3,4,5];
// let arrRes = arr.every(eve => eve > 2);
// console.log(arrRes);




// let arr = [0,2,4,6,16,1];
// let newArr = arr.every(ev => ev % 2 === 0);
// console.log(newArr);







// -----------------------------------sort()-----------------------------------------
// ✅ Key Points:
// Default sorting string ke hisaab se hoti hai.
// Numbers ko sahi sort karne ke liye compare function zaroori hai.
// sort() original array ko modify karta hai.
// Performance → O(n log n) (efficient for most cases).




// Definition:
// sort() ek array method hai jo array ke elements ko lexicographical (dictionary order / string ke hisaab se) sort karta hai.
// ➡️ Default me numbers bhi string banakar sort karta hai.
// ➡️ Original array ko modify karta hai (in-place sorting).





// let sortt = [1,2,3,5,6,4,8,9];
// sortt.sort();
// console.log(sortt);




// let fruits = ["banana", "apple", "kaju", "chana"];
// fruits.sort();
// console.log(fruits);




// let numbers = [1,5,77,8,4,6,9];
// numbers.sort((a,b) => a-b);
// console.log(numbers);





// let users = [
//     {name : "rehan", age : 20},
//     {name : "farhan", age : 18},
//     {name : "sehjad", age : 25}
// ];
// let usersRes = users.sort((a,b) => a.age - b.age);
// console.log(usersRes);













// -----------------------------------includes()-----------------------------------------
// ✅ Key Points:
// includes() hamesha true/false return karta hai.
// Case-sensitive hota hai (capital/lower letter matter karta hai).
// includes() NaN ko detect kar leta hai, jabki indexOf() nahi kar pata.
// Original array ko change nahi karta.
// 🔥 Interview me common questions:
// includes() aur indexOf() me kya difference hai?
// Kya includes() case-sensitive hota hai?
// Kya includes() NaN ko detect kar sakta hai?






// let fruits = ["banana","apple","mango"];
// console.log(fruits.includes("mango"));  // true


// let fruits = ["banana","apple","mango"];
// console.log(fruits.includes("kaaju"));  // false












// -----------------------------------concat()-----------------------------------------
// Definition:
// concat() ek array method hai jo do ya zyada arrays (ya values) ko mila kar ek naya array return karta hai.
// ➡️ Original array ko modify nahi karta.




// let arr = [1,2,3];
// let arr2 = [4,5,6];
// let res = arr.concat(arr2);
// console.log(res);







// let arr = [1,2,3];
// let arr2 = [4,[5,6,[7,8]]];

// let res = arr.concat(arr2);
// console.log(res);




















// -------------------------------------------static-----------------------------------------------
// class maths {
//     static add(a,b) {
//         return a + b;
//     }
// }
// console.log(maths.add(5,5));

// const { use } = require("react");







// class my {
//     static hy(a,b) {
//         return a +b ;
//     }
// }
// console.log(my.hy(2,2))







// class user {
//     constructor (name) {
//         this.name = name;
//     }

//     sayHi() {
//         return `Hello i am ${this.name}`;
//     }

//     static compare(user1,user2) {
//         return user1.name.localeCompare(user2.name);
//     }
// }

// let user1 = new user("Ayan");
// let user2 = new user("Sandeep")

// console.log(user1.sayHi())

// console.log(user.compare(user1,user2));












// -------------------------------------------Entries-----------------------------------------------
// let obj = {
//     name : "abcd",
//     state : "rajasthan",
//     city : "ajmer"
// };
// console.log(Object.entries(obj));





// -------------------------------------------Keys-----------------------------------------------
// let obj = {
//     name : "abcd",
//     state : "rajasthan",
//     city : "ajmer"
// };
// console.log(Object.keys(obj));







// -------------------------------------------Values-----------------------------------------------
// let obj = {
//     name : "abcd",
//     state : "rajasthan",
//     city : "ajmer"
// };
// console.log(Object.values(obj));








// ------------------------------------------assign-----------------------------------------------
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






// let a = {a : 1};
// let b = {b : 2};
// let c = {c : 3};

// // let res = Object.assign(a,b,c);
// let res = Object.assign({}, a,b,c);
// console.log(res);



// -----------------------------------------freeze----------------------------------------------

// let obj = {
//     a : 1,
//     b : 2
// };

// // Object.freeze(obj);

// obj.a = 30;

// console.log(obj)








// -----------------------------------------create-------------------------------------------
// let obj = {
//     greet : function (name) {
//         console.log(`hello ${this.name}`);
//     }
// }
// let obj2 = Object.create(obj);
// obj2.name = "tofik"
// console.log(obj2)
// obj2.greet();










// ----------------------------------------seal-----------------------------------------
// let obj1 = {
//     name : "abcd",
//     city : "ajmer",
//     country : "india"
// };
// Object.seal(obj1);
// obj1.name = "tofik"
// obj1.age = 20
// console.log(obj1);








// ---------------------------------------hasOwnProperty----------------------------------------
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





// ---------------------------------------is--------------------------------------
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











// // ----------------------------------------------Object.defineProperties()-----------------------------------------
// 🔹 Property Descriptors

// value → property ka actual value.

// writable → agar true hai to value change ho sakti hai.

// enumerable → agar true hai to property loop (like for...in) me dikhegi.

// configurable → agar true hai to property delete ya descriptor change ho sakta hai.

// get() → getter function.

// set() → setter function.











// Syntax
// Object.defineProperties(obj, {
//     property1 : {
//         value : someValue,
//         writable : true/false,
//         enumerable : true/false,
//         configurable : true/false
//     },

//     property2 : {
//         get: function() { ... },
//         set: function(value) { ... }
//     }
// });









// const person = {};
// Object.defineProperties(person,  {
//     firstName : {
//         value : "Ayan",
//         writable : true,
//         enumerable : true,
//         configurable : true
//     },

//     lastName : {
//         value : "Khan",
//         writable : false,  // value change nahi hogi
//         enumerable : true,
//         configurable : true
//     },

//     fullName : {
//         get : function() {
//             return this.firstName + " " + this.lastName;
//         }
//     }
// }) 
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// person.lastName = "shaikh";
// console.log(person.lastName);









// 🔹 Example 2: Getter/Setter
// const user = {};
// let ageValue = 20;

// Object.defineProperties(user,{
//     age : {
//         get : function() {
//             return ageValue;
//         },

//         set : function(newAge) {
//             if(newAge > 0) {
//                 ageValue = newAge;
//             }
//         },
//         enumerable : true
//     }
// });
// console.log(user.age); // 20
// user.age = 25;
// console.log(user.age); // 25
// user.age = -5;         
// console.log(user.age); // 25 (kyunki negative allow nahi kiya setter ne)













// // ----------------------------------------------Object.defineProperty()-----------------------------------------
// 📌 Property Descriptors
// दो तरह के descriptors होते हैं:
// Data Descriptor → जब property में value assign करनी हो।
// value → property की value।
// writable → (true/false) क्या value बदली जा सकती है?
// enumerable → (true/false) क्या property loop (for...in) में दिखाई देगी?
// configurable → (true/false) क्या property delete या दोबारा redefine की जा सकती है?
// Accessor Descriptor → जब getter/setter use करना हो।
// get → एक function जो property की value return करता है।
// set → एक function जो property को update करता है।
// enumerable, configurable → ऊपर जैसा ही।







// // 📌 Example 1: Simple property define करना...
// const person = {};

// Object.defineProperty(person, "name", {
//     value : "ayan",
//     writable : false,    // value change नहीं होगी
//     enumerable : true,    // loop में दिखेगी
//     configurable : false   // delete या redefine नहीं कर सकते
// });

// console.log(person.name);  // "Ayan"

// person.name = "faizan";    // writable:false, इसलिए change नहीं होगा
// console.log(person.name);  // "Ayan"








// const user = {firstName : "Mohammed", lastName : "Ayan"};

// Object.defineProperty(user, "fullName", {
//     get () {
//         return this.firstName + " " + this.lastName;
//     },

//     set(value) {
//         const parts = value.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     },

//     enumerable : true
// })

// console.log(user.fullName);
// user.fullName = "sehjad khan";
// console.log(user.firstName);
// console.log(user.lastName)










// ----------------------------------------Object.entries()------------------------------
// Object.entries() JavaScript me built-in method hai jo ek object ke key-value pairs ko array ke form me return karta hai.

// const obj = {
//     name : "Ameer",
//     age : 22,
//     country : "India"
// };
// console.log(Object.entries(obj));











// ----------------------------------------Object.freeze()------------------------------
// const obj = {
//     name : "Ameer",
//     age : 22,
//     country : "India"
// };

// Object.freeze(obj);
// obj.name = "sahadat"
// console.log(obj);  // ❌ Change nahi hoga
// user.city = "Jodhpur"; // ❌ Add nahi hoga
// delete user.name;      // ❌ Delete nahi hoga











// // ----------------------------------------Object.fromEntries()------------------------------
// const user = [
//     ["name", "Macbook"],
//     ["country", "USA"],
//     ["money", "1Lakh"]
// ];

// let userRes = Object.fromEntries(user);
// console.log(userRes);








// ----------------------------------------Object.getOwnPropertyDescriptor()-------------------------------
// 🔹 Descriptor me kya hota hai?
// Ek normal property ke liye aapko yeh details milti hain:
// value → property ka actual value
// writable → value change ho sakti hai ya nahi (true/false)
// enumerable → property loop me dikhegi ya nahi (true/false)
// configurable → property delete / descriptor change ho sakta hai ya nahi (true/false)
// Aur agar property ek getter/setter hai to:
// get → getter function
// set → setter function



// let o , d;
// o = {
//     get foo() {
//         return 17;
//     },
// };
// d = Object.getOwnPropertyDescriptor(o, "foo");
// console.log(d);




// o = {bar : 42};
// d = Object.getOwnPropertyDescriptor(o, "bar")
// console.log(d);











// // -----------------------------------------------Object.getOwnPropertyDescriptors()------------------------
// Bhai ye wala method Object.getOwnPropertyDescriptors() basically ek object ki sabhi properties ke descriptors ek sath return karta hai.
// Ye Object.getOwnPropertyDescriptor() ka extended version hai jo single property ke bajaye sab properties ka details ek object me deta hai.


// const user = {name : "Ayan", age : 19};
// console.log(Object.getOwnPropertyDescriptors(user));





// const user = {
//     firstName : "Mohammed",
//     lastName : "Ayan",
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(Object.getOwnPropertyDescriptors(user));











// -----------------------------------------------Object.getOwnPropertyDescriptors()------------------------
// const arr = ["a","b","c"];
// console.log(Object.getOwnPropertyNames(arr).sort());


// const obj = {0:"a", 1:"b", 2:"c"};
// console.log(Object.getOwnPropertyNames(obj));









// // -----------------------------------------------Object.getOwnPropertySymbols()-----------------------------
// Object.getOwnPropertySymbols() JavaScript ka ek built-in method hai jo ek object ke sirf symbol properties ko return karta hai.
// Normal string keys ("name", "age") ye return nahi karta, uske liye Object.getOwnPropertyNames() ya Object.keys() use hota hai.




// const id = Symbol("id");
// const user = {
//     name : "ayan",
//     [id] : 101
// };
// console.log(Object.getOwnPropertySymbols(user));





// // 🔹 Example 2: Multiple symbols
// const s1 = Symbol("first");
// const s2 = Symbol("second");

// const obj = {
//     [s1]: "Hello",
//     [s2]: "World",
//     normal: "Property"
// };
// console.log(Object.getOwnPropertySymbols(obj));











// // -----------------------------------------------Object.getPrototypeOf()-----------------------------
// const user = {name: "ayan", age: "20"};
// console.log(Object.getPrototypeOf(user));





// const proto = {};
// const obj = Object.create(proto);
// let res = Object.getPrototypeOf(obj) === proto;
// console.log(res);








// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     age: 28,
//     isActive: true
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Smith",
//     email: "jane.smith@example.com",
//     age: 34,
//     isActive: false
//   },
//   {
//     id: 3,
//     firstName: "Alice",
//     lastName: "Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     isActive: true
//   },
//   {
//     id: 4,
//     firstName: "Bob",
//     lastName: "Williams",
//     email: "bob.williams@example.com",
//     age: 41,
//     isActive: false
//   }
// ];

// // console.log(users);


















// ----------------------------------------------Meeting 20sep,2025-------------------------------------------
// // let fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
// // console.log(fullNames);




// let usersRes = users.filter(user => user.isActive);
// console.log(usersRes)






// const numbers = [1,5,7,66,8,6];

// let numRes = numbers.reduce((a, b) => a + b );

// console.log(numRes)





// let obj = {
//     id: 4,
//     firstName: "Bob",
//     lastName: "Williams",
//     email: "bob.williams@example.com",
//     age: 41,
//     isActive: false
//   };


// console.log(Object.keys(obj).length);







// ----------------------------------------------Object.groupBy()-------------------------------------------
// // 🔹 Important Points:
// Object.groupBy() हमेशा object return करता है (Map नहीं)।
// अगर key string/number नहीं है, तो JS उसे string में convert कर देता है।
// यह immutable है → original array को modify नहीं करता।




// // 🔹 Example 1: Numbers को even और odd में group करना
// const numbers = [1,2,3,4,5,6];
// let numRes = Object.groupBy(numbers, num => (num % 2 === 0 ? "even" : "odd"));
// console.log(numRes);





// 🔹 Example 2: Strings को length के हिसाब से group करना
// const words = ["apple", "bat", "car", "banana", "dog"];
// let worRes = Object.groupBy(words, word => word.length);
// console.log(worRes);





// // 🔹 Example 3: Objects को property के हिसाब से group करना
// const users = [
//   {name : "Ayan", role : "admin"},
//   {name : "sahil", role : "user"},
//   {name : "Ayan", role : "admin"},
//   {name : "pathan", role : "user"},
// ];

// let useRes = Object.groupBy(users, user => user.role);
// console.log(useRes);

























// // call
// //Syntax:- functionName.call(thisArg, arg1, arg2, ...);

// function cal(city, country) {
//     console.log("Hello " + this.name + " " + "from " + city + " " + country );
// };
// let person = {name: "Ayan"};
// cal.call(person,"sojat","India");







// function world() {
//     console.log("hello " + this.name);
// };
// let nn = {name : "sakir"};
// world.call(nn);





// // Without call()
// // With call() to fix this
// function cal2() {
//     console.log("Hello " + this.name);
// };
// let person2 = {name: "faizan"};

// // cal2();
// cal2.call(person2);










// // Reuse function for multiple objects.
// function cal3() {
//     console.log("Hello " + this.name);
// };

// let x = {name : "ayan"};
// let y = {name : "ameer"};

// cal3.call(x);
// cal3.call(y);






















// // --------------------------------Apply----------------------------------
// // Syntax:- functionName.apply(thisArg, [argsArray]);


// function app(city) {
//     console.log("Hello " + this.name + city);

// };
// let a = {name : "ayan"};
// app.apply(a, [" sojat"]);






// function app2(yes) {
//     console.log("Hello " + this.name + yes);
// };
// let b = {name : "faizan"};
// app2.apply(b,[" ajmer"]);








// function formsd(a,b) {
//     console.log("hello " + this.name + a + b);
// };

// let mj = {name : "yakub"};
// formsd.apply(mj,[" mr", " khan"]);










// ---------------------------------Bind----------------------------------
// Syntax:- functionName.bind(thisArg, arg1, arg2, ...);

// function bin(city, country) {
//     console.log("Hello " + this.name + " from" + city + country);
// };
// let bindFun = {name : "flipkart"};
// let x = bin.bind(bindFun," ajmer"," india");
// x();






// // Simple Bind
// const obj = {
//     name : "Khan",

//     gun : function () {
//         console.log("Hello " + this.name);
//     }
// };
// let newBin = obj.gun.bind(obj);
// newBin();






// Bind with Arguments
// function gggggg(a,b,c) {
//     console.log(`${a}, my name is ${this.name}, and i am ${b} years old`);
// };
// let user = {name : "Ayan"};
// let x = gggggg.bind(user,"hi",22);
// x();










// // Bind for Reuse..
// let bindObj = { 
//     name : "Ayan",

//     bindFund : function () {
//         return this.name;
//     }
// };

// let bindRes = bindObj.bindFund.bind(bindObj);
// console.log(bindRes());
















// rest

function sum(a,b,...c) {
    

}










































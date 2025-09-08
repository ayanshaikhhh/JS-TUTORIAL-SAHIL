// Rest Operator
// function rest(a,b,...others) {
//     console.log(a + b);
//     console.log(others);
// }
// rest(10,20,30,40,50);






// function sum(...numbers) {
//     return numbers.reduce((a,b) => a +b);

// };
// let x = sum(1,2,3,4,5,6,7,8,9,10);
// console.log(x);







// function ccc(a,b,...c) {
//     console.log(a,b);
//     console.log(c);

// };
// ccc(5,5,8,9,6,4,3,2,1);







// ------------------------Spread Operator-----------------------



// Spread Operator
// let names = ["Ayan", "Kalu", "Raju", "Babu"];
// function getNames(name1, name2, name3, name4) {
//     console.log(name1, name2, name3, name4);
// };
// getNames(...names);









// let arr1 = [1,2,3];
// let arr2 = [...arr1,4,5,6];
// console.log(arr2);





// let x = {
//     name: "Ayan",
//     age: 21,   
// };

// let y = {...x, city: "Kolkata"}
// console.log(y);










// --------------------------------------------------




// rest with objects
// let students = {
//     name: "Ayan",
//     age: 21,
//     hobbies: ["coding", "gaming", "reading"]
// }

// const {...rest}=students;
// console.log(rest);


// let newStudent = {
//     ...students,
//     age : 202,
// }
// console.log(newStudent);



// ---------------------------------------------------
// spread with objects












// --------------------------------------------





// ------------------------rest-----------------

// function add(...numbers) {
//     // return numbers.reduce((a,b) => a +b);
//     console.log(numbers.reduce((a,b) => a +b));

// };
// // let addRes = add(1,2,3,4,5,6,7,8,9,10);
// // console.log(addRes);
// add(10,20,30,40,50);























// 
function name(a,b,...others) {
    console.log(a + b);
    console.log(others);

};
let x = name(5,5,8,8,8,8,8,8);



// spread
let a = [1,2,3];
let b = [...a, 4,5,6];
console.log(b);



// rest
function numbers(...num) {
    return num.reduce((a,b) => a + b);
};
console.log(numbers(5,5,5,5));

 



// 
let obj = {
    name: "Ayan",
    age: 21,
    hobbies: ["coding", "gaming", "reading"]
};
let newObj = {...obj, city :"Kolkata", country : "India"};
console.log(newObj);
console.log(obj.hobbies[1]);






let user = {
    names: "Ayan",
    age : 20,
    city : "sojat",
    country : "india"
};

let {...other} = user;



// console.log(names);
// console.log(other);
console.log(other);










// Rest
function numAdd(...adition) {
    return adition.reduce((a,b) => a +b);

};
console.log(numAdd(10,10,10));

// Default Parameters
function name(name = "Mahehsh") {
    console.log(name)
};
name();






// Spread
const spr = [1,2,55,3,8];
console.log(Math.max(...spr));








// Spread
let arr4 = [1,2,3,4];
let arr5 = [...arr4, 4,5,6,7,8];
console.log(arr5);
console.log(arr4 === arr5);




// Spread array merge karna
let mer1 = [1,2,3,4];
let mer2 = [5,6,7,8];
let merRes = [...mer1, ...mer2];
console.log(merRes);




// Spread Array me Extra Values Insert karna
let ex1 = [1,2,3,4];
let ex1Res = ["kaalu", ...ex1,"babu"];
console.log(ex1Res);




// String ko Characters me Break karna
let str = "Ayan";
let strRes = [...str];
console.log(strRes);




































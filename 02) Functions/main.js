// ----------------------Function Basics (Beginner Level)----------------------

// ✅ Function Definition
/*
function name() {
    console.log("Hello, World!");
};
name();
*/




/*
// ✅ Function Parameters & Arguments
function name(age) {
    console.log("my age : " + age);
};
name(21);
👉 Parameters = input lene ke liye, Arguments = actual value jo pass hoti hai.
*/






/*
// ✅ Return Statement
function name(a,b) {
    return a + b;
};

let ageRes = name(10,10);
console.log(ageRes);
👉 return value ko function ke bahar use karne deta hai.
*/
































// ----------------------------------------Function Declaration--------------------------------------
// functions declaration is a hoist.


/*
function name() {
    console.log("Hello, World!");
};
name();
*/


/*
name();
function name() {
    console.log("Hello, World!");
};
*/


function name(name="kalu") {
    console.log(name)
};
name();








// ---------------------------Function Expression---------------------------
// Not hoist.

/*
let x = function name() {
    console.log("Hello, World!");
};
console.log(x);
*/










// ---------------------------------Arrow Functions (ES6+)-----------------------------

// let myfunction = (a,b) => a * b;
// console.log(myfunction(10,10));




// let add = () => {
//     console.log("Hello, World!");
// };

// add();


















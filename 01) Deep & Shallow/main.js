// ----------------------------------------Deep Copy & Shallow Copy---------------------------------------






/*
let arr = [10, 20, 30, 40, 50];


console.log(x);  
console.log(arr);
*/

// Output: [30, 40, 50]



// let arr1 = [1, [2, 3]];
// let arr2 = JSON.parse(JSON.stringify(arr1.slice()));
// arr2[1][0] = 99;
// console.log(arr1);
// console.log(arr2);




// let arrs1 = [1, [2, 3]];
// let arrs2 = arr1.slice();
// arr2[1][0] = 99;
// console.log(arrs1);






// let arr = [10, 20, 30, 40, 50];

// let arr2 = Object.assign([], arr); // Shallow Copy

// let res = {...arr}; // Spread Operator

// console.log(res);

// arr[0] = 99;

// arr2[0] = 100;

// console.log(arr);
// console.log(arr2);








// --------------------------------------Shallow-----------------------------------------

/*
let obj = {
    name : "John",
    age : 30,
    address : {
        city : "New York",
        country : "USA"
    }
};


let objRes = {...obj};
objRes.address.city = "rehan";

console.log(obj);
*/







// objRes.address.city = "Los Angeles";
// console.log(obj);
// console.log(objRes);





// objRes.name = "rehan";
// console.log(obj);
// console.log(objRes);

// -----------------------------------
/*
let obj = {
    name : "John",
    age : 30,
    address : {
        city : "New York",
        country : "USA"
    }
};


// console.log(obj);

let objRes = Object.assign({}, obj);
obj.name = "rehan";

// console.log(objRes);
console.log(obj);
console.log(objRes);
*/








/*
let obj = {
    name : "John",
    age : 30,
    address : {
        city : "New York",
        country : "USA"
    }
};



let objRes = {...obj};
obj.address.city = "Los Angeles";

console.log(obj);
console.log(objRes);
*/









// --------------------------------------Deep-----------------------------------------
/*
Har ek nested object/array ki new copy banti hai, reference share nahi hota.
Isme ek me change karne par dusre me effect nahi hota.
*/



// let deep = {
//     name : "John",
//     age : 30,
//     address : {
//         city : "New York",
//         country : "USA"
//     }
// };


// let deepCopy = JSON.stringify((deep));



// let deepCopy = JSON.parse(JSON.stringify(deep))

// deep.name = "rehna"

// console.log(deep);
// console.log(deepCopy);






// structuredClone()
// JSON.parse(JSON.stringify())

// let obj = { 
//     name : "John",
//     age : 30,
//     address : {
//         city : "New York",
//         country : "USA"
//     }
// };

// let objRes = structuredClone(obj);
// console.log(obj);
// console.log(objRes);








/*
let deep = {
    name : "rehan",
    age : 19,
    adress : {
        city : "ajmer",
    }
};


let deepRes = Object.assign({}, deep);

deepRes.name="faizan";
console.log(deep);
console.log(deepRes);
*/












export function add(a,b) {
    return a+b;
}



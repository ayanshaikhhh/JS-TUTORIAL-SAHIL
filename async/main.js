// await ek keyword hai jo sirf async function ke andar use hota hai.

// asych “Ye function asynchronous hoga, aur ye hamesha ek Promise return karega.”

// await sirf async function ke andar hi use hota hai.

// await  kisi Promise ke complete hone tak wait karta hai, bina poora program roke.



async function fun() {
    return "hello";
}
console.log(fun());

// asyncFunc() ek Promise return karta hai, na ki simple string.









async function fetchData() {

    console.log("Fetching data...")



    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
            
        }, 2000);
    })

    let result = await promise;
    console.log(result);


    console.log("Done");
    


}




fetchData();


console.log("End of script");


// 👉 Yahaan await ne code ko pause kiya sirf is function ke andar, poora program nahi ruka.
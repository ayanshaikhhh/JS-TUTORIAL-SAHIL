let promise = new Promise ((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("pass");
    }else {
        reject("fail");
    }

})


promise
.then((msg) => {
    console.log("success", msg);
})
.catch((error) => {
    console.log("error", error);
})




async function checkPromise() {
    try {
        let result = await promise;
        console.log("async success", result);
    } catch (error) {
        console.log("async error", error);

    }
}
checkPromise();









let pizza = new Promise((resolve, reject) => {
    let deleverd = true;


    if(deleverd) {
        resolve("deleverd");
    } else{
        reject("not deleverd");
    }
})

pizza
.then((msg) => {
    console.log("pizza success", msg);
})
.catch((error) => {
    console.log("pizza error", error);
})









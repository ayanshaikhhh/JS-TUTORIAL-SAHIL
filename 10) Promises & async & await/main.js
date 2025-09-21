// ✅ Promise kya hai?
// Ek Promise ek object hai jo future me ek value ko represent karta hai (success ya failure dono ho sakta hai).

// Pending → Jab tak kaam complete nahi hua.
// Fulfilled (Resolved) → Jab kaam successfully complete hua.
// Rejected → Jab kaam me error aaya.







const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if(success) {
        resolve("Data fetched successfully !")
    } else {
        reject("Error: Failed to fetch data .")
    }
});

myPromise
// .then(result => console.log(result));
.catch(error => console.log(error));
// .finally(() => console.log("Operation done !"));














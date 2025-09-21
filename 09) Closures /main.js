// Simple words me:
// Inner function apne outer function ke variables ko access kar sakta hai, even after outer function return ho gaya.




// 👉 Kaise kaam kar raha hai?
// outer() ek baar run hua aur count = 0 bana.
// Usne inner function return kar diya.
// Jab bhi counter() call karte ho, inner ko count variable ka access milta hai (closure ke wajah se).
// Isliye count reset nahi hota, increment hota rehta hai.




// function outer() {
//     let count = 0;   // outer ka variable

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;   // inner function return kar diya
// }
// let counter = outer();
// counter()
// counter()
// counter()
// counter()






function bankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`);            
        },
        withdraw(amount) {
            if(amount <= balance) {
                balance -= amount;
                console.log(`Withdraw: ${amount}, Balance: ${balance}`);
                               
            } else {
                console.log("Insufficient funds")
            }
        },
        getBalance() {
            console.log(`Balance: ${balance}`)
        }
    };
};
let account = bankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.getBalance();

















































































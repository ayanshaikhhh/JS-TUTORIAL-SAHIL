// 📌 Introduction to DOM in JavaScript...
// DOM (Document Object Model) ek programming interface hai jo HTML ya XML documents ko represent karta hai as a tree structure.
// Jab browser ek web page load karta hai (HTML file), to woh us HTML ko ek DOM Tree me convert kar deta hai.
// Is DOM tree ke through JavaScript web page ke elements ko access, manipulate, add, remove, ya modify kar sakta hai.





// 🔹 DOM as a Tree Structure
// Root Node → <html> tag hota hai.
// Uske andar child nodes hote hain jaise <head> aur <body>.
// Har tag, text, attribute ek node hota hai.





// //  👉 Is HTML ka DOM Tree kuch aisa hoga:
// Document
//  └── html
//      ├── head
//      │   └── title
//      └── body
//          ├── h1
//          └── p








// 🔹 Why DOM is Important?
// DOM ki wajah se hi JavaScript HTML ke elements ke sath interact kar pati hai.






// // 👉 Example:
// <p id="demo">Hello World</p>

// <script>
//   // Access element by ID
//   document.getElementById("demo").innerHTML = "Hello DOM!";
// </script>









// 🔹 DOM ke Uses:
// Access Elements
// document.getElementById("id")
// document.querySelector("selector")
// Change Content
// element.innerHTML = "New Text"
// Change Styles
// element.style.color = "red"
// Create / Remove Elements
// document.createElement("div")
// element.remove()
// Handle Events
// element.addEventListener("click", function(){ ... })










// 👉 In short:
// DOM = Bridge between JavaScript and HTML/CSS.
// Without DOM, JavaScript HTML page ko access ya modify nahi kar sakti.












// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
















// console.dir(document.body)
// console.dir(document.children)
// console.dir(document.body)
// console.dir(typeof document.body)

























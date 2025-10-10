// let form = document.getElementById("myForm");

// form.addEventListener("submit", function(event) {
//     // event.preventDefault();   //  form reload hone se rokta hai

//     let name  = document.getElementById("username").value;
//     alert("Form submitted by: " + name)
// });












// let email = document.getElementById("email");
// email.addEventListener("input", function(event) {
//     console.log(event.target.value);
// });



















document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload hone se roka
    console.log("event type", e.type);
    console.log("target element", e.target);  //Batata hai kis element ne event trigger kiya

})


































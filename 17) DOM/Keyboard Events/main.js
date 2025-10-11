// let input = document.getElementById("input");

// input.addEventListener("keydown", function(event) {
//     console.log("key down" , event.key);
// });










// let input = document.getElementById("input");

// input.addEventListener("keyup", function(event) {
//     console.log("key up", event.key)
// })












// document.getElementById("inputBox").addEventListener("keydown", function(e) {

//     if (e.key === "Enter") {
//         alert("you pressed enter")
//     }

// })




















document.addEventListener("keydown", function(e) {

    if (e.ctrlKey && e.key === "s" ) {
        e.preventDefault();
        alert("Ctrl + S was pressed")
    }


})



















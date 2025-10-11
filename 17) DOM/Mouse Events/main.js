let btn = document.getElementById("myBtn");

// btn.addEventListener("click", function() {
//     alert("Botton clicked")
// })




// btn.addEventListener("dblclick", function() {
//     alert("Botton double clicked")
// })







// btn.addEventListener("contextmenu", function(e) {
//     e.preventDefault(); // right-click disable
//     alert("Right clicked")
// })









btn.addEventListener("mouseenter", function() {
    btn.style.background = "red"
})













btn.addEventListener("mouseleave", function() {
    btn.style.backgroundColor = "yellow"
})
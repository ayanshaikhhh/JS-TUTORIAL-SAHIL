






















































// ----------------------------------------------------------------------------------------------------------------------------------------------------------------










// let h1 = document.getElementById("h1");
// h1.innerHTML = "Selecting elements"

// alert("Hello DOM")



let allImages = document.querySelectorAll("img");
console.log(allImages);



let imagesUrl = [
    "https://images.unsplash.com/photo-1755899850036-084006cbc1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1759082077559-5223560b2f7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1758967905380-f62a8c8fd373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D"
];



allImages.forEach((image, i) => {
    image.src = imagesUrl[i]

});



// img[0].src = arr[0];
// img[1].src = arr[1];
// img[2].src = arr[2];




// for (let i=0; i<img.length; i++) {
//     img[i].src = arr[i]
// }


let newwww = document.querySelector("#h1")
newwww.innerHTML = "mmmmmmmmm"
let p = document.createElement("p");
console.log(p);








let h = document.createElement("h1");
h.textContent = "This is a heading";
document.body.appendChild(h);







let img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "Random Image");
img.width = 300;
document.body.appendChild(img);







let box = document.createElement("div");
box.textContent = "This is a box";
box.style.backgroundColor = "lightblue";
box.style.padding = "20px"
box.style.textAlign = "center"
box.style.height = "300px"
box.style.marginTop = "80px"
document.body.appendChild(box)










let div = document.createElement("div");
let  h1 = document.createElement("h1");
h1.textContent = "This is a heading";
let para = document.createElement("p");
para.textContent = "This is a paragraph";
div.appendChild(h1);
div.appendChild(para);
div.classList.add("myDiv")
document.body.appendChild(div)













let sec = document.createElement("section");
sec.innerHTML = `
<h1> this is a heading </h1>
<p> this is a paragraph </p>`
document.body.appendChild(sec);



















let frag = document.createDocumentFragment();


for(i=0; i<=3; i++) {
    let  li = document.createElement("li");
    li.textContent = `item ${i}`;
    frag.appendChild(li);
}


document.body.appendChild(frag);










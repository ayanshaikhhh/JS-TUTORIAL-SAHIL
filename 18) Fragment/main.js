let frag = document.createDocumentFragment();

for(let i=1; i<=5; i++) {
    let li = document.createElement("li")
    li.textContent = `list item ${i}`
    frag.appendChild(li)
}

document.getElementById("list").appendChild(frag)







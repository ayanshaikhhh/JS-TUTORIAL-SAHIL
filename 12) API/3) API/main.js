fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(data => {
    let tableBody = document.querySelector("tbody");

    data.forEach((user) => {
        let tr = `<tr>
        <td> ${user.id}</td>
        <td> ${user.name}</td>
        <td> ${user.username}</td>
        <td> ${user.email}</td>
        <td> ${user.address.city}</td>
        </tr>`

        tableBody.innerHTML += tr;
    })
})






function filterTable() {
    let filter = document.getElementById("searchInput").value.toUpperCase();
    
    let table = document.querySelector("#userTable");
    let tr = table.getElementsByTagName("tr");
    


    for(let i=0; i<tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];

        if(td) {
            let tdval = td.innerHTML.toUpperCase() || td.innerText.toUpperCase();


            if(tdval.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }










        console.log(td);
    }



}


















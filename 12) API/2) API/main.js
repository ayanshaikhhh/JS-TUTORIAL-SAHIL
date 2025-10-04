fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    // let table = document.querySelector("tbody");
    let table = document.querySelector("tbody");

    data.forEach((user) => {

        let row = `<tr> 
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        </tr>`

        table.innerHTML += row;

    })
})
.catch(error => console.error("Error",error))




// ...existing fetch code...

window.searchFun = function() {
    let filter = document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById("userTable");
    let tr = myTable.getElementsByTagName("tr");

    for(let i=0; i<tr.length; i++) { // 0 is header

        let td = tr[i].getElementsByTagName("td")[1]; // 1 = name column

        if(td) {
            let textValue = td.textContent || td.innerHTML;
            
            if(textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}









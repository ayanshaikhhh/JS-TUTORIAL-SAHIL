let tableBody = document.querySelector("#table-body");
let input = document.querySelector("#search");
let sortBtn = document.querySelector("#sort-btn");
let loader = document.querySelector("#loader");



let userData = [];
let sortOrder = "none";



function tableData(users) {
    tableBody.innerHTML = "";

    let fragment = document.createDocumentFragment();


    users.forEach(user => {
        let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.innerText = user.name;

        let tdEmail = document.createElement("td");
        tdEmail.innerText = user.email;

        let tdPhone = document.createElement("td");
        tdPhone.innerText = user.phone;

        let tdAddress = document.createElement("td");
        tdAddress.innerText = user.address.city;

        tr.appendChild(tdName, tdEmail, tdPhone, tdAddress);

        fragment.appendChild(tr);
    });
    tableBody.appendChild(fragment);
}

































































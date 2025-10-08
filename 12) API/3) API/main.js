// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response => Response.json())
// .then(data => {
//     let tableBody = document.querySelector("tbody");

//     data.forEach((user) => {
//         let tr = `<tr>
//         <td> ${user.id}</td>
//         <td> ${user.name}</td>
//         <td> ${user.username}</td>
//         <td> ${user.email}</td>
//         <td> ${user.address.city}</td>
//         </tr>`

//         tableBody.innerHTML += tr;
//     })
// })




// function filterTable() {
//     let filter = document.getElementById("searchInput").value.toUpperCase();
    
//     let table = document.querySelector("#userTable");
//     let tr = table.getElementsByTagName("tr");




//     for(let i=0; i<tr.length; i++) {
//         let td = tr[i].getElementsByTagName("td")[1];

//         if(td) {
//             let tdval = td.innerHTML.toUpperCase() || td.innerText.toUpperCase();


//             if(tdval.indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//                 // let tableBodyMsg = document.querySelector("tbody");
//                 // tableBodyMsg.classList.add("fontSize");
//                 // tableBodyMsg.innerText = "No Data Found";
//             }
//         }
//     }



//         let matchCount = 0;
//         if (matchCount === 0) {
//         let tableBody = document.querySelector("tbody");
//         let msgRow = document.createElement("tr");
//         msgRow.classList.add("msgData");
//         let td = document.createElement("td");
//         td.colSpan = 5;
//         td.textContent = "No Data Found";
//         msgRow.appendChild(td);
//         tableBody.appendChild(msgRow);
//         }

// }






// window.addEventListener("load", function(){
//     const loader = document.getElementById("loader");
//     loader.style.display = "none";
// })














// ----------------------------------------------------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    let tableBody = document.querySelector("tbody");

    data.forEach((user) => {
      let tr = `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      </tr>`;
      tableBody.innerHTML += tr;
    });
  });



  
function filterTable() {
  let filter = document.getElementById("searchInput").value.toUpperCase();
  let table = document.querySelector("#userTable");
  let tr = table.getElementsByTagName("tr");

  let matchCount = 0;

  // Pehle se existing "No Data Found" message hata do (agar hai)
  let oldMsg = document.querySelector(".msgData");
  if (oldMsg) oldMsg.remove();

  // Loop for filtering
  for (let i = 1; i < tr.length; i++) { // 1 se start (header skip)
    let td = tr[i].getElementsByTagName("td")[1]; // name column

    if (td) {
      let tdval = td.textContent.toUpperCase();

      if (tdval.indexOf(filter) > -1) {
        tr[i].style.display = "";
        matchCount++;
      } else {
        tr[i].style.display = "none";
      }
    }
  }





  // Agar koi match nahi mila to ek baar msg dikhao
  if (matchCount === 0) {
    let tableBody = document.querySelector("tbody");
    let msgRow = document.createElement("tr");
    msgRow.classList.add("msgData");

    let td = document.createElement("td");
    td.colSpan = 5;
    td.textContent = "No Data Found";
    td.style.textAlign = "left";
    td.style.fontWeight = "bold";

    msgRow.appendChild(td);
    tableBody.appendChild(msgRow);
  }
}




// Loader hide on page load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});














   

















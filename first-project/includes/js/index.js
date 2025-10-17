const onLoad = async () => {
    document.getElementById("loader").style.display = "block"; // loader show
  const users = await getUsers();
  renderTable(users);
  document.getElementById("loader").style.display = "none"; // loader hide
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "searchBox");
  input.setAttribute("placeholder", "Search by name...");
  document.body.insertBefore(input, document.getElementById("users-section"));
  input.addEventListener("input", search);
  return input;
};

const search =  () => {
  const input = document.getElementById("searchBox");
  console.log(input.value);
  let filter = input.value.toUpperCase();
  let table = document.querySelector("table");
  let tr = table.getElementsByTagName("tr");
  for(let i=1; i<tr.length; i++) { // 0 is header
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






const getUsers = async () => {
  //  loader.style.display = "block";
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
  // userData = data;
  // loader.style.display = "none";
  // tableData(userData);
};

const renderTable = (data) => {
  const table = getTableElement(data);
  const ele = document.getElementById("users-section");
  ele.append(table);
};

const getTableElement = (data) => {
  const table = document.createElement("table");
  table.className = "table table-hover";
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const columns = ["id", "name", "email", "phone", "username", "website","city" ];

  const thElements = [];

  columns.forEach((current) => {
    const th = getTh(current);
    thElements.push(th);
  });

  const bodyFragment = document.createDocumentFragment();
  data.forEach((current) => {
    const tdElements = [];


    columns.forEach((col) => {
      let value = current[col];
      if(col === "city") {    // add cityyyy
        value = current.address.city;
      }
      const td = getTDElement(value);
      tdElements.push(td);
    });



    const tr = getRowElement(tdElements);
    bodyFragment.append(tr);
  });

  const thRow = getRowElement(thElements);
  thead.append(thRow);

  tbody.append(bodyFragment);

  table.append(thead);
  table.append(tbody);
  return table;
};



// ----------------addEventListener-------------------
const getTh = (columnName) => {
  let  th = document.createElement("th");
  th.innerHTML = columnName;
  th.style.cursor = "pointer";
  th.addEventListener("click", () => {
    console.log(`You clicked on ${columnName}`);
    // sortTableByColumn(columnName);
  })
  return th;
};



const getRowElement = (elements) => {
  const tr = document.createElement("tr"); // ✅ correct method
  tr.append(...elements);
  return tr;
};
const getTDElement = (value) => {
  const td = document.createElement("td");
  td.innerHTML = value;
  return td;
};


window.addEventListener("load", onLoad);











// -----------------------------------------------------------------



// let currentSort = { column: null, state: "none" };

// let originalRows = []; // Original order store karne ke liye

// function sortTableByColumn(column) {
//   const table = document.querySelector("table");
//   const tbody = table.querySelector("tbody");
//   let rows = Array.from(tbody.querySelectorAll("tr"));

//   // Pehli baar me original order store kar lo
//   if (originalRows.length === 0) {
//     originalRows = rows.slice();
//   }

//   const columns = ["id", "name", "email", "phone", "username", "website", "city"];
//   const colIndex = columns.indexOf(column);

//   // 3-step toggle: none → asc → desc → none
//   if (currentSort.column === column) {
//     if (currentSort.state === "none") currentSort.state = "asc";
//     else if (currentSort.state === "asc") currentSort.state = "desc";
//     else if (currentSort.state === "desc") currentSort.state = "none";
//   } else {
//     currentSort.column = column;
//     currentSort.state = "asc";
//   }




//   // Sorting logic
//   if (currentSort.state === "asc" || currentSort.state === "desc") {
//     rows.sort((a, b) => {
//       let aText = a.children[colIndex].textContent.trim().toLowerCase();
//       let bText = b.children[colIndex].textContent.trim().toLowerCase();

//       // Agar number hai to number me convert karo
//       if (!isNaN(aText) && !isNaN(bText)) {
//         aText = Number(aText);
//         bText = Number(bText);
//       }

//       if (aText < bText) return currentSort.state === "asc" ? -1 : 1;
//       if (aText > bText) return currentSort.state === "asc" ? 1 : -1;
//       return 0;
//     });
//   } else if (currentSort.state === "none") {
//     // Normal state: original order restore karo
//     rows = originalRows.slice();
//   }

//   // Purana tbody clear karke new rows lagao
//   tbody.innerHTML = "";
//   rows.forEach(row => tbody.appendChild(row));
// }










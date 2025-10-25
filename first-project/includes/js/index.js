let usersData = [];
let lastSortedColumn = null;

const onLoad = async () => {
  document.getElementById("loader").style.display = "block"; // loader show
  const users = await getUsers();
  usersData = users;
  renderTable(users);
  document.getElementById("loader").style.display = "none"; // loader hide
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  let searchInput = input.setAttribute("id", "searchBox");
  input.setAttribute("placeholder", "Search by name...");
  document.body.insertBefore(input, document.getElementById("users-section"));

  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    renderTable(q? usersData.filter(u => (u.name || '').toLowerCase().includes(q)) : usersData);
  });
};


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
  ele.innerHTML = "";       // remove old table
  ele.append(table);
};

const getTableElement = (data) => {
  const table = document.createElement("table");
  table.classList.add("table", "table-striped", "table-hover"); // bootstrap classes
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const columns = ["id", "name", "email", "username", "website", "phone"];
  const columns1 = [
    {
      id:"id",
      name: "User Id",
      key: "id",
      isSort: true,
    },
    {
      id:'name',
      name: "User Name",
      key: "name",
      isSort: true,
    },
    {
      id:'email',
      name: "User Email",
      key: "email",
      isSort: true,
    },
    {
      id : 'username',
      name : 'User Name',
      key : 'username',
      isSort: true,
    },
    {
      id : 'website',
      name : 'Website',
      key : 'website',
      isSort : true,
    },
    {
      id : 'phone',
      name : 'Phone',
      key : 'phone',
      isSort : true,
    },
  ];

  const thElements = [];
  // debugger;

  columns1.forEach((current) => {
    const th = getTh(current);
    thElements.push(th);
  });
  const bodyFragment = document.createDocumentFragment();
  // debugger;
  data.forEach((current) => {
    // debugger;
    const tdElements = [];
    columns1.forEach((col) => {
      // debugger;
      const { key } = col;
      const value = current[key];
      const td = getTDElement(value);
      tdElements.push(td);
      // debugger;
    });
    // debugger;
    const tr = getRowElement(tdElements);
    // debugger;
    bodyFragment.append(tr);
    // debugger;
  });

  // debugger;
  const thRow = getRowElement(thElements);
  // debugger;
  thead.append(thRow);
  // debugger;
  table.append(bodyFragment);
  // debugger;
  table.append(thead);
  // debugger;
  table.append(tbody);
  // debugger;
  return table;
};



const getTh = (column) => {
  // console.log(column);
  const th = document.createElement("th");
  th.innerHTML = column.name;

  if (column.isSort) {
     // icon span
    const icon = document.createElement("span");
    icon.className = "sort-icon";
    icon.style.marginLeft = "8px";
    icon.style.fontSize = "0.8em";

// set initial icon based on current sort state


const setIcon = () => {
  if(lastSortedColumn?.id === column.id) {
    const ord =  lastSortedColumn.order;
    if(ord === "asc") icon.textContent = "▲";
    else if (ord === "dsc") icon.textContent = "▼";
    else icon.textContent = "↺";   // reset state
  } else {
    icon.textContent = "↕";    // neutral (not sorted)
  }
};


    setIcon();

    th.appendChild(icon);
    th.style.cursor = "pointer";

  

    th.onclick = (e) => {
      sortByColumn(e, column);
    };
  }

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

const sortByColumn = (e, column) => {
  let order = "asc";
  if(lastSortedColumn?.id === column?.id){
    const lastSortedOrder = lastSortedColumn?.order;
    if(lastSortedOrder === 'asc'){
      order = 'dsc';
    } else if(lastSortedOrder === 'dsc'){
      order = ''
    }
  }
  // console.log("clicked on", column?.name);
  const copyOfUsers = [...usersData];
  const {key} = column;
  if(order){
    copyOfUsers.sort((a, b) => {
      let aValue = a?.[key];
      let bValue = b?.[key];
      if(typeof aValue === "string"){
          aValue= aValue?.toLowerCase()
      }
      if(typeof bValue === "string"){
          bValue= bValue?.toLowerCase()
      }
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  lastSortedColumn = column;
  lastSortedColumn.order = order;
  renderTable(copyOfUsers)
};
function sortUsers(order = "asc") {
  if (!order) {
    return [...usersData]; // return original order
  }
  return [...usersData].sort((a, b) => {
    const emailA = a?.email?.toLowerCase() || "";
    const emailB = b?.email?.toLowerCase() || "";

    if (emailA < emailB) return order === "asc" ? -1 : 1;
    if (emailA > emailB) return order === "asc" ? 1 : -1;
    return 0;
  });
}

window.addEventListener("load", onLoad);









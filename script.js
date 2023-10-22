const queries = [
    {id: 1, student: "Genesis", query: "Permission to absent from tech class", status: "APPROVED"},
    {id: 2, student: "Nunya", query: "Permission to Absa Hackathon", status: "APPROVED"},
    {id: 3, student: "Fleeur", query: "Permission to shoot film", status: "DECLINED"},
    {id: 4, student: "Delight", query: "Need some delightful time to cool off", status: "DECLINED"},
    {id: 5, student: "Sila", query: "Permission to participate in Absa Hackathon", status: "PENDING"}
];

function createTable_whileLoop() {
    const tableBody = document.getElementById('queryTableBody');
    let tableRows = '';
    let i = 0;
    while (i < queries.length) { 
        const query = queries[i];           
    tableRows += `
            <tr>
                <td>${query.id}</td>
                <td>${query.student}</td>
                <td>${query.query}</td>
                <td>${query.status}</td>
                <td><a href="">Approve</a>
        <a href="">Decline</a></td>

            </tr>
        `;
        i++;
    }
    tableBody.innerHTML = tableRows;    
  }
createTable_whileLoop();

function createTable_doWhileLoop() {
  const tableBody = document.getElementById('queryTableBody');
  let tableRows = '';
  var i = 0;

  do {
      var query = queries[i];
      tableRows += `
<tr>
  <td>${query.id}</td>
  <td>${query.student}</td>
  <td>${query.query}</td>
  <td>${query.status}</td>
  <td>
      <a href="">Approve</a>
      <a href="">Decline</a>
  </td>
</tr>
`;
      i++;
  } while (i < queries.length);

  tableBody.innerHTML = tableRows;
}

createTable_doWhileLoop();
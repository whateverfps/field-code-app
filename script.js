
const data = []; // You can paste your existing data array here

const tableBody = document.getElementById("tableBody");

data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${row.Code}</td>
        <td>${row.Level}</td>
        <td>${row.Title}</td>
        <td>${row.Subtitle}</td>
        <td><a href="${row.Link}" target="_blank">Open</a></td>
    `;
    tableBody.appendChild(tr);
});

function filterTable() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const trs = document.querySelectorAll("#tableBody tr");
    trs.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

const data = [
    { "Code": "NEC 2002", "Level": "Article 90", "Title": "Introduction", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 100", "Title": "Definitions", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 110", "Title": "Requirements for Electrical Installations", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 200", "Title": "Use and Identification of Grounded Conductors", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 210", "Title": "Branch Circuits", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 215", "Title": "Feeders", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 220", "Title": "Branch-Circuit, Feeder, and Service Calculations", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 225", "Title": "Outside Branch Circuits and Feeders", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 230", "Title": "Services", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 240", "Title": "Overcurrent Protection", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 250", "Title": "Grounding and Bonding", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 300", "Title": "Wiring Methods", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 310", "Title": "Conductors for General Wiring", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 400", "Title": "Flexible Cords and Cables", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 500", "Title": "Hazardous (Classified) Locations", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 600", "Title": "Signs and Outline Lighting", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 700", "Title": "Emergency Systems", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 702", "Title": "Optional Standby Systems", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 800", "Title": "Communications Circuits", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 810", "Title": "Radio and Television Equipment", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 820", "Title": "Community Antenna Television and Radio Distribution Systems", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" },
    { "Code": "NEC 2002", "Level": "Article 830", "Title": "Network-Powered Broadband Communications Systems", "Subtitle": "", "Link": "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70" }
];

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

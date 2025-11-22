document.getElementById("generate").addEventListener("click", () => {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;
    let table = document.createElement("table");
    table.border = "1";

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.textContent = `R${i+1}C${j+1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    let container = document.getElementById("tableContainer");
    container.innerHTML = "";
    container.appendChild(table);
});


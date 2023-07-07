const container = document.querySelector(".container");

for (let i = 0; i <= 16; i++) {
    const row = document.createElement("div")
    row.className = "row";
    row.id = `row${i}`;
    for (let v = 0; v <= 16; v++) {
        const box = document.createElement("div");
        box.className = "square"
        row.appendChild(box)
    }
    container.appendChild(row);
}
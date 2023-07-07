const changeSize = document.querySelector(".size-ctrl .grid-size");
const reset = document.querySelector(".size-ctrl .clear")

makeGrid(16);

function makeGrid(num) {
    const container = document.querySelector(".container");
    const currentSize = document.querySelector(".size-ctrl .current-size");
    container.style.setProperty("--grid-rows", num)
    container.style.setProperty("--grid-cols", num)
        for (let v = 0; v < (num * num); v++) {
            const box = document.createElement("div");
            box.className = "square"
            container.appendChild(box)
            box.addEventListener("mouseover", () => {
                box.classList.add("hovered");
            });
        }
        currentSize.textContent = `Current Size: ${num} x ${num}`;
}



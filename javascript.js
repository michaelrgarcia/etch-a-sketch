const changeSize = document.querySelector(".size-ctrl .grid-size");
const reset = document.querySelector(".size-ctrl .clear")

makeGrid(16);

changeSize.addEventListener("click", () => {
    const input = prompt("Enter a size (max 100):", "16");
    if (isNaN(input)) {
        alert("Please enter a number.");
    } else if (input > 100) {
        alert("Please enter a number smaller than 100.", "");
    } else if (input <= 0) {
        alert("Please enter a number larger than 0.");
    } else {
        const check = prompt("This will clear your grid. Are you sure you want to do this?").toLowerCase()
        if (check === "yes") {
            clearGrid();
            makeGrid(input);
        }
    }
});

reset.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const boxes = container.querySelectorAll("div");
    boxes.forEach((box) => {
        if (box.className === "square hovered") box.classList.remove("hovered");
    });
});

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
                if (box.className !== "square hovered") {
                    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
                    box.style.setProperty("--main-bg-color", randomColor);
                    box.classList.add("hovered");
                }
            });
        }
        currentSize.textContent = `Current Size: ${num} x ${num}`;
}

function clearGrid() {
    const container = document.querySelector(".container");
    const boxes = container.querySelectorAll("div");
    if (boxes) {
        boxes.forEach((box) => {
            box.remove();
        });
    }
}



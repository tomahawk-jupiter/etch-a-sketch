const canvasWidth = 470;
const initialCells = 16;
const canvasColor = "#cdaa87";
const inkInitialColor = "#46290b";
let inkColor = "#46290b";

let canvasContainer = document.querySelector(".canvas-container");

function drawCanvas(cellsPerSide) {
  const cellWidth = canvasWidth / cellsPerSide;

  for (let row = 0; row < cellsPerSide; row++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let col = 0; col < cellsPerSide; col++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.setAttribute(
        "style",
        `width:${cellWidth}px;height:${cellWidth}px;
      background-color:${canvasColor};`
      );

      // This event listener is what allows drawing //
      cell.addEventListener("mouseover", (e) => {
        e.target.style["background-color"] = inkColor;
      });
      row.appendChild(cell);
    }
    canvasContainer.appendChild(row);
  }
}

// Draw initial canvas.
drawCanvas(initialCells);

// Wipes the canvas clean.
function clear() {
  canvasContainer.replaceChildren();
  inkColor = inkInitialColor;
}

let buttonResolution = document.querySelector(".btn-resolution");
let buttonClear = document.querySelector(".btn-clear");
let userCellsPerSide = initialCells;

// Clear canvas and change resolution.
buttonResolution.addEventListener("click", () => {
  userCellsPerSide = prompt("Choose number of cells per side (max 99)");

  // Clear old board before rendering new one
  clear();
  if (!userCellsPerSide) {
    alert("No value entered! Default will be applied");
    drawCanvas(initialCells);
  }
  if (userCellsPerSide > 100) {
    alert("Number too high! Default setting will be applied.");
    drawCanvas(initialCells);
  }
  if (userCellsPerSide < 100 && userCellsPerSide > 0) {
    drawCanvas(userCellsPerSide);
  }
});

// Clear canvas and keep resolution the same.
buttonClear.addEventListener("click", () => {
  clear();
  drawCanvas(userCellsPerSide);
});

const eraser = document.getElementById("btn-eraser");

eraser.addEventListener("click", () => {
  if (inkColor === inkInitialColor) {
    inkColor = canvasColor;
    return;
  }
  inkColor = inkInitialColor;
});

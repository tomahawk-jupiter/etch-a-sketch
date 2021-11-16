
// width of the drawing board
const canvasWidth = 470;
const initialCells = 16;
const canvasColor = '#cdaa87';
const inkColor = '#46290b';

let canvasContainer = document.querySelector('.canvas-container');
canvasContainer.setAttribute('style', `width:${canvasWidth}px;
    height:${canvasWidth}px;`);

function drawCanvas(cellsPerSide){
  const totalCells = cellsPerSide * cellsPerSide;
  const cellWidth = canvasWidth / cellsPerSide;

  for (let i = 0; i < totalCells; i++){
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.setAttribute(
      'style', `width:${cellWidth}px;height:${cellWidth}px;background-color:${canvasColor};`
    );
    cell.addEventListener('mouseover', e => {
      e.target.style['background-color'] = inkColor;
    });
    canvasContainer.appendChild(cell);
  }
}

// Draw initial canvas.
drawCanvas(initialCells);

function clear(){
  let cells = document.querySelectorAll('.cell');
  canvasContainer.replaceChildren();
}

let buttonResolution = document.querySelector('.btn-resolution');
let buttonClear = document.querySelector('.btn-clear');
let userCellsPerSide = initialCells;
// Clears elements and re-draws them.
buttonResolution.addEventListener('click', ()=> {
  userCellsPerSide = prompt(
    'Choose number of cells per side (max 99)'
  );
  clear();
  if (userCellsPerSide > 100){
    alert('Number too high! Default setting will be applied.');
    drawCanvas(initialCells);
  } else if (userCellsPerSide < 100){
    drawCanvas(userCellsPerSide);
  }
});

buttonClear.addEventListener('click', ()=>{
  clear();
  drawCanvas(userCellsPerSide);
});

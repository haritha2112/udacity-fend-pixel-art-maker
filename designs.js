// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  const body = document.body;

  const gridHeight = document.getElementById("inputHeight").value;
  const gridWidth = document.getElementById("inputWidth").value;

  const table = document.getElementById("pixelCanvas");
  const tableBody = document.createElement("tbody");

  for(let i=0; i<=gridHeight; i++){
    let row = document.createElement("tr");
    for(let j=0; j<=gridWidth; j++){
      let cell = document.createElement("td");
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  body.appendChild(table);
}

let numRows = 1;
let numCols = 1;
let colorSelected = "#000000";
const table = document.getElementById("grid");
let cells = document.querySelectorAll("td");
cells[0].addEventListener("click", function () {
    cells[0].style.backgroundColor = colorSelected;
});

function addR() {
    let row = table.insertRow(-1);
    for(let i = 0;i < table.rows[0].cells.length; i++){
        row.insertCell(i).addEventListener("click", function () {
            this.style.backgroundColor = colorSelected;
        })
    }
    numRows++;

}

function addC() {
    for(let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell().addEventListener("click", function () {
            this.style.backgroundColor = colorSelected;
        });
    }
    numCols++;

}

function removeR() {
    if(numRows > 1) {
        table.deleteRow(-1);
        numRows--;
    }
}

function removeC() {
    if(numCols > 1){
        for(let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(-1);
        }
        numCols--;
    }
}

//fill all uncolored
function fillU() {
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++) {
            let compstyle = window.getComputedStyle(table.rows[i].cells[j]);
            let color = compstyle.getPropertyValue('background-color');
            if(color === '#ffffff' || color === 'rgb(255, 255, 255)'){
                table.rows[i].cells[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

function fillall() {
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }
}

function clearAll() {
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++) {
            table.rows[i].cells[j].style.backgroundColor = "#ffffff";
        }
    }
}

function selectColor() {
    let selected = document.getElementById("selectedColorId").value;
    switch (selected) {
        case "Black":
            colorSelected = "#000000";
            break;
        case "Red":
            colorSelected = "#FF0000";
            break;
        case "Blue":
            colorSelected = "#3944BC";
            break;
        case "Green":
            colorSelected = "#008000";
            break;
        case "Yellow":
            colorSelected = "#ffff00";
            break;
    }
}
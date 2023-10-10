let numRows = 1;
let numCols = 1;
let colorSelected;
const table = document.getElementById("grid");
const cells = document.querySelectorAll("td");

function addR() {
    let row = table.insertRow(-1);
    for(let i = 0;i < table.rows[0].cells.length; i++){
        row.insertCell(i);
    }
    numRows++;
}

function addC() {
    for(let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
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

function fillU() {

}

function fillall() {

}

function clearAll() {

}

function selectColor() {
    
}
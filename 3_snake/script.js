//
// создание матрицы.
//
let x = 20;
let y = 20;

let count = 0;
function createMatrix() {
  let matrix = document.getElementById("matrix");
  let n = x * y;

  for (let i = 0; i < n; i++) {
    let div = document.createElement("div");
    div.className = "cell";
    matrix.appendChild(div);
  }
}

let cellNumber = function (row, col) {
    let index = --row * 20 + --col;
    return index;
  };
//
// чтение ¤чейки матрицы.
//
function getCell(row, col) {
  // функци¤ принимает координаты ¤чейки
  // должна вернуть true, если она закрашена,
  // false, если не закрашена.
 
  let matrix = document.getElementById("matrix");
  let cell = matrix.children[cellNumber(row, col)];
  return cell.style.backgroundColor == "red";
}

//
// Yстановка ¤чейки матрицы.
//
function setCell(row, col, val) {
  // Функция принимает координаты ячейки
  // если val == true, закрашивает ячейку,
  // иначе убирает закраску.
  let cell = matrix.children[cellNumber(row, col)];
  if (val) {
    cell.style.backgroundColor = "red";
  } else {
    cell.style.backgroundColor = "";
  }
}

function getRandomNumber() {
	return Math.floor(Math.random()*20);
  }
//
// точка входа.
//
window.onload = function () {
  createMatrix();
  setCell(getRandomNumber(),getRandomNumber(), true);
  setCell(getRandomNumber(),getRandomNumber(), true);
  
  setCell(getRandomNumber(),getRandomNumber(), false);

};



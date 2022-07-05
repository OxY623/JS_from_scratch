//
// создание матрицы.
//
function Matrix(containerId,rows,cols) {
    let _this = this;
	_this.containerId = containerId;
	_this.rows = rows;
	_this.cols = cols;
    _this.createMatrix = function() {
		let matrix = document.getElementById(_this.containerId);
		let n = _this.rows* _this.cols;
        matrix.innerHTML = '';
		for (let i = 0; i < n; i++) {
			let div = document.createElement("div");
			div.className = "cell";
			matrix.appendChild(div);
		  }
		}
	_this.getCell = function(row,col){

	}
	_this.setCell = function(row,col,val){
		let index = (--row) * _this.cols  + (--col);
		let matrix = document.getElementById(_this.containerId);
		let cell = matrix.children[index];

		if (val){
			cell.className = 'cell on';
		} else cell.className = 'cell'
	}
   }



window.onload = function () {
	var m1 = new Matrix('matrix1', 20, 20);
	m1.createMatrix();
	m1.setCell(5, 5, true);

	var m2 = new Matrix('matrix2', 10, 10);
	m2.createMatrix();
	m2.setCell(5, 5, true);
	m2.setCell(5, 3, true);



};



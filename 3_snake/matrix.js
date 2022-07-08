//
// создание матрицы.
//
function Matrix(containerId,rows,cols) {
    
	this.containerId = containerId;
	this.rows = rows;
	this.cols = cols;
    this.createMatrix = function() {
		let matrix = document.getElementById(this.containerId);
		let n = this.rows* this.cols;
        matrix.innerHTML = '';
		for (let i = 0; i < n; i++) {
			let div = document.createElement("div");
			div.className = "cell";
			matrix.appendChild(div);
		  }
		}
	this.getCell = function(row,col){

	}
	this.setCell = function(row,col,val){
		let index = (--row) * this.cols  + (--col);
		let matrix = document.getElementById(this.containerId);
		let cell = matrix.children[index];

		cell.className = (val ? 'cell on' : 'cell');
	}
   }







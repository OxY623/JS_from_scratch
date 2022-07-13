//
// создание матрицы.
//
function Matrix(container,rows,cols) {
    
	this.$container = $(container);
	this.rows = rows;
	this.cols = cols;
	let _this = this;
    this.createMatrix = function() {
		
		let n = _this.rows* _this.cols;
        _this.$container.empty();
		for (let i = 0; i < n; i++) {
			let $div = $(' <div class="cell"> </div>');
			
			_this.$container.append($div);
		  }
		}
	this.getCell = function(row,col){

	}
	this.setCell = function(row,col,val){
		let index = (--row) * this.cols  + (--col);
	
		let cell = _this.$container.children().eq(index);

		cell.className = (val ? 'cell on' : 'cell');
	}
   }







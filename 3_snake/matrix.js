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
	this.getCellElement = function(row,col){
       let indexOfCell =  (--row) * this.cols  + (--col);
	   return _this.$container.find('cell').eq(indexOfCell);
	}

	this.getCell =function(row,col){
		return _this.getCellElement(row,col).hasClass('on');
	}
	this.setCell = function(row,col,val){
		let cell = this.getCellElement(row,col);
		cell.toggleClass('on',val);

	}
   }







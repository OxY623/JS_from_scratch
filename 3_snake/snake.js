function Snake(rol,col,course, lenght) {
    let _this=this;
    this.body = [];
    for(var i=0; i < lenght; i++) {
		_this.body.push({row: row + i, col: col});
	}
    this.course=course;
   

    this.grow = function(){
        let tail = _this.body[_this.body.length-1];
        _this.body.push(tail);
    }

    this.move = function(){
        let headRow = _this.body[0].row;
        let headCol = _this.body[0].col;

        switch (_this.course){
            case 'right':
                headCol++;
                break;
            case 'left':
                headCol--;
                break;
            case 'up':
                headRow--;
                break;
            case 'down':
                headRow++;
                break;
        }
        _this.body.unshift({row:headRow,col:headCol});
        return _this.body.pop();
    }


}
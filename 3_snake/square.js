function Square(row,col,course,matrix){
    this.body =  {x : row, y : col};
    this.matrix = matrix;
    this.course = course;
 
    let self = this;

    this.create = function(){
        this.matrix.setCell(self.body.x, self.body.y, true);
    }
    this.move = function()
	{
		self.matrix.setCell(self.body.x, self.body.y, false);
	
		
		switch(self.course)
		{
			case 'right':
				self.body.y++;
				break;
		}
		
        // self.matrix.setCell(last_body[x], last_body[y], false);
        self.matrix.setCell(self.body.x, self.body.y, true);
	}
}

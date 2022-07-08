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
            case 'left':
                self.body.y--;
                break;
            case 'top':
                    self.body.x--;
                    break;
            case 'bottom':
                    self.body.x++;
                    break;
		}
		
       
        self.matrix.setCell(self.body.x, self.body.y, true);
	}
}

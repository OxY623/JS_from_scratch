function Square(row,col,course){
    this.body = [row, col];
    this.course = course;
    var _this = this;

    this.create = function(){
        m1.setCell(_this.body[0],_this.body[1],true);
    }
    this.move = function(){
       
        switch (_this.course) {
            case 'right':
                that.body[1]++;
                break;
        }
        m1.setCell(_this.body[0],_this.body[1],false);
        m1.setCell(_this.body[0],_this.body[1],true);
    }
}
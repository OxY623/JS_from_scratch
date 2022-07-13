let KEYS = {LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40};

let DEFAULT_COURSE = 'up';

function Game(matrix,snake){
    let _this = this;

    document.onkeydown = function(e){
        e = e || window.event;
        switch (e.keyCode){
            case KEYS.LEFT:
            _this.snake.coupse = 'left';
            break;
            case KEYS.UP:
            _this.snake.coupse = 'up';
break;
            case KEYS.RIGHT:
            _this.snake.coupse = 'right';
break;
            case KEYS.DOWN:
            _this.snake.coupse = 'down';
        }
        
        
    }
}


$(document).ready(function () {
	let m1 = new Matrix('#matrix1', 20, 20);
	m1.createMatrix();
    /*  m1.setCell(5,6,true);
     m1.setCell(6,6,true);
 */
    let sqr1 = new Square( RandomNums(1,20),  RandomNums(1,20),m1);
    sqr1.create();
   
    let repeat = setInterval(sqr1.move, 200)
    
}); 
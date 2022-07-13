let KEYS = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

let DEFAULT_COURSE = "up";

function Game(matrix, snake) {
  let _this = this;

  document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.keyCode) {
      case KEYS.LEFT:
        _this.snake.coupse = "left";
        break;
      case KEYS.UP:
        _this.snake.coupse = "up";
        break;
      case KEYS.RIGHT:
        _this.snake.coupse = "right";
        break;
      case KEYS.DOWN:
        _this.snake.coupse = "down";
    }
  };
  this.makeSnake = function(){
    if (_this.snake){
        for ( i =0; i < _this.snake.body.length; i++){
            _this.matrix.setCell(_this.snake.body[t].row,_this.snake.body[t].col,false);
        }
    }
    _this.snake = new Snake(5,5,DEFAULT_COURSE,3);
    for( let i=0; i < _this.snake.body.lenght;i++){
        _this.matrix.setCell(_this.snake.body[i].row,_this.snake.body[i].col,true);
    }
  }
  this.resetGame = function(){
    alert(" YOU LOST ");
    _this.makeSnake();

  }


  this.gameplay = function() {
   let tail = _this.snake.move();
   let head = _this.snake.body[0];

    if ((head.row > _this.matrix.rows || head.row < 1 ||
        head.col > _this.matrix.cols || head.col < 1) ||
        _this.matrix.getCell(head.row, head.col)) {
        _this.resetGame();
        _this.matrix.setCell(tail.row, tail.col, false);
        return;
    }

    if(_this.matrix.getFruit(head.row, head.col)) {
        _this.snake.grow();
        _this.matrix.setFruit(head.row, head.col, false);
        _this.setRandomFruit();
    }

    _this.matrix.setCell(head.row, head.col, true);
    _this.matrix.setCell(tail.row, tail.col, false);
}



this.setRandomFruit = function() {
   let fruitRow = getRandomInt(1, _this.matrix.rows);
   let fruitCol = getRandomInt(1, _this.matrix.cols);
    _this.matrix.setFruit(fruitRow, fruitCol, true);
}


this.matrix = new Matrix('#matrix1', 20, 20);
this.matrix.create();
this.makeSnake();
this.setRandomFruit();
}

$(document).ready(function() {
var game = new Game();
setInterval(game.gameplay, 250);
});




/* $(document).ready(function () {
  let m1 = new Matrix("#matrix1", 20, 20);
  m1.createMatrix();
  /*  m1.setCell(5,6,true);
     m1.setCell(6,6,true);
 */
 /*  let sqr1 = new Square(RandomNums(1, 20), RandomNums(1, 20), m1);
  sqr1.create();

  let repeat = setInterval(sqr1.move, 200);
}); */ 

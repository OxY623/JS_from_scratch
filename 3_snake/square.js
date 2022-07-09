function Square(row, col, matrix) {
  this.body = { x: row, y: col };
  this.matrix = matrix;

  let self = this;

  this.create = function () {
    this.matrix.setCell(self.body.x, self.body.y, true);
  };
  this.move = function () {
    let direction = ["right", "left", "top", "bottom"];
    self.matrix.setCell(self.body.x, self.body.y, false);
    addEventListener("keydown", function (event) {
      if (event.keyCode == 38) {
        self.course = direction[2];
      } else if (event.keyCode == 40) {
        self.course = direction[3];
      } else if (event.keyCode == 37) {
        self.course = direction[1];
      } else self.course = direction[0];
    });

    switch (self.course) {
      case "right":
        self.body.y++;
        break;
      case "left":
        self.body.y--;
        break;
      case "top":
        self.body.x--;
        break;
      case "bottom":
        self.body.x++;
        break;
    }
    if (self.body.x > 20){
      self.body.x = 20;
    } else if self.body.x < 1 {
      self.body.x =1;
    } 

    if (self.body.y > 20){
      self.body.y = 20;
    } else if self.body.y < 1 {
      self.body.y =1;
    } 

    self.matrix.setCell(self.body.x, self.body.y, true);
  };
}

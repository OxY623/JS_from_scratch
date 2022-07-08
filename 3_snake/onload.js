window.onload = function () {
	let m1 = new Matrix('matrix1', 20, 20);
	m1.createMatrix();
    // m1.setCell(5,6,true);
    // m1.setCell(6,6,false);
    
    let sqr1 = new Square(5, 6,'right',m1);
    sqr1.create();
    // setInterval( sqr1.move , 300);
    /* sqr1.move();
    sqr1.move();
    sqr1.move();
    sqr1.move();
    sqr1.move();
    sqr1.move(); */
    let repeat = setInterval(sqr1.move,1000)
    
};
window.onload = function () {
	let m1 = new Matrix('matrix1', 20, 20);
	m1.createMatrix();
    // m1.setCell(5,6,true);
    // m1.setCell(6,6,false);
    
    let sqr1 = new Square(10, 10,'top',m1);
    sqr1.create();
   
    let repeat = setInterval(sqr1.move, 500)
    
};
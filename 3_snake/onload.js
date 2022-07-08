window.onload = function () {
	var m1 = new Matrix('matrix1', 20, 20);
	m1.createMatrix();
	
    sqr1 = new Square(1,2,'right');
sqr1.create();
setInterval(sqr1.move(),300);
    
};
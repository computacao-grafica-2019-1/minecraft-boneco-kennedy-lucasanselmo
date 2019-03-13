function setup() {
	createCanvas(400, 270);
	background(255);
	
	//Desenha Cabeça!
	push();
	translate(195, 60);
	rect(-25, -50, 50, 50);
	fill(0);
	circle(0,0,4);
	pop();
	
	//Desenha Tronco!
	push();
	translate(195, 10);
	rect(-40, 60, 80, 100);
	fill(0);
	circle(0,0,4);
	pop();
	
	//Desenha Braço D!
	push();
	translate(145, 87);
	rect(-80, -17, 80, 35);
	fill(0);
	circle(0,0,4);
	pop();
	
	//Desenha Braço E!
	push();
	translate(245, 87);
	rect(0, -17, 80, 35);
	fill(0);
	circle(0,0,4);
	pop();
	
	//Desenha Perna D!
	push();
	translate(172, 180);
	rect(-17, 0, 35, 80);
	fill(0);
	circle(0,0,4);
	pop();
	
	//Desenha Perna E!
	push();
	translate(217, 180);
	rect(-17, 0, 35, 80);
	fill(0);
	circle(0,0,4);
	pop();
}

function draw() {

}
let cor;

let posicaoHorizontal; // x

let posicaoVertical; // y

function setup() {

createCanvas(400, 400);

background("white");

cor = color(random(255), random(255), random(255));

posicaoHorizontal = 200;

posicaoVertical = 200;

}

function draw() {

fill(cor);

circle(posicaoHorizontal, posicaoVertical, 50);

}

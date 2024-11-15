// https://www.youtube.com/watch?v=QZc9FL5cUys
// Leonel Angel Brianese 93490/3
// Camila Aylen Busse Lopez 95957/7
// Comision 2
let P;
let J;
let sonido;
let reproduciendo = false;
let p = [];

function preload() {
soundFormats('mp3');
sonido = loadSound('data/rick.mp3');
  for (let i = 0; i < 7; i++) {
    p.push(loadImage('data/p' + i + '.jpg'));
  }
}

function setup() {
  createCanvas(640, 480);
  P = new Pantallas();
  J = new juego();
sonido.play()
}


function draw() {
  background(220);
  P.dibujar();
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
}

function keyPressed() {
  P.J.moverProtagonista(keyCode);
}

function mousePressed() {
  P.AcBotones();
}

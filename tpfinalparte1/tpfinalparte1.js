// Leonel Brianese 93490/3 y Camila Busse 95957/7
// Comision 2
// https://youtu.be/lLoTV2hFdGo
let imagenes = [];
let textos = [];
let finales =[];
let decision = [];
let ult = [];
let Empieza = 0;
let font;
let boton = [];
let sonido;
let reproduciendo = false;

function preload() {
  let pantallas = [
    "data/aa.jpg", "data/a1.jpg", "data/a2.jpg", "data/a3.jpg", "data/a4.png",
    "data/af.jpg", "data/b3.jpg", "data/bf.jpg", "data/bisf.jpg",
    "data/c4.jpg", "data/c5.jpg", "data/c6.jpg", "data/c7.jpg",
    "data/cf.jpg", "data/d7.jpg", "data/df.jpg", "data/zz.jpg"
  ];

  for (let i = 0; i < pantallas.length; i++) {
    let img = loadImage(pantallas[i]);
    imagenes.push(img);

    soundFormats('mp3');
    sonido = loadSound('data/rick.mp3');
  }

  textos = ["Comenzar",
    "Rick consigue mejorar su clasica pistola de portales, pudiendo viajar a nuevos lugares.\n Morty está emocionado pero también asustado.",
    "Llegan a una dimensión donde la sociedad está compuesta por bichos mutantes. \n Uno de ellos se acerca y les ofrece un trato.",
    "Pueden manipular la realidad y controlar a otros seres,\n a cambio deben ayudar a consolidar el dominio sobre la dimensión.",
    "Asesinan a todos los seres y al eliminar a quien les propuso el trato pierden el poder.",
    "Regresan al portal pero encuentran un segundo portal abierto.\n Deben decidir cual usar.",
    "Todo es exactamente igual pero notan un cambio\n en el comportamiento de la gente con Rick.",
    "Descubren que el mundo está dominado\n por una version malvada de Rick y se unen a la resistencia.",
    "Se infiltran en la base del Rick malvado y encuentran dos salas.\n Deciden ir por la sala de la...",
    "Logran obtener información sobre los planes del Rick malvado,\n lo que les da la oportunidad de derrotarlo.",
    "Entran en una habitacion falsa donde los atrapan\n y terminan siendo esclavos." ]

    boton = [ "Continuar", "Finalizar", "Pulse R\n para reiniciar"]
    decision = [ "Aceptar", "Rechazar", "Ayudar", "Traicionar", "Portal\n original", "Portal\n desconocido", "Investigar", "Ignorar", "Izquierda", "Derecha" ]

    ult = ["Obra: Rick y Morty.\n Autor: Dan Harmon.\n Alumnos: Leonel Brianese y Camila Busse.\n Imagenes: Google imagenes.",
    "Rick y Morty controlan a toda la poblacion.",
    "Rick y Morty volvieron a la casa.",
    "Rick y Morty termiaron viviendo\n en una realidad alterna.",
    "La resistencia pudo derrotar al Rick malvado.",
    "La resistencia perdió contra el Rick malvado."]
}

function setup() {
  createCanvas(640, 480);
  textFont ('Georgia');
  sonido.onended(() => {
    if (reproduciendo) {
      sonido.play();
    }
  }
  );
}

function reiniciarSonido() {
  sonido.play();
}

function draw() {
  background(220);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY); // mouse

  // Inicio
  if (imagenes[Empieza]) {
    image(imagenes[Empieza], 0, 0, 640, 480);
    if (Empieza === 0) {
      fill(0);
      rect(218, 14, 190, 70);
      fill(250);
      textSize(25);
      textAlign(CENTER, CENTER);
      text(textos[0], 315, 50);
    }
  }
  //primer pantalla a1
  if (Empieza === 1) {
    //continuar abajo
    continuar();

    texto();
    text(textos[1], 320, 423);
  }
  if (Empieza === 2) { // a2 toma de decisiones aceptar o rechazar

    texto();
    text(textos[2], 320, 425);

    bot()
      text(decision[0], 60, 60);
    text(decision[1], 580, 60);
  }
  if (Empieza === 3) { // a3 toma de decisiones ayudar o traicionar
    bot();
    text(decision[2], 60, 60);
    text(decision[3], 580, 60);

    texto();
    text(textos[3], 320, 425);
  }
  if (Empieza === 4) {
    // continuar arriba
    continuar();

    text(boton[0], 305, 35 );

    texto();
    text(textos[4], 320, 430);
  }
  if (Empieza === 5) { // final control mental
    fin();


    fill(250);
    rect(185, 410, 270, 30);
    fill(0);
    textSize(13);
    text(ult[1], 320, 425);
  }
  if (Empieza === 6) { //decision portal
    texto()
      text(textos[5], 320, 425);

    bot();
    text(decision[4], 57, 55);


    text(decision[5], 580, 55);
  }
  if (Empieza === 7) {   //final vuelta a casa
    fin();
    text(boton[1], 305, 45);

    texto()
      text(ult[2], 320, 425);
  }

  //final realidad alterna
  if (Empieza === 8) {
    fin();
    texto()
      text(ult[3], 320, 425);
  }

  if (Empieza === 9) {
    texto();
    text(textos[6], 320, 425);

    bot();
    text(decision[6], 60, 60);
    text(decision[7], 580, 60);
  }

  if (Empieza === 10) {
texto();
    text(textos[7], 320, 425);
    textAlign(CENTER);


    fill(0);
    rect(255, 20, 100, 30);
    fill(250);
    textSize(20);
    text(boton[0], 305, 35 );
  }

  if (Empieza === 11) {
   texto();
    text(textos[8], 320, 425);
    textAlign(CENTER);

    bot();
    text(decision[8], 60, 60);

    text(decision[9], 580, 60);
  }

  if (Empieza === 12) {
texto();
    text(textos[9], 320, 425);
  

 fin();
    text(boton[0], 305, 35 );
  }

  if (Empieza === 13) { //final victoria
    fin();

    fill(0);
    rect(185, 410, 270, 30);
    fill(250);
    textSize(13);
    text(ult[4], 320, 425);
  }
  if (Empieza === 14) {
    texto();
    text(textos[10], 320, 425);
    textAlign(CENTER);

    continuar();
    text(boton[0], 305, 35 );
  }
  if (Empieza === 15) { //final derrota
    fin();

    fill(0);
    rect(185, 410, 270, 30);
    fill(250);
    textSize(13);
    text(ult[5], 320, 425);
  }
  if (Empieza === 16) { //creditos
    fill(250);
    rect(75, 180, 480, 123);
    fill(0);
    textSize(25);
    text(ult[0], 310, 195 );
    textAlign(CENTER);

    fill(250);
    rect(265, 360, 126, 57);
    fill(0);
    textSize(20);
    text(boton[2], 325, 376 );
  }
}

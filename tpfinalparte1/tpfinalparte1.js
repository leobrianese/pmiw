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
let decisio = false;
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
  textos = loadStrings("data/textos.txt");
  boton = [ "Continuar", "Finalizar", "Pulse R\n para reiniciar", "Comenzar"]
  decision = [ "Aceptar", "Rechazar", "Ayudar", "Traicionar", "Portal\n original", "Portal\n desconocido", "Investigar", "Ignorar", "Izquierda", "Derecha" ]
  ult = ["Obra: Rick y Morty.\n Autor: Dan Harmon.\n Alumnos: Leonel Brianese y Camila Busse.\n Imagenes: Google imagenes.", ]
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
  inicio();
  Todo();
}

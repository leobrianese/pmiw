let imagenes = [];
let textos = [];
let finales =[];
let decision = [];
let Empieza = 0; // Índice de la imagen actual
let font;
let boton;

function preload() {
  let pantallas = [
    "data/aa.jpg", "data/a1.jpg", "data/a2.jpg", "data/a3.jpg", "data/a4.png",
    "data/af.jpg", "data/b3.jpg", "data/bf.jpg", "data/bisf.jpg",
    "data/c4.jpg", "data/c5.jpg", "data/c6.jpg", "data/c7.jpg",
    "data/cf.jpg", "data/d7.jpg", "data/df.jpg", "data/zz.jpg"
  ];

  for (let i = 0; i < pantallas.length; i++) {
    let img = loadImage(pantallas[i]); // Carga cada imagen
    imagenes.push(img); // Agrega la imagen al arreglo global
  }

  textos = ["Comenzar", "Rick consigue mejorar su clasica pistola de portales, pudiendo viajar a nuevos lugares.\n Morty está emocionado pero también asustado.", "Rick y Morty llegan a una dimensión donde no existen los humanos, y la sociedad está compuesta por bichos mutantes. Uno de ellos se acerca y les ofrece un trato.", "Se les otorga la capacidad de manipular la realidad y controlar a otros seres a su favor, a cambio deben ayudar a consolidar el dominio sobre la dimensión, derrotando a otros seres que se opongan.", "Asesinan a todos los seres y al matar al eliminar a quien les propuso el trato pierden el poder.", "Regresan al portal pero encuentran un segundo portal abierto.", "Todo es exactamente igual pero notan un cambio en el comportamiento de la gente con Rick.", "Descubren que el mundo está dominado por una version malvada de Rick y se unen a la resistencia.", "Se infiltran en la base de Rick malvado y encuentran dos salas.", "Logran obtener información sobre los planes del Rick malvado, lo que les da la oportunidad de derrotarlo.", "Entran en una habitacion falsa donde los atrapan y terminan siendo esclavos." ]

    boton = [ "Continuar", "Finalizar", "Reiniciar"]
    decision = [ "Aceptar", "Rechazar", "Ayudar a manipular", "Traicionar", "Usar el portal original", "Usar el portal desconocido", "Investigar", "Ignorar", "Izquierda", "Derecha" ]

    finales = [ "Controlan a la poblacion", "Vuelta a casa", "Victoria de la resistencia", "Derrota de la resistencia", "Realidad alterna" ]
}

function setup() {
  createCanvas(640, 480);
  //  mostrarAA(); // Llama a la función para mostrar "aa.jpg"
  textFont ('Georgia');
}

function draw() {
  background(220);
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY); // mouse

  // Dibuja la imagen actual solo si está cargada
  if (imagenes[Empieza]) {
    image(imagenes[Empieza], 0, 0, 640, 480); // Dibuja la imagen actual
    if (Empieza === 0) {
      fill(0);
      rect(218, 14, 190, 70); // Fondo del texto
      fill(250);
      textSize(25);
      textAlign(CENTER, CENTER); // Alineación centrada
      text(textos[0], 315, 50); // Centra el texto
    }
  }
  if (Empieza === 1) {
    fill(0);
    rect(13, 440, 574, 60); // Fondo del texto, ajustado para más líneas
    fill(250);
    textAlign(CENTER, LEFT); // Alineación izquierda
    textSize(15);
    text(textos[1], 303, 453); // Muestra el texto en la parte inferior
  }

  // Dibuja los rectángulos solo si estamos en "a2.jpg"
  if (Empieza === 2) {
    fill(0, 255, 0); // Color verde para el rectángulo "Aceptar"
    rect(10, 40, 100, 40); // Rectángulo "Aceptar"

    fill(255, 0, 0); // Color rojo para el rectángulo "Rechazar"
    rect(600, 40, 100, 40); // Rectángulo "Rechazar"
  }
  if (Empieza === 3) {
    fill(0, 255, 0); // Color verde para el rectángulo "Aceptar"
    rect(10, 40, 100, 40); // Rectángulo "Aceptar"

    fill(255, 0, 0); // Color rojo para el rectángulo "Rechazar"
    rect(600, 40, 100, 40); // Rectángulo "Rechazar"
  }
  if (Empieza === 4) {
    fill(0);
    rect(218, 14, 190, 70); // Fondo del texto
    fill(250);
    textSize(25);
    textAlign(CENTER, CENTER); // Alineación centrada
    text(boton[0], 315, 50); // Centra el texto
  }
  if (Empieza === 5) {
    fill(0);
    rect(505, 280, 128, 70); // Fondo del texto
    fill(250);
    textSize(25);
    //textAlign(CENTER, CENTER); // Alineación centrada
    text(boton[1], 568, 315); // Centra el texto
  }
}

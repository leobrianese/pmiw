function mousePressed() {
  // Verifica si se hace clic en el rectángulo de "Comenzar" en "aa.jpg"
  if (Empieza === 0 && mouseX > 218 && mouseX < 408 && mouseY > 14 && mouseY < 84) {
    cambiarImagen(); // Cambia a la siguiente imagen
  }

  // Si no estamos en "aa.jpg", cambia de imagen al hacer clic en cualquier parte
  else if (Empieza !== 0) {
    cambiarImagen(); // Cambia a la siguiente imagen
  }

  // Verifica si se hace clic en el rectángulo "Aceptar"
  if (Empieza === 2 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80) {
    Empieza = 4; // Cambia a "a4.jpg"
  }

  // Verifica si se hace clic en el rectángulo "Rechazar"
  if (Empieza === 2 && mouseX > 600 && mouseX < 700 && mouseY > 40 && mouseY < 80) {
    irB3(); // Cambia a "b3.jpg"
  }

/*  if (Empieza === 5 && mouseX > 505 && mouseX < 635 && mouseY > 280 && mouseY < 350) {
    creditos();
  } else if (Empieza !== 5) {
    creditos();
  } */
}

function cambiarImagen() {
  Empieza = (Empieza + 1) % imagenes.length; // Cambia a la siguiente imagen
}

function irA3() {
  Empieza = 3; // Cambia al índice de la imagen "a3.jpg"
}

function irB3() {
  Empieza = 6; // Cambia al índice de la imagen "b3.jpg"
}

// Función para mostrar la imagen "aa.jpg"
function mostrarAA() {
  Empieza = 0; // Cambia a la imagen "aa.jpg"
}


function creditos() {
  Empieza = 16;
}

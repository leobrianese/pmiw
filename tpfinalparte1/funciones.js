function creditos() { // variable creditos
  Empieza = 16;
}

function continuar() {
  fill(0);
  rect(255, 20, 100, 30);
  fill(250);
  textSize(20);

  text(boton[0], 305, 35 );
}

function bot() {
  fill(0, 255, 0);
  rect(10, 40, 100, 40); // aceptar

  fill(255, 0, 0);
  rect(530, 40, 100, 40); // rechazar

  textSize(20);
  fill(0)

 
}

function texto() {
  textAlign(CENTER, LEFT);
  textSize(14);
  fill(0);
  rect(70, 405, 500, 55);
  textSize(13);
  fill(250);
}

function fin() {

  fill(0, 255, 0);
  rect(241, 15, 128, 60);
  fill(0);
  textSize(25);
  text(boton[1], 305, 45);
}


function mousePressed() {

  if (Empieza === 0 && mouseX > 218 && mouseX < 408 && mouseY > 14 && mouseY < 84) {
    if (!reproduciendo) { // funcion sonido
      sonido.play();
      reproduciendo = true;
    }
    Empieza = 1;
  }

  // pantalla "a1"
  else if (Empieza === 1 && mouseX >255 && mouseX <356 && mouseY >20 && mouseY < 50) {
    Empieza = 2; // decision aceptar o rechazar
  }

  // pantalla "a2" - aceptar
  else if (Empieza === 2 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80) {
    Empieza = 3; // Cambia a "a3.jpg"
  }

  // pantalla "a2" - rechazar
  else if (Empieza === 2 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80) {
    Empieza = 6; // decision elegir portal
  }

  // pantalla "a3" - ayudar
  else if (Empieza === 3 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80) { //boton
    Empieza = 5; // final ayudar
  }
  // pantalla "a3" - traicionar
  else if (Empieza === 3 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80) {

    Empieza = 4; // mata a todos
  } else if (Empieza === 4 && mouseX >255 && mouseX <356 && mouseY >20 && mouseY < 50) {
    Empieza = 6;
  } else if (Empieza === 6 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 85 ) {
    Empieza = 7 ;
  } else if (Empieza === 6 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 85 ) {
    Empieza = 9 ;
  } else if (Empieza === 9 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 8; //final realidad falsa
  } else if (Empieza === 9 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 10 ;
  } else if (Empieza === 10 && mouseX > 265 && mouseX < 356 && mouseY > 20 && mouseY < 50 ) {
    Empieza = 11 ;
  } else if (Empieza === 11 && mouseX > 10 && mouseX < 110 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 12 ;
  } else if (Empieza === 11 && mouseX > 530 && mouseX < 630 && mouseY > 40 && mouseY < 80 ) {
    Empieza = 14 ;
  } else if (Empieza === 12 && mouseX > 255 && mouseX < 356 && mouseY > 20 && mouseY < 52 ) {
    Empieza = 13 ; //final victoria
  } else if (Empieza === 14 && mouseX > 255 && mouseX < 356 && mouseY > 20 && mouseY < 52 ) {
    Empieza = 15 ; //final derrota
  }



  //pantallas finales

  else if (Empieza === 5 && mouseX > 505  && mouseX < 633  && mouseY > 280 && mouseY < 350 ) {  // final ayudar
    creditos();
  } else if (Empieza === 7 && mouseX > 240 && mouseX < 370 && mouseY > 15 && mouseY < 75 ) { // final casa
    creditos() ;
  } else if (Empieza === 8 && mouseX > 240 && mouseX < 370 && mouseY > 15 && mouseY < 75 ) { // final realidad falsa
    creditos() ;
  } else if (Empieza === 13 && mouseX > 240 && mouseX < 368 && mouseY > 15 && mouseY < 75 ) { //final victoria
    creditos();
  } else if (Empieza === 15 && mouseX > 240 && mouseX < 368 && mouseY > 15 && mouseY < 75 ) { //final derrota
    creditos();
  }
}

function keyPressed() { //reiniciar
  if (Empieza === 16) {
    if (key === 'r' || key === 'R') {
      Empieza = 0;
    }
  }
}

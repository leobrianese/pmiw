class Boton {
  constructor(bx, by, ancho, alto) {
    this.bx = bx;
    this.by = by;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujarBoton() {
    noFill();
    noStroke();
    rect(this.bx, this.by, this.ancho, this.alto);
  }

  presionarBoton() {
    return mouseX > this.bx && mouseX < this.bx + this.ancho && mouseY > this.by && mouseY < this.by + this.alto;
  }
}

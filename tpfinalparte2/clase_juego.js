class juego {
  constructor() {
    this.prot = new Protagonista(590, 300, 35, 40);
    this.Laser = [];
    for (let i = 0; i < 20; i++) {
      this.Laser[i] = new laser(i * 30, i - 30, 5, 200);
    }
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
  }



  reiniciar() {
    this.prot = new Protagonista(590, 300, 35, 40);
    this.Laser = [];
    for (let i = 0; i < 25; i++) {
      this.Laser[i] = new laser(i * 30, i - 30, 5, 200);
    }
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
  }

  dibujar() {
    this.prot.mostrar();
    for (let i = 0; i < 20; i++) {
      this.Laser[i].mostrarLaser();
      this.Laser[i].Cae();
    }
  }
  iniciarJuego() {
    if (this.sonido && !this.sonido.isPlaying()) {
      this.sonido.loop();
    }
  }

  moverProtagonista(tecla) {
    this.tec = tecla;
    if (this.tec === UP_ARROW) {
      this.prot.moverAr();
    } else if (this.tec === DOWN_ARROW) {
      this.prot.moverAb();
    } else if (this.tec === LEFT_ARROW) {
      this.prot.moverI();
    } else if (this.tec === RIGHT_ARROW) {
      this.prot.moverD();
    }
  }

  detectarColision() {
    for (let i = 0; i < 20; i++) {
      if (this.Laser[i].golpea) {
        if (this.prot.colisiona(this.Laser[i])) {
          this.Laser[i].golpea = false;
          background(0, 200, 25);
          this.Laser[i].ly = -this.Laser[i].lalto;
          this.golpes++;
        }
        if (this.golpes >= 3) {
          this.perdiste = true;
        }
        if (this.prot.x < 0) {
          this.ganaste = true;
        }
      }
    }
  }
}

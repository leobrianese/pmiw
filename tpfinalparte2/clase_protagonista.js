class Protagonista {
  
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;

  }

  mostrar() {
    stroke(1);
    fill(255, 236, 126);
    rect(this.x, this.y, this.ancho, this.alto);
  }

  moverAr() {
    this.y-= 20;
  }
  
  moverAb(){
    this.y+= 20;
  }
  
  moverD(){
    this.x += 20;
  }
  
  moverI(){
    this.x -=20;
  }
  
   colisiona(laser) {
    if (this.x + this.ancho >= laser.lx && this.x <= laser.lx + laser.lancho && this.y + this.alto >= laser.ly && this.y <= laser.ly + laser.lalto) {
      return true;
    }
    return false;
  }
}

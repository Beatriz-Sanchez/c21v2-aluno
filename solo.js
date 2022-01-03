class Solo {
  constructor(x, y, largura, altura) {
    let options = {
      isStatic:true
    };
    
    this.corpo = Bodies.rectangle(x, y, largura, altura, options);
    this.largura = largura;
    this.altura = altura;
    World.add(world, this.corpo);
  }

  mostrar() {
    var pos = this.corpo.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.largura, this.altura);
    pop();
  }
  
}



let nPelotas = 100;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0 ; i < nPelotas;i++){
    pelotas[i] = new RandomWalker(i);
  }
}

function draw() {
  for(let i = 0 ; i < nPelotas;i++){
    pelotas[i].update();
    pelotas[i].display();
  }
}
//___________Classes___________


//___________Random Walker___________
class RandomWalker{
  constructor(_nombre){
    this.red = random(130, 250);
    this.green = random (50,255);
    this.blue = random (100, 50);

  this.pos= createVector(width/2, height/2);
    this.speed = createVector(random(4,10), random (4,10));
    this.diametro = random (10,50);
    print('hola soy la pelota' + this.nombre);

  }
  update(){
    this.pos.add(this.speed);
  }
  display(){
    fill(this.red, this.green, this.blue)
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
  }
}
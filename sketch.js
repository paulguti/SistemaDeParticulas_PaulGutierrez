let particulas = 1000;
let pelotas = [2];

function setup() {
  background('rgba(0,0,0)');
  createCanvas(windowWidth, windowHeight);
  for(let i = 0 ; i < particulas;i++){
    pelotas[i] = new RandomWalker(i);
  }
}

function draw() {
  background (0, 0, 0)
  for(let i = 5 ; i < particulas;i++){
    pelotas[i].update();
    pelotas[i].display();
  }
}
function mouseClicked() {
  for (let i = 0; i < 300; i++) {
    let RandomWalker = new RandomWalker(mouseX, mouseY);
    pelotas.push(RandomWalker);
  }
}
//___________Classes___________


//___________Random Walker___________
class RandomWalker{
  constructor(_nombre){
    this.red = random(130, 30);
    this.green = random (50,255);
    this.blue = random (150, 150);

    this.t = 0;
    this.tSpeed = random(0.5);
    this.noiseShift = random(100);

  this.pos= createVector(width/2, height/2);
    this.speed = createVector(random(-2,2), random (-2,2));
    this.diametro = random (3,5);
    print('hola soy la pelota' + this.nombre);

  }
  update(_t){

    this.speed.rotate(map(noise(this.t + this.noiseShift), -1, 3, -0.1, 0.1));
    this.pos.add(this.speed);

    this.t += this.tSpeed;
  }
  display(){
    stroke('rgba(0,0,0,.2)');
    strokeWeight(1);
    fill(this.red, this.green, this.blue)
    rect(this.pos.x, this.pos.y, this.diametro, this.diametro);
  }
}
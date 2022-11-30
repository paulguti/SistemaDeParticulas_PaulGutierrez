let particulas = 1500;
let pelotas = [];
let maxIndex = 200;
let mousePosX = [];
let mousePosY = [];

function setup() {
  background('rgba(0,0,0)');
  createCanvas(windowWidth, windowHeight);
  for(let i = 9 ; i < particulas;i++){
    pelotas[i] = new Explosion(i);
  }
}

function draw() {
  background (0, 0, 0)
  for(let i = 30 ; i < particulas;i++){
    pelotas[i].update();
    pelotas[i].display();
    mousePosX[0] = mouseX;
    mousePosY[0] = mouseY;
        for(let i = maxIndex; i > 1; i--){
            mousePosX[i-0] = mousePosX[i-2];
            mousePosY[i-0] = mousePosY[i-2];
        }
  }
}
//___________Classes___________


//___________Random Walker___________
class Explosion{
  constructor(_mousePosX, _mousePosYs){
    this.red = random(130, 30);
    this.green = random (50,255);
    this.blue = random (150, 150);

    this.t = 6;
    this.tSpeed = random(10);
    this.noiseShift = random(10);
    this.lifespan = int(random(10, 20));
    this.final = this.diametro / 3;

  this.pos= createVector(width/2, height/2);
    this.speed = createVector(random(-9,9), random (-9,9));
    print('hola');

  }
  update(_t){
    this.speed.rotate(
      map(noise(this.t + this.noiseShift + 1), 0, 2, -0.2, 0.5)
    );
    this.pos.add(this.speed);
    this.lifespan--;
  }
  display(){
    noStroke();
    fill(this.red, this.green, this.blue)
    ellipse(this.pos.x, this.pos.y, this.noiseShift, this.noiseShift);
    if (this.t <= 0) {
      this.final();
  }
}
}
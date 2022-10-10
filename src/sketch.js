let canvas
let mic
function windowResized() {

  resizeCanvas(windowWidth*2, windowHeight*2)
  console.log('funciona')
}
function setup() {
  canvas = createCanvas(windowWidth*2, windowHeight*2);
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  background(121, 121, 192);
  // mic = new p5.AudioIn()
  // mic.start()
}
// function mousePressed(){
//   clear()
// }
function draw() {
  if (mouseIsPressed) {
    stroke(255,140,0)
    line(pmouseX, pmouseY, mouseX, mouseY)
    strokeWeight(12)
  }
  //let vol = mic.getLevel()
  //ellipse(width/2, height/2, vol*width)
}

let canvas
let mic
function windowResized() {

  resizeCanvas(windowWidth, windowHeight)
  console.log('funciona')
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0)
  canvas.style('z-index', '-1')
  background(235, 152, 78);
  // mic = new p5.AudioIn()
  // mic.start()
}
// function mousePressed(){
//   clear()
// }
function draw() {
  if (mouseIsPressed) {
    stroke(125, 60, 152)
    line(pmouseX, pmouseY, mouseX, mouseY)
    strokeWeight(12)
  }
  //let vol = mic.getLevel()
  //ellipse(width/2, height/2, vol*width)
}

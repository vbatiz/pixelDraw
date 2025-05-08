
let ancho = 20
let alto = 20
let cols, rengs
let miSelector
let c


function setup() {
 // put setup code here
 createCanvas(740,740)
 cols = 32
 rengs = 32
 miSelector = createColorPicker()
 miSelector.position((cols+1)*ancho, 10)
 background(255)
}

function draw() {
  // put drawing code here

  
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rengs; j++){
      stroke(0)
      noFill()
      rect(i*ancho, j*alto, ancho, alto)
    }
  }
}

function mouseClicked() {

  let x = Math.floor(mouseX/ancho)
  let y = Math.floor(mouseY/alto)
  if (x<cols && y<rengs) {
    c = miSelector.value()
    fill(c)
    noStroke()
    rect(x*ancho, y*alto, ancho, alto)
  }
}

function mouseDragged() {
  let x = Math.floor(mouseX/ancho)
  let y = Math.floor(mouseY/alto)
  if (x<cols && y<rengs) {
    c = miSelector.value()
    fill(c)
    noStroke()
    rect(x*ancho, y*alto, ancho, alto)
  }
}
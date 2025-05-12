let ancho=20
let alto=20
let cols,rengs
let SelectorColor
let botonLimpiar
let botonGuardar
let color


function setup() {
    // put setup code here
    createCanvas(740,740)
    cols=32
    rengs=32
    SelectorColor=createColorPicker()
    SelectorColor.position((cols+1)*ancho,10)

    botonLimpiar = createButton('Limpiar')
    botonLimpiar.position((cols+1)*ancho, 50)
    botonLimpiar.mousePressed(limpiarCanvas)

    botonGuardar = createButton('Guardar')
    botonGuardar.position((cols+1)*ancho, 90)
    botonGuardar.mousePressed(guardaImagen)

    background(255)
}

function guardaImagen(){
  saveCanvas('mi dibujo', 'png')
}

function limpiarCanvas(){
  background(255)
}

function draw() {
    // put drawing code here
    for(let i=0;i<cols;i++){
      for(let j=0;j<rengs;j++){
        stroke(0)
        noFill()
        rect(i*ancho,j*ancho,ancho,alto)
      }
    }
}

function mouseClicked(){
  let x=Math.floor(mouseX/ancho)
  let y=Math.floor(mouseY/alto)
  if(x<cols && y<rengs){
    color=SelectorColor.value()
    fill(color)
    noStroke()
    rect(x*ancho,y*alto,ancho,alto)
  }
}


function mouseDragged(){
  let x=Math.floor(mouseX/ancho)
  let y=Math.floor(mouseY/alto)
  if(x<cols && y<rengs){
    color=SelectorColor.value()
    fill(color)
    noStroke()
    rect(x*ancho,y*alto,ancho,alto)
  }
}
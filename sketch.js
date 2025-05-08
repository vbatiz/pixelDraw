let ancho=20
let alto=20
let cols,rengs
let SelectorColor
let color


function setup() {
    // put setup code here
    createCanvas(740,740)
    cols=32
    rengs=32
    SelectorColor=createColorPicker()
    SelectorColor.position((cols+1)*ancho,10)
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
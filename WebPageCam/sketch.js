function setup() {
  scale(1)
  createCanvas(windowWidth, windowHeight);
  SetCamera1();
  SetCamera2();
  print(windowWidth)
}

function draw() {
  background(135, 82, 48);
  GetCamera1();
  GetCamera2();
  
  if (mouseIsPressed){
    fill(135,82,48)
    rect(150, 70, 448, 336) 
  }
}


function SetCamera1(){
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function SetCamera2(){
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function GetCamera1(){
  image(capture, 150, 70, 448, 336);
}

function GetCamera2(){
  image(capture, 995, 70, 448, 336);
 // Default image(capture, 500, 50, 320, 240);
}
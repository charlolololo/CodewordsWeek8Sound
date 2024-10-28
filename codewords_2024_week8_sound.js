var song, mic, speed, volume;
function preload() {
  song=loadSound("data/Lovely_Piano_Song.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);
  getAudioContext().suspend();
  // to give permission
  mic = new p5.AudioIn();
  mic.start();
  
}


function draw() {
  background(255, 255, 0);
  volume = mic.getLevel();
  circleDiameter = map(volume, 0.0, 1.0, 50, 500);
  //let circleDiameter = map (mouseY, 0, height/2, 1, 400);
  circle(mouseX, mouseY, circleDiameter);
  
  //volume = map (mouseX, 0, width, 0.0, 1.0);
  //speed = map (mouseX, 0, height, 0.01, 10);
  //song.amp(volume);
  //song.rate(speed);

}

function mousePressed() {
  if (getAudioContext().state !=='running'){
    getAudioContext().resume();
    song.play();
    song.loop();
  }
  
}

function keyTyped() {
  if (key === " ") {
  song.stop();}
  //keyPressed = doesn't matter what you press
  else {
    song.play();
  }
}

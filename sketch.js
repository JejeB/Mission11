var game,state,music,vara,varnu,mask,title;
function preload(){
music = loadSound('img/Space_Between_-_V2.mp3');
mask = loadSound('sound/mask_Master.wav')

  title= new Title()
}
// Preload function before the game start
function setup() {

createCanvas(1280, 720);
  state="title"
  game= new Game()
vara=true
varnu=true
}

// Loop program
function draw() {

  if (state==="game") {
    if (game.end==="lost") {
      state="gameOver"
    }
    if (game.end==="win") {
      state="win"
    }
    game.show()
  }else if (state==="gameOver") {
    background(0)
    textSize(40)
    fill(255,0,0)
    text("GAME OVER",500,100)
  }else if (state==="win") {
    background(0)
    textSize(40)
    fill(100,250,255)
    text("Mission Succed",500,100)
    fill(255)

    text("Captor installed : "+game.getAstro().lieuxdecouvert,100,210+50)
  }else if (state==="title") {
    title.show()
  }

  if (state==="game" && mouseIsPressed) {
    game.mouse()
  }
}

function keyPressed(){
  if (state==="gameOver" || state==="win") {
    game = new Game()
    state="title"
  }
}
//If mouse is pressed
function mousePressed() {

  if (state==="game") {
      game.Click()
  }
  if (state==="title") {
    var j=title.Click()
    if (j==="a"||j==="q") {
      if (vara) {
      music.setVolume(0.05)
      music.play()
      music.loop()
      mask.setVolume(0.2)
      mask.play()
      mask.loop()
      vara=false
    }
      state="game"
      game.setKey(j)
    }
  }

}

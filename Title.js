class Title {
  constructor() {
    this.back=loadImage('img/title.png')
    this.LM=loadImage('img/LM.png')
    this.newFont = loadFont('img/Robofan.otf');
    this.playH=false
    this.aze=false
    this.qwe=false
    this.key="a"
  }

  show(){
    fill(0)
    textFont(this.newFont)
    image(this.back,0,0)
    textSize(150)
    strokeWeight(10)
    stroke(255)
    text("MISSION 11",100,300)
    textSize(120)
    if (this.playH) {
      fill(255)
      noStroke()
    }
    text("PLAY",200,470)

    stroke(255)
    textSize(40)
    strokeWeight(6)
    fill(0)
    if (this.aze) {
      fill(255)
      noStroke()
    }
    if (this.key==="a") {
      fill(0,190,10)
    }
    text("AZERTY",100,600)

    stroke(255)
    textSize(40)
    strokeWeight(6)
    fill(0)
    if (this.qwe) {
      fill(255)
      noStroke()
    }
    if (this.key==="q") {
    fill(0,190,10)
    }
    text("QWERTY",500,600)
    //Hoover
    if (mouseX>200 && mouseX<510 && mouseY>350 && mouseY<470) {
      this.playH=true
    }else {
      this.playH=false
    }
    if (mouseX>100 && mouseX<300 && mouseY>560 && mouseY<600) {
      this.aze=true
    }else {
      this.aze=false
    }
    if (mouseX>500 && mouseX<700 && mouseY>560 && mouseY<700) {
      this.qwe=true
    }else {
      this.qwe=false
    }
  }
  Click(){
    if (this.aze) {
      this.key="a"
    }
    if (this.qwe) {
      this.key="q"
    }
    if (this.playH) {
      return this.key
    }

    return false
  }
}

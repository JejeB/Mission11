class HUD {
  constructor() {
    this.mine=loadImage('img/moonRock.png')
    this.oxy=loadImage('img/oxybar.png')
    this.oxyPack=loadImage('img/oxyPack.png')
    this.captor=loadImage('img/Captor.png')
    this.oxyH=false
    this.captorH=false
  }
  show(astro,x,y){
    //oxyPack
    noFill()
    stroke(0,255,0)
    //fill(0,0,255)
    if (this.oxyH) {
      rect(1150,550,60,60,10)
    }
    if (this.captorH) {
      rect(1150,610,60,60,10)
    }
    noStroke()
    image(this.oxyPack,1150,550)
    fill(0)
    textSize(19)
    text("x"+astro.oxyPack,1245,600)
    //captor


    image(this.captor,1150,610)
    fill(0)
    textSize(19)
    text("x"+astro.captor,1245,660)
    //Minerai
    fill(250,250,0)
    image(this.mine,1150,430)
    fill(0)
    textSize(19)
    text("x"+astro.getminerai().length,1245,480)
    //Oxygen bar
    fill(180,180,255)
    rect(1200,100,20,250)
    fill(200)
    var size =(astro.getMaxOxy()-astro.getOxy())*(250/astro.getMaxOxy())
    rect(1200,100,20,size)
    image(this.oxy,1185,75)
    //TestHoover
    if (mouseX>1150 && mouseX<1210 && mouseY>550 && mouseY<610) {//Oxy
      this.oxyH=true
    }else {
      this.oxyH=false
    }
    if (mouseX>1150 && mouseX<1210 && mouseY>610 && mouseY<670) {//capor
      this.captorH=true
    }else {
      this.captorH=false
    }

  }
  Click(astro){

    if (this.oxyH) {
      if (astro.oxyPack>0) {
        console.log("oxy");
        astro.IncOxyPack(-1)
          astro.oxypack()
      }

    }if (this.captorH) {
      if (astro.captor>0) {
        if (astro.Disco()) {
            astro.IncOxyCaptor(-1)
        }

      }
    }
  }


  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+210
  }

}

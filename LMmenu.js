class LMmenu {
  constructor(chest) {
    this.open=false
    this.buTab=[]
    this.cango=true
    this.buTab.push(new MyButton(1060,100,40,40,"x","quitter"))
    this.buTab.push(new MyButton(300,300,100,50,"Fix the ship","fix"))
    this.buTab.push(new MyButton(300,370,100,50,"Pressure pack","oxy"))
    this.buTab.push(new MyButton(300,440,100,50,"Captor","captor"))
    this.buTab.push(new MyButton(970,600,100,50,"take off","deco"))

    this.orange=loadImage('img/minerai/orange.png')
    this.red=loadImage('img/minerai/red.png')
    this.yellow=loadImage('img/minerai/yellow.png')
    this.green=loadImage('img/minerai/green.png')
    this.violet=loadImage('img/minerai/violet.png')
      this.chest=chest
      this.fixed=false
  }
  show(){

    //console.log("fiohioejvize   "  +this.open );
    if (this.open) {
      fill(255)
      stroke(0)
      rect(200,100,900,600,10)

      noStroke()
      for (var i = 0; i < this.buTab.length; i++) {
        if (this.buTab[i].getName()==="deco" && this.fixed!=true) {
        }else{
          this.buTab[i].show()
        }

      }
      textSize(50)
        text("Workshop",500,170)
        textSize(16)
      //Fix
      text("Need : ",430,330)
      image(this.orange,490,300)
      text("20",510,360)
      image(this.red,550,300)
      text("10",580,360)
      image(this.yellow,610,300)
      text("10",640,360)
      image(this.violet,670,300)
      text("3",700,360)

      //oxyPack
      text("Need : ",430,400)
      image(this.orange,490,370)
      text("5",510,430)
      image(this.red,550,370)
      text("3",580,430)
      //captor
      text("Need : ",430,470)
      image(this.orange,490,440)
      text("5",510,500)
      image(this.red,550,440)
      text("2",580,500)
      image(this.green,610,440)
      text("1",640,500)
      //chest
      var xc=300
      var yc=600
      var tab=this.chest.getTab()
      for (var i = 0; i < tab.length; i++) {
        var display
        if (tab[i][0]==="orange") {
          display=this.orange
        }else if (tab[i][0]==="red") {
          display=this.red
        }else if (tab[i][0]==="yellow") {
          display=this.yellow
        }else if (tab[i][0]==="green") {
          display=this.green
        }else if (tab[i][0]==="violet") {
          display=this.violet
        }
        image(display,50+xc+i*70,yc+10)
        text(tab[i][1],70+xc+i*70,yc+75)
      }

    }

  }


  mouse(astro){
    for (var j = 0; j < this.buTab.length; j++) {

      if (this.buTab[j].getHoover()) {


        if (this.buTab[j].getName()==="quitter") {

          this.open=false
          this.buTab[j].setHoover(false)
        }
        else if (this.buTab[j].getName()==="fix") {
          this.fixed=this.build([["orange",10],["red",5],["yellow",5],["violet",3]])
        }
        else if (this.buTab[j].getName()==="oxy") {
          if (this.build([["red",3],["orange",5]])) {
            astro.IncOxyPack(1)
          }
        }
        else if (this.buTab[j].getName()==="captor") {

          if (this.build([["red",2],["orange",5],["green",1]])) {
            astro.IncOxyCaptor(1)
          }
        }
        else if (this.buTab[j].getName()==="deco") {
            if (this.fixed) {
              console.log("gogogo");
              astro.setIsDead("win")
            }
          }




      }
    }

  }


build(ask){
  var mine= this.chest.getTab()
  var verif=0

  for (var i = 0; i < mine.length; i++) {
    for (var r = 0; r < ask.length; r++) {
      if (mine[i][0]===ask[r][0] && mine[i][1]>=ask[r][1]) {
        verif=verif+1
      }
    }
  }
  if (verif==ask.length) {
    for (var i = 0; i < mine.length; i++) {
      for (var r = 0; r < ask.length; r++) {
        if (mine[i][0]===ask[r][0]) {
          mine[i][1]=mine[i][1]-ask[r][1]
        }
      }
    }
    this.chest.settab(mine)
    return true
  }else {
    console.log("pas assez");
    return false
  }

}
  setOpen(o){this.open=o}
  getOpen(o){return this.open}
}

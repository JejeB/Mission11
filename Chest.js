class Chest extends PercepectiveObject {
  constructor(x,y,l,h,name,img,imgH,c,colli) {
      super(x,y,l,h,name,img,imgH,c,colli)
      this.tab=[]
      this.orange=loadImage('img/minerai/orange.png')
      this.red=loadImage('img/minerai/red.png')
      this.yellow=loadImage('img/minerai/yellow.png')
      this.green=loadImage('img/minerai/green.png')
      this.violet=loadImage('img/minerai/violet.png')
      this.newFont = loadFont('img/Robofan.otf');
  }

  showTop(x,y){

  if (y+2<this.y+this.decalage) {
  this.showin(x,y)}

  if (this.touchable) {

    //What in chest
    var xc=3+this.x+this.decalX(x)
    var yc=this.y+this.decalY(y)-175
    fill(200)
    stroke(0)
    rect(xc,yc,this.tab.length*50+150,105,3)
    noStroke()
    fill(0)
    textFont(this.newFont)
    textSize(16)
    text("Discover : "+this.tab.length+"/5",5+xc,yc+100)
    for (var i = 0; i < this.tab.length; i++) {
      var display
      if (this.tab[i][0]==="orange") {
        display=this.orange
      }else if (this.tab[i][0]==="red") {
        display=this.red
      }else if (this.tab[i][0]==="yellow") {
        display=this.yellow
      }else if (this.tab[i][0]==="green") {
        display=this.green
      }else if (this.tab[i][0]==="violet") {
        display=this.violet
      }
      image(display,50+xc+i*70,yc+10)
      text(this.tab[i][1],70+xc+i*70,yc+75)
    }
  }
}

settab(tab){this.tab=tab}
getTab(){return this.tab}
}

class LM extends PercepectiveObject {
  constructor(x,y,l,h,name,img,imgH,c,colli,chest) {
    super(x,y,l,h,name,img,imgH,c,colli)
    this.hooverImg=loadImage('img/LM-Hoover.png')
    this.menu=new LMmenu(chest)
  }
  showin(x,y){
    this.mouseON(x,y)
    var display
    if (this.touchable) {
      display=this.hooverImg
    }else {
      display=this.img
    }
      image(display,this.x+this.decalX(x),this.y+this.decalY(y)-this.decalage)

  }
  showTop(x,y){
  if (y-10<this.y) {
  this.showin(x,y)}

  this.menu.show()
  }

  Click(astro){

    if (this.hoover && this.touchable ) {

      if (this.menu.getOpen()==false) {
        this.menu.setOpen(true)

      }


    }
    if (this.menu.getOpen()) {

          this.menu.mouse(astro)
    }
  
  }

}

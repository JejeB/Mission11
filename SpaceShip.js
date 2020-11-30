class SpaceShip extends PercepectiveObject {
  constructor(x,y,l,h,name,img,imgH,c,colli) {
    super(x,y,l,h,name,img,imgH,c,colli)
  }
  mouse(astro){
    if (this.hoover && this.touchable) {

      astro.setIsDead("win")
      
    }
  }
  showin(x,y){

    circle(this.relatex,this.relatey,5)
    fill(255,0,0)
    circle(this.relatex,this.relatey+this.h,5)
    fill(this.c)
    if (this.touchable) {
      stroke(255)
      if (this.hoover) {
        stroke(255,255,0)
      }
      strokeWeight(5)

    }
    rect(this.x+this.decalX(x),this.y+this.decalY(y)-this.decalage,this.l,this.h)
    noStroke()
    //image(this.img,this.relatex ,this.relatey-this.decalage);
  }
}

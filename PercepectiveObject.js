class PercepectiveObject {
  //
  constructor(x,y,l,h,name,img,imgH,c,colli) {
    this.h=h; this.l=l
    this.x=x; this.y=y
    this.relatex=0
    this.relatey=0
    this.c=c
    this.name=name;this.img=img;
    this.img = loadImage(img);
    this.decalage=imgH-h
    this.touchable=false
    this.hoover=false
    this.colli=colli
    this.imgH=imgH

  }
  mouse(astro){

  }
  mouseON(x,y){
    if (mouseX>this.x+this.decalX(x)&& mouseX<this.x+this.decalX(x)+this.l && mouseY>this.y+this.decalY(y)-this.decalage && mouseY<this.y+this.decalY(y)+this.h) {

      this.hoover=true
    }else {
      this.hoover=false
    }
  }
  showDown(x,y){
    this.relatex=this.x+this.decalX(x)
    this.relatey=this.y+this.decalY(y)
    this.showin(x,y)
  }
  showin(x,y){
    this.mouseON(x,y)
    image(this.img,this.x+this.decalX(x),this.y+this.decalY(y)-this.decalage)
    if (this.touchable) {
      stroke(255)
      if (this.hoover) {
        stroke(0,255,0)
      }}
      strokeWeight(4)
      noFill()
    rect(this.x+this.decalX(x),this.y+this.decalY(y)-this.decalage,this.l,this.imgH,5)
    noStroke()
  }
  showTop(x,y){
  if (y-10<this.y) {
  this.showin(x,y)}
  }

  //Getter setter
  getName(){return this.name;}
  getxmin(){return this.x;}
  getxmax(){return this.x+this.l;}
  getymin(){return this.y;}
  getymax(){return this.y+this.h;}
  getCollision(){return this.colli;}
  setIsTouchable(t){this.touchable=t;}
  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+360
  }
}

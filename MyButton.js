class MyButton {
  constructor(x,y,l,h,tet,name) {
    this.x=x;this.y=y;this.l=l;this.h=h;
    this.tet=tet;this.name=name;this.hoover=false
  }
  show(){
    this.mouseON()
    if(this.hoover){fill(200)}else {fill(255)}
    stroke(0)
    rect(this.x,this.y,this.l,this.h)
    noStroke()
    fill(0)
    textSize(14)
    text(this.tet,this.x+3,this.y+15)
  }
  mouseON(){
    if (mouseX>this.x && mouseX<this.x+this.l && mouseY>this.y && mouseY<this.y+this.h) {
        this.hoover=true
    }else {
      this.hoover=false
    }
  }

  getHoover(){return this.hoover}
  setHoover(h){this.hoover=h}
  getName(){return this.name}

}

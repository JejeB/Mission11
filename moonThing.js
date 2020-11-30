class Moonthing {
  constructor(x,y) {
    var x,y,c;
    this.y=y;
    this.x=x;
    this.c= random([1, 2, 3, 0])
  }
  show(x,y){
    if (this.c==0) {
        fill(0,0,0)
    }
    if (this.c==1) {
        fill(255,255,255)
    }
    if (this.c==2) {
        fill(98,120,0)
    }
    if (this.c==3) {
        fill(20,200,120)
    }

  rect(this.x-x+640,this.y-y+360,25,25)
  }
}

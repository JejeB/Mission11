class ParcelTransition {
  constructor(xmin,xmax,ymin,ymax,s) {
    this.xmax=xmax; this.xmin=xmin; this.ymin = ymin; this.ymax=ymax;
    this.s=s
  }
  show(x,y){
      if (this.s==="N") {

      }
        fill(100)
        rect(this.xmin+this.decalX(x),this.ymin+this.decalY(y),1280,720)

  }
}

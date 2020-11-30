class MoonSurface {
  constructor(xmin,xmax,ymin,ymax) {
      this.xmax=xmax; this.xmin=xmin; this.ymin = ymin; this.ymax=ymax;
      this.ObjectList=[]
      for (var i = 0; i < random(4); i++) {
        this.ObjectList.push(new Minerai(random(xmin+100,xmax-100),random(ymin+100,ymax-100),100,100,'box','img/minerai.png',100,color(100,110,255),false,false))
      }
      this.name="moonSurf"
        this.texture=loadImage('img/groundText.png')
        this.disco=false
  }
  addObject(x,y){
    this.ObjectList.push(new PercepectiveObject(x,y,0,0,"captor","img/Captor.png",0,color(255,0,5),false,false))
    console.log("Oui oui");
  }
  show(x,y,score){
    fill(200)
      rect(this.xmin+this.decalX(x),this.ymin+this.decalY(y),1280,720)
      image(this.texture,this.xmin+this.decalX(x),this.ymin+this.decalY(y))
      for (var i = 0; i < this.ObjectList.length; i++) {
        this.ObjectList[i].showDown(x,y)
      }
  }
  mouse(astro){
    for (var i = 0; i < this.ObjectList.length; i++) {
      this.ObjectList[i].mouse(astro)
    }
  }
  showTop(){

  }
  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+360
  }
    getObjectList(){return this.ObjectList}
    getDisco(){return this.disco}
    setDisco(d){this.disco=d}
}

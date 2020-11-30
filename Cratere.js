class Cratere {
  constructor(xmin,xmax,ymin,ymax,tabOuv,c) {
    this.name="crat"
    this.texture=loadImage('img/crat.png')
      this.xmax=xmax; this.xmin=xmin; this.ymin = ymin; this.ymax=ymax;
      this.tab=tabOuv;
      this.c=c
        this.ObjectList=[]

        for (var i = 0; i < random(10); i++) {
          this.ObjectList.push(new Minerai(random(xmin+100,xmax-100),random(ymin+100,ymax-100),50,50,'box','img/minerai.png',50,color(100,110,255),false,true))
        }
        this.disco=false
  }
  addObject(x,y){
    this.ObjectList.push(new PercepectiveObject(x,y,60,60,"captor","img/Captor.png",50,color(255,0,5),false,false))
    }
  getObjectList(){return this.ObjectList;}
  getTab(){return this.tab}
  show(x,y,score){
image(this.texture,this.xmin+this.decalX(x),this.ymin+this.decalY(y))


      for (var i = 0; i < this.ObjectList.length; i++) {
        this.ObjectList[i].showDown(x,y)
      }
  }
  showTop(){

  }
  mouse(astro){
    for (var i = 0; i < this.ObjectList.length; i++) {
      this.ObjectList[i].mouse(astro)
    }
  }
  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+360
  }
  getDisco(){return this.disco}
  setDisco(d){this.disco=d}
}

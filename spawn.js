class Spawn {
  constructor(xmin,xmax,ymin,ymax) {
      this.xmax=xmax; this.xmin=xmin; this.ymin = ymin; this.ymax=ymax;
      this.ObjectList=[]
      this.ObjectList.push(new OxygenRealoader(47,219,103,41,'Oxygene.png','img/Oxygene.png',218,color(100,110,255),true))
      //this.ObjectList.push(new SpaceShip(-100,200,300,70,'box','box.jpg',100,color(50,155,155),true))
      this.chest=new Chest(-180,-85,188,40,'Ches','img/container.png',101,color(100,110,255),true)
      this.ObjectList.push(this.chest)
      this.ObjectList.push(new DetecteurMinerais(-300,-80,119,40,'Detec','img/analyseur.png',147,color(100,110,255),true,this.chest))
      this.ObjectList.push(new PercepectiveObject(-534,60,122,117,'Detec','img/battrery.png',234,color(100,110,255),true))
      this.ObjectList.push(new PercepectiveObject(-491,216,67,67,'Detec','img/adaptattor.png',67,color(100,110,255),true))
      this.ObjectList.push(new PercepectiveObject(-405,190,205,100,'Detec','img/panneauSolaire.png',112,color(100,110,255),true))
      this.ObjectList.push(new LM(187,80,396,200,"LM",'img/LM.png',396,color(100,110,255),true,this.chest))

      this.name="spwan"
      this.texture=loadImage('img/groundText.png')
      this.ground=loadImage('img/spawnGround.png')
      this.disco=false
  }
  show(x,y,score){
    //score.setTab(this.chest.getTab())
    image(this.texture,this.xmin+this.decalX(x),this.ymin+this.decalY(y))
    //image(this.ground,this.xmin+this.decalX(x),this.ymin+this.decalY(y))
    for (var i = 0; i < this.ObjectList.length; i++) {
      this.ObjectList[i].showDown(x,y)
    }
  }
  showTop(x,y){
    for (var i = 0; i < this.ObjectList.length; i++) {
      this.ObjectList[i].showTop(x,y)
    }
  }
  mouse(astro){
    for (var i = 0; i < this.ObjectList.length; i++) {
      this.ObjectList[i].mouse(astro)
    }
  }
  addObject(x,y){}
  Click(astro){

    for (var i = 0; i < this.ObjectList.length; i++) {

      if (this.ObjectList[i].getName()=="LM") {
        this.ObjectList[i].Click(astro)

      }
    }
  }
  getObjectList(){return this.ObjectList}
  getTab(){return this.ObjectList[2].getTab()}
  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+360
  }
  getDisco(){return this.disco}
  setDisco(d){this.disco=d}
}

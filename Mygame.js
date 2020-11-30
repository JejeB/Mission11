class Game {
  constructor() {

  this.p = new Map()
  this.astro =new Astro(this.p.getActual())
  this.db=1;
  this.cm= new CollisionManager()
  this.end="no"
  this.hud= new HUD ()
  this.score= new Score()
  this.radio=new Radio()
  }
  setKey(k){
    this.astro.setKey(k)
  }
  show(){

    //this.score.setTab(this.p.getTab())
    this.astro.update()
    this.astro.setParcel(this.p.getActual())
    this.cm.manage(this.astro,this.p.getActual().getType().getObjectList())
    //Background
    background(200);
    this.p.show(this.astro.getX(),this.astro.getY(),this.db,this.score);
    //Character
    this.astro.show(this.astro.getX(),this.astro.getY())
    //Top
    this.p.showTop(this.astro.getX(),this.astro.getY())
    //HUD
    this.hud.show(this.astro,this.astro.getX(),this.astro.getY())
    //Radio
    this.radio.show()
     //line(630,370,-x+640,-y+360)
     
     //
     if (this.astro.getisDead()==="Yes") {
       this.end="lost"
     }
     if(this.astro.getisDead()==="win"){

       this.end="win"
     }
     if (this.astro.getisDead()==="NotYet" ) {
       fill(255,0,0,127);
      rect(0,0,1280,720);
     }
          if (keyIsDown(114)) {
            this.db=1-this.db;
          }
  }
  mouse(){
    this.p.mouse(this.astro)

  }
  Click(){

    this.radio.mouse()
    this.p.Click(this.astro)
    this.hud.Click(this.astro)
  }
  getEnd(){return this.end}
  getAstro(){return this.astro}
  getScore(){return this.score}
}

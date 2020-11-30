class Astro {
  constructor(p,key) {
    if (key==="a") {
      this.key=[81,68,90,83]
    }else {
      this.key=[65,68,87,83]
    }
    //Animation
    this.hidle = loadImage('animWalk/pause.png');
    this.Rhidle = loadImage('animWalk/Rpause.png');
    this.state="hidle" ;this.side="l"
    this.walkAnim=[];this.walkRAnim=[]; this.loadAnimation();
    this.img=this.hidle
    this.walkframe=1
    this.chrono=0
    //Position
    this.x=0;
    this.y=10
    this.speed=7
    this.vx=0
    this.vy=0
    //Oxygen
    this.oxygenc=0
    this.oxygen=100
    this.isDead="No"
    this.heal=0
    this.maxOxy=100
    //Objects
    this.minerais=[]
    this.parcel=p
    this.oxyPack=0
    this.captor=0
    this.lieuxdecouvert=0
  }
  setKey(key){
    if (key==="a") {
      this.key=[81,68,90,83]
    }else {
      this.key=[65,68,87,83]
    }
  }
  setParcel(p){this.parcel=p}
  oxypack(){
    this.oxygen=this.oxygen+25
    if (this.oxygen>this.maxOxy) {
    this.oxygen=this.maxOxy
  }
}
  healO(){this.heal=1}
  healOxygen(){


      this.oxygen=this.oxygen+1
      if (this.oxygen>this.maxOxy) {
        this.oxygen=this.maxOxy
        this.heal=0
      }


  }

  lostOxygen(){
    this.oxygenc=this.oxygenc+1
    if (this.oxygenc==70) {
      this.oxygen=this.oxygen-1
      this.oxygenc=0
    }
  }
  testDead(){
    if (this.oxygen<=0 && this.oxygen>-5) {

      this.isDead="NotYet"
    }else if (this.oxygen<=-5) {
      this.isDead="Yes"
    }else{
      if (this.isDead!="win") {
        this.isDead="No"
      }

    }
  }
  update(){
    if (this.parcel.getIsCrat()) {
      this.speed=4
    }else {
      this.speed=7
    }
  this.lostOxygen()
    this.walk()
    this.testDead()
  }
  walk(){
    if (keyIsDown(this.key[0])) {
       this.x -= this.speed;
       this.vx=-this.speed
       this.vy=0
       this.setSide("r")
       this.setState("walk")
     }else if (keyIsDown(this.key[1])) {
       this.x += this.speed;
       this.vx=this.speed
       this.vy=0
       this.setSide("l")
       this.setState("walk")
     } else if (keyIsDown(this.key[2])) {
       this.y -= this.speed;
       this.vy=-this.speed
       this.vx=0
       this.setState("walk")
     } else if (keyIsDown(this.key[3])) {
       this.y += this.speed;
       this.vy=this.speed
       this.vx=0
       this.setState("walk")
     }else{
       this.vx=0
       this.vy=0
       this.setState("hidle")
     }

  }
  chock(){

    this.x=this.x-this.vx
    this.y=this.y-this.vy
  }
  show(){
    if (this.side==="l") {
      if (this.state==="hidle") {
        this.img=this.hidle
      }else if (this.state==="walk") {
          this.leftAnimation()
      }

    }else {
      if (this.state==="hidle") {
          this.img=this.Rhidle
      }else if (this.state==="walk") {
          this.leftAnimation()
      }
    }

    image(this.img,640,210)

  }

  loadAnimation(){

    //this.RwalkImg=[]
    for (var i = 1; i < 24; i++) {
      var img
      img=loadImage('animWalk/'+i+'.png')
      this.walkAnim.push(img)
    }
    for (var i = 1; i < 24; i++) {
      var img;
      img=loadImage('animwalkswitch/r'+i+'.png')
      this.walkRAnim.push(img)
    }

    //this.RwalkImg=loadImage('animWalk/R1.png')
  }
  leftAnimation(){
    if (this.side=="l") {
      this.img=this.walkAnim[this.walkframe]
    }else{
      this.img=this.walkRAnim[this.walkframe]
    }

    this.chrono=this.chrono+1
    if (this.chrono==3) {
      this.walkframe=this.walkframe+1
      if (this.walkframe==23) {
        this.walkframe=0
      }
      this.chrono=0
    }
  }
  Disco(){
    if (this.parcel.type.getDisco()) {
      print("There are already a balise near")
      return false
    }else {
      if (this.parcel.type.name!="spwan") {
        this.lieuxdecouvert++
        this.parcel.type.addObject(this.x,this.y)
        this.parcel.type.setDisco(true)
        return true
      }
    }
  }

//Getter and setter

  getminerai(){return this.minerais}
  addMinerai(mine){this.minerais.push(mine)}
  setX(x){this.x=x;}
  getX(){return this.x;}

  setY(y){this.y=y;}
  getY(){return this.y;}

  getMaxOxy(){return this.maxOxy}
  getOxy(){return this.oxygen;}
  getisDead(){return this.isDead;}
  setSide(side){this.side=side;}
  setState(state){this.state=state;}
  setIsDead(s){this.isDead=s}
  IncOxyPack(d){this.oxyPack=this.oxyPack+d}
  IncOxyCaptor(d){this.captor=this.captor+d}
}

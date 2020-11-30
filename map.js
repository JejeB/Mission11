class Map {
  constructor() {
    var parcels;
    var cross;
    var actual;
    this.cross="none"
    this.liste=[]

    var p=new Parcel(-640,640,-360,360,false)
    p.init()
    p.createSpwan()
    this.actual=p

    this.liste.push(p)
    this.generate(0,0)


  }
  getActual(){return this.actual}
  mouse(astro){
    this.actual.mouse(astro)


  }
  Click(astro){
    if (this.actual.xmin==-640&&this.actual.xmax==640&&this.actual.ymin==-360 && this.actual.ymax==360) {
      this.actual.Click(astro)

    }
  }
  //Display Function
    show(x,y,db,map,score){
      this.crossingTest(x,y)

      this.actual.show(x,y,score)
      //Parcel display
      this.actual.getn().show(x,y,score)
      this.actual.gets().show(x,y,score)
      this.actual.gets().show(x,y,score)
      this.actual.gete().show(x,y,score)
      this.actual.getw().show(x,y,score)
      this.actual.getnw().show(x,y,score)
      this.actual.getne().show(x,y,score)
      this.actual.getsw().show(x,y,score)
      this.actual.getse().show(x,y,score)
      

    }
    showTop(x,y,db){

      this.actual.showTop(x,y)
      //Parcel display
      this.actual.getn().showTop(x,y)
      this.actual.gets().showTop(x,y)
      this.actual.gets().showTop(x,y)
      this.actual.gete().showTop(x,y)
      this.actual.getw().showTop(x,y)
      this.actual.getnw().showTop(x,y)
      this.actual.getne().showTop(x,y)
      this.actual.getsw().showTop(x,y)
      this.actual.getse().showTop(x,y)

    }
    checkinList(xmin,xmax,ymin,ymax){

      for (var i = 0; i < this.liste.length; i++) {

          if (xmax==this.liste[i].getxmax() && xmin==this.liste[i].getxmin() &&
              ymin==this.liste[i].getymin() && ymax==this.liste[i].getymax() ) {
                return this.liste[i]
          }
      }
      return "no"
    }

  generate(x,y){

    //SW
    var sw=this.checkinList(x-1920,x-640,y+360,y+1080)
    if(sw==="no"){
      //print("sw");
      var p=new Parcel(x-1920,x-640,y+360,y+1080,false)
      this.actual.setsw(p);
      this.liste.push(p)
    }else{
      this.actual.setsw(sw)
    }
    //S
    var s=this.checkinList(x-640,x+640,y+360,y+1080)
    if (s==="no") {
      //print("s");
    var p= new Parcel(x-640,x+640,y+360,y+1080,false)
      this.liste.push(p)
    this.actual.sets(p);}else {
      this.actual.sets(s)
    }
    //SE
    var se=this.checkinList(x+640,x+1920,y+360,y+1080)
    if (se==="no") {//print("se");
    var p= new Parcel(x+640,x+1920,y+360,y+1080,false)
      this.liste.push(p)
    this.actual.setse(p);}else {
      this.actual.setse(se)
    }
    //E
    var e=this.checkinList(x+640,x+1920,y-360,y+360)
    if (e==="no") {//print("e");
    var p= new Parcel(x+640,x+1920,y-360,y+360,false)
      this.liste.push(p)
    this.actual.sete(p);}else {
      this.actual.sete(e)
    }
    //NE
    var ne= this.checkinList(x+640,x+1920,y-1080,y-360)
    if (ne==="no") {//print("ne");
    var p= new Parcel(x+640,x+1920,y-1080,y-360,false)
      this.liste.push(p)
    this.actual.setne(p);}else {
      this.actual.setne(ne)
    }
    //N
    var n = this.checkinList(x-640,x+640,y-1080,y-360)
    if (n==="no") {//print("n");
    var p= new Parcel(x-640,x+640,y-1080,y-360,false)
      this.liste.push(p)
    this.actual.setn(p);}else{
      this.actual.setn(n)
    }
    //NW
    var nw = this.checkinList(x-1920,x-640,y-1080,y-360)
    if (nw==="no") {//print("nw");
    var p= new Parcel(x-1920,x-640,y-1080,y-360,false)
      this.liste.push(p)
    this.actual.setnw(p);}else{
      this.actual.setnw(nw)
    }
    //W
    var w = this.checkinList(x-1920,x-640,y-360,y+360)
    if (w=="no") {//print("w");
    var p= new Parcel(x-1920,x-640,y-360,y+360,false)
      this.liste.push(p)
    this.actual.setw(p);}else{
      this.actual.setw(w)
    }

    // Wlink
    //for (var i = 0; i < this.liste.length; i++) {


    this.actual.getw().setn(this.actual.getnw())
    this.actual.getw().sets(this.actual.getsw())
    this.actual.getw().sete(this.actual)
    this.actual.getw().setne(this.actual.getn())
    this.actual.getw().setse(this.actual.gets())
    this.actual.getw().init()
    //NWlink
    this.actual.getnw().sete(this.actual.getn())
    this.actual.getnw().sets(this.actual.getw())
    this.actual.getnw().setse(this.actual)
    this.actual.getnw().init()
    //Nlink
    this.actual.getn().setw(this.actual.getnw())
    this.actual.getn().sete(this.actual.getne())
    this.actual.getn().sets(this.actual)
    this.actual.getn().setsw(this.actual.getw())
    this.actual.getn().setse(this.actual.gete())
    this.actual.getn().init()
    //NElink
    this.actual.getne().sets(this.actual.gete())
    this.actual.getne().setw(this.actual.getn())
    this.actual.getne().setsw(this.actual)
    this.actual.getne().init()
    //Elink
    this.actual.gete().setw(this.actual)
    this.actual.gete().sets(this.actual.getse())
    this.actual.gete().setn(this.actual.getne())
    this.actual.gete().setnw(this.actual.getn())
    this.actual.gete().setsw(this.actual.gets())
    this.actual.gete().init()
    //SElink
    this.actual.getse().setn(this.actual.gete())
    this.actual.getse().setw(this.actual.gets())
    this.actual.getse().setnw(this.actual)
    this.actual.getse().init()
    //Slink
    this.actual.gets().setn(this.actual)
    this.actual.gets().sete(this.actual.getse())
    this.actual.gets().setw(this.actual.getsw())
    this.actual.gets().setne(this.actual.gete())
    this.actual.gets().setnw(this.actual.getw())
    this.actual.gets().init()
    //SWlink
    this.actual.getsw().setn(this.actual.getw())
    this.actual.getsw().setne(this.actual)
    this.actual.getsw().sete(this.actual.gets())
    this.actual.getsw().init()
  }


  crossingTest(x,y){
    if (x>this.actual.getxmax()) {
      this.cross="E"
      this.actual=this.actual.gete()
      this.generate(this.actual.getxmax()-640,this.actual.getymax()-360)
    }
    if (x<this.actual.getxmin()) {
      this.cross="W"
      this.actual=this.actual.getw()
      this.generate(this.actual.getxmax()-640,this.actual.getymax()-360)
    }
    if (y>this.actual.getymax()) {
      this.cross="S"
      this.actual=this.actual.gets()
      this.generate(this.actual.getxmax()-640,this.actual.getymax()-360)
    }
    if (y<this.actual.getymin()) {
      this.cross="N"
      this.actual=this.actual.getn()
      this.generate(this.actual.getxmax()-640,this.actual.getymax()-360)
    }
  }
  getTab(){
    if (this.actual.xmin==-640&&this.actual.xmax==640&&this.actual.ymin==-360 && this.actual.ymax==360) {
      return this.actual.getTab()
    }
  }

}

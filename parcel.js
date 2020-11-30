class Parcel {
  constructor(xmin,xmax,ymin,ymax,c) {
    this.tab=[];
    this.c=c
    this.xmax=xmax; this.xmin=xmin; this.ymin = ymin; this.ymax=ymax;

  }
  createSpwan(){
    this.type=new Spawn(this.xmin,this.xmax,this.ymin,this.ymax)
      this.isCrat=false
  }
// Check the ouverture and fill the tab
  FillOuv(){
    var tab=[false,false,false,false]
    var b=false
    if (this.n) {
      if (this.n.getIsCrat() ) { //Test si ouverture Nord
        if (this.n.type.getTab()[3]) {
          tab[1]=true
          b=true
        }
      }
    }if (this.e) {
      if (this.e.getIsCrat() ) {
        if (this.e.type.getTab()[0]) {
              tab[2]=true
              b=true
        }
      }
    }if (this.w ) {
      if (this.w.getIsCrat() ) {
        if (this.w.type.getTab()[2]) {
          tab[0]=true
          b=true
        }
      }
    }if (this.s) {
      if (this.s.getIsCrat() ) {
        if (this.s.type.getTab()[1]) {
          tab[3]=true
          b=true
        }
      }
    }
    return b?tab:false;
  }

  isCratNext(){

    if (this.n) {
      if (this.n.getIsCrat() ) { //Test si ouverture Nord
        return true
      }
    }if (this.e) {
      if (this.e.getIsCrat() ) {
        return true
      }
    }if (this.w ) {
      if (this.w.getIsCrat() ) {
        return true
      }
    }
    return false;
  }

  init(){
    if (!this.c) { //Protection pour ne pas reecrire une parcel existante
      this.c=true
      if (this.isCratNext()) {
        var tab=this.FillOuv();
        if (tab) {
          this.isCrat=true
          this.type=new Cratere(this.xmin,this.xmax,this.ymin,this.ymax,tab,50)
        }else {
          this.type=new MoonSurface(this.xmin,this.xmax,this.ymin,this.ymax)
          this.isCrat=false
        }
      }else {
        if ( random(10)>3 || (this.xmax==-640 && this.xmin==640 && this.ymin==-360 && this.ymax==360) ) {

          this.type=new MoonSurface(this.xmin,this.xmax,this.ymin,this.ymax)
          this.isCrat=false
        }else {
            var tab=[]
            this.isCrat=true
            tab.push(this.testNextTo(this.w))
            tab.push(this.testNextTo(this.n))
            tab.push(this.testNextTo(this.e))
            tab.push(this.testNextTo(this.s))
            this.type=new Cratere(this.xmin,this.xmax,this.ymin,this.ymax,tab,0)

        }
      }
    }
  }

  testNextTo(par){
    if (!par||!par.xmax) {
      if (random(5)>1) {
          return false
      }else {
        return true
      }
    }else {
      return false
    }
  }
  show(x,y,score){
    this.type.show(x,y,score)
    //line(this.xmin+this.decalX(x),this.ymin+this.decalY(y),this.xmax+this.decalX(x),this.ymin+this.decalY(y))
    //line(this.xmin+this.decalX(x),this.ymin+this.decalY(y),this.xmin+this.decalX(x),this.ymax+this.decalY(y))
  }
  showTop(x,y){
    this.type.showTop(x,y)
  }
  mouse(astro){
    this.type.mouse(astro)
  }
  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+360
  }
//Getter and setter
  getTab(){
    if (this.xmin==-640&&this.xmax==640&&this.ymin==-360 && this.ymax==360) {
      return this.type.getTab()
    }
  }
  Click(astro){
    if (this.xmin==-640&&this.xmax==640&&this.ymin==-360 && this.ymax==360) {

      this.type.Click(astro)
    }
  }


  getIsCrat(){return this.isCrat;}

  getType(){return this.type}
  getxmax(){return this.xmax;}
  getxmin(){return this.xmin;}
  getymin(){return this.ymin;}
  getymax(){return this.ymax;}

  getn(){return this.n;}
  gets(){return this.s;}
  gete(){return this.e;}
  getw(){return this.w;}
  getnw(){return this.nw;}
  getne(){return this.ne;}
  getse(){return this.se;}
  getsw(){return this.sw;}

  setn(n){this.n=n;}
  sets(s){this.s=s;}
  sete(e){this.e=e;}
  setw(w){this.w=w;}
  setnw(nw){this.nw=nw;}
  setne(ne){this.ne=ne;}
  setse(se){this.se=se;}
  setsw(sw){this.sw=sw;}
}

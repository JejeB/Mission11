class Minerai extends PercepectiveObject {
  constructor(x,y,l,h,name,img,imgH,c,colli,crat) {
    super(x,y,l,h,name,img,imgH,c,colli)
    this.qty=parseInt(random(1,3))

    this.count=0
    this.dur=10
    this.moonStones=[]
    for (var i = 0; i < this.qty; i++) {

      this.moonStones.push(new MoonStone(crat))
    }
    this.imgH=loadImage('img/mineraihoover.png')
    this.no=loadImage('img/mineraiEmpty.png')
  }
  showin(x,y){
      this.mouseON(x,y)
    var i=this.img
    if (this.qty<=0) {
      i=this.no
    }else {
      if (this.touchable) {
        if (this.hoover) {
            i=this.imgH
        }}
    }

      image(i,this.x+this.decalX(x)-20,this.y+this.decalY(y)-this.decalage-20)
  }
  mouse(astro){
    if (this.hoover && this.touchable) {
      this.count=this.count+1
      if (this.count==this.dur) {
        this.count=0
        if (this.qty>0) {
          this.mine(astro)
        }
      }

    }
  }
  mine(astro){
    this.qty--

    astro.addMinerai(this.moonStones[this.qty].getcontenu())
  }
  decalX(x){
    return -x+640
  }
  decalY(y){
    return -y+360
  }
}

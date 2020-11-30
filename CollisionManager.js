class CollisionManager {
  constructor() {

  }
  manage(astro,tab){
    for (var i = 0; i < tab.length; i++) {
      //Check in the near area
      if (this.checkRectCollision(astro.getX()-50,astro.getX()+124,astro.getY()+50,astro.getY()+197,
        tab[i].getxmin(),tab[i].getxmax(),tab[i].getymin()+150,tab[i].getymax()+150,astro)) {
          this.setNear(astro,tab[i])

      }else {
        tab[i].setIsTouchable(false)
      }
      //Check Collision contact
      if (this.checkRectCollision(astro.getX(),astro.getX()+74,astro.getY()+100,astro.getY()+147,
        tab[i].getxmin(),tab[i].getxmax(),tab[i].getymin()+150,tab[i].getymax()+150,astro) && tab[i].getCollision()) {
          this.sendChock(astro)

      }


    }
  }
setNear(astro,obj){
obj.setIsTouchable(true)

}
sendChock(astro){
  astro.chock()
}
  checkRectCollision(xmin,xmax,ymin,ymax,xmin1,xmax1,ymin1,ymax1,astro){
    if ( ((xmin<xmax1) && (xmax>xmin1)) && ((ymin<ymax1) && (ymax>ymin1))  ) {
      return true
    }else{
      return false
    }
  }
}

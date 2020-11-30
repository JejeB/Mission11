class OxygenRealoader extends PercepectiveObject {
  constructor(x,y,l,h,name,img,imgH,c,colli) {
    super(x,y,l,h,name,img,imgH,c,colli)
  }
  mouse(astro){
    if (this.hoover && this.touchable) {
      
      astro.healOxygen()
    }
  }

}

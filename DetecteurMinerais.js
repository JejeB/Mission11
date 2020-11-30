class DetecteurMinerais extends PercepectiveObject {
  constructor(x,y,l,h,name,img,imgH,c,colli,chest) {
    super(x,y,l,h,name,img,imgH,c,colli)
    this.tab=[]
    this.chest=chest
  }
  
  mouse(astro){
    if (this.hoover && this.touchable) {
      if (astro.getminerai()!=0) {
        var mine=astro.getminerai().pop()

        for (var i = 0; i < mine.length; i++) {
            var b=true
          for (var j = 0; j < this.tab.length; j++) {
            if (mine[i]===this.tab[j][0]) {
              this.tab[j][1]++
              b=false
            }
          }
          if(b){
            this.tab.push([mine[i],1])
          }

        }
      }

      this.chest.settab(this.tab)
    }

  }
}

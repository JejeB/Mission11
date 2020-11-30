class MoonStone {
  constructor(crat) {
    this.contenu=[]
    for (var i = 0; i < random(0,5); i++) {
      this.contenu.push(this.mine(crat))
    }

  }
  mine(crat){
    var r=random(1,100)

    if (crat && r>=0 && r<5) {
      return "violet"
    }else if(r>=5 && r<15){
      return "green"
    }else if(r>=15 && r<35){
      return "yellow"
    }else if(r>=35 && r<65){
      return "red"
    }else {
      return "orange"
    }
  }
  getcontenu(){return this.contenu}
}

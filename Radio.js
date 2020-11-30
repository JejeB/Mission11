class Radio {
  constructor() {
    this.activate=true
    this.tab=["Hey?! Houston here","Your mission is too collect a maximum of different Moon crystal sample","To do that collect Moon stone and put it in the analyser.\n There are more rare crystal in crater but it's difficult to walk into."
    ,"Your second task is too put a maximux of seismic captor\n you will be able to craft some with moon crystal","Take care of your suit pressure if you have no more pressure you will explose by the difference.\n You can relaod it in the machine you look like a big frige or craft some pressure pack",
    "I see your LM is broke, you have to fix it before go back","Good Luck"]
    this.n=0
  }
  show(){
    if (this.n>=this.tab.length) {
      this.activate=false
    }
    if (this.activate) {
      fill(255)
      stroke(0)
      rect(100,550,1080,135,10)
      noStroke()
      fill(0)
      text(this.tab[this.n],260,579)

    }}


  mouse(){

    this.n++
  }
}

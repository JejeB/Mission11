class Score {
  constructor() {
    this.tab=[]
    this.lieuxUnique=0;
    this.decouvert=0;
  }
  setTab(tab){this.tab=tab}
  getTab(){return this.tab}

  IncLieux(){this.lieuxUnique++}
  getLieux(){return this.lieuxUnique}

  IncDecouvert(){this.decouvert++}
  getDecouvert(){return this.decouvert}
}

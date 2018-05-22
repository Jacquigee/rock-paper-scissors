class Player {
  constructor() {
    this.points = 0;
  }

  makeChoice(choice){
    this.choice = choice;
  }
  getPoints(){
    return this.points;
  }

  setPoints(points) {
    this.points = points;
  }
}

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

  addPoints(points) {
    this.points = points;
  }

  getRandomChoice(){
    var Choices = ["rock", "paper", "scissors"];
    return choices[Math.floor]
  }
}

$(document).ready(function() {
  var human = new Player();
  var computer = new Player();

  $('form#rock-paper-scissors').submit(function(event) {
    event.preventDefault();
  });
});

export class Model {
  constructor() {
    this.playerScoreCount = 0;
    this.computerScoreCount = 0;
  }

  increament(winner) {
    //
    if (winner == "player") {
      this.playerScoreCount += 1;
    } else if (winner == "computer") {
      this.computerScoreCount += 1;
    }
  }

  reset() {
    this.playerScoreCount = 0;
    this.computerScoreCount = 0;
  }
}

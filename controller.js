import { View } from "./view.js";
import { Model } from "./model.js";
//
//
//
// --------------------------------------------------------------------------------------------
////////// CLASS: methods for controller what view gets rendered
// --------------------------------------------------------------------------------------------
//
//
//
export class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    self = this;
  }

  //
  //
  // ---------------------------------------------------------------------
  // METHOD: Remove section from UI
  //
  //
  static remove(sectionToRemove) {
    document.getElementById(sectionToRemove).remove();
  }

  //
  //
  // ---------------------------------------------------------------------
  // METHOD: Starts the game
  //
  //
  gameStart() {
    view.start_UI();
    //
    document
      .getElementById("start--button")
      .addEventListener("click", function() {
        Controller.remove("section--start");
        controller.gamePlaying();
      });
  }

  //
  //
  // ---------------------------------------------------------------------
  // METHOD: calls the gameplay view and addButtonListerns controller
  //
  //
  gamePlaying() {
    //
    let options = ["Rock", "Paper", "Scissors"];
    //
    view.playing_UI(
      model.computerScoreCount,
      model.playerScoreCount,
      options[0],
      options[1],
      options[2]
    );
    //
    Controller.addButtonListener();
  }

  //
  //
  // ---------------------------------------------------------------------
  // METHOD: checks for score/gameEnd, if not then roundWinner view
  //
  //
  //
  static gameRoundEnd(
    computerScore,
    playerScore,
    option1,
    option2,
    option3,
    winner,
    computerChoice,
    playerChoice
  ) {
    //
    if (model.playerScoreCount == 4) {
      //
      //
      //
      // display the gameWinner_UI view for player
      view.gameWinner_UI("You Win!", "Damn you, human. You win this time...");
      // remove the section from UI
      setTimeout(function() {
        Controller.remove("section--gameWinner");
      }, 7000);
      // call model to reset scores and gameplaying to restart
      model.reset();
      controller.gameStart();
    } else if (model.computerScoreCount == 4) {
      //
      //
      //
      // display the gameWinner_UI view for computer
      view.gameWinner_UI(
        "Computer Wins!",
        "Hehehe stupid human. Bet you can't beat me again."
      );
      // remove the section from UI
      setTimeout(function() {
        Controller.remove("section--gameWinner");
      }, 6000);
      // call model to reset scores and gameplaying to restart
      model.reset();
      controller.gameStart();
    } else {
      //
      //
      //
      // call the roundWinner_UI view
      console.log(computerChoice);
      console.log(playerChoice);
      console.log(winner);
      view.roundWinner_UI(computerChoice, playerChoice, winner);
      // remove the section from UI
      setTimeout(function() {
        Controller.remove("section--roundWinner");
      }, 2000);
      // display the playing_UI view
      view.playing_UI(computerScore, playerScore, option1, option2, option3);
      // add the click listeners
      Controller.addButtonListener();
    }
  }

  //
  // -------------------------------------------------------
  // METHOD: Loop through buttons
  // and add event listeners
  //
  static addButtonListener() {
    //
    let options = ["Rock", "Paper", "Scissors"];
    //
    let optionButtons = document.getElementsByClassName("option");
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    //
    for (let optionButton of optionButtons) {
      //
      optionButton.addEventListener("click", function() {
        Controller.remove("section--playing");
        //
        Controller.determineWinner(
          computerChoice,
          optionButton.id,
          options[0],
          options[1],
          options[2]
        );
        //
        //
      });
    }
  }

  //
  // -------------------------------------------------------
  // METHOD: determine who wins and pass
  // to the end round method
  //
  static determineWinner(
    computerChoice,
    playerChoice,
    option1,
    option2,
    option3
  ) {
    //
    if (playerChoice == computerChoice) {
      let winner = "Draw!";
      Controller.gameRoundEnd(
        model.computerScoreCount,
        model.playerScoreCount,
        option1,
        option2,
        option3,
        winner,
        computerChoice,
        playerChoice
      );
    } else if (playerChoice == "Rock") {
      if (computerChoice == "Scissors") {
        //
        model.increament("player");
        let winner = "Player";
        Controller.gameRoundEnd(
          model.computerScoreCount,
          model.playerScoreCount,
          option1,
          option2,
          option3,
          winner,
          computerChoice,
          playerChoice
        );
      } else {
        //
        model.increament("computer");
        let winner = "Computer";
        Controller.gameRoundEnd(
          model.computerScoreCount,
          model.playerScoreCount,
          option1,
          option2,
          option3,
          winner,
          computerChoice,
          playerChoice
        );
      }
    } else if (playerChoice == "Scissors") {
      if (computerChoice == "Paper") {
        //
        model.increament("player");
        let winner = "Player";
        Controller.gameRoundEnd(
          model.computerScoreCount,
          model.playerScoreCount,
          option1,
          option2,
          option3,
          winner,
          computerChoice,
          playerChoice
        );
      } else {
        //
        model.increament("computer");
        let winner = "Computer";
        Controller.gameRoundEnd(
          model.computerScoreCount,
          model.playerScoreCount,
          option1,
          option2,
          option3,
          winner,
          computerChoice,
          playerChoice
        );
      }
    } else if (playerChoice == "Paper") {
      if (computerChoice == "Rock") {
        //
        model.increament("player");
        let winner = "Player";
        Controller.gameRoundEnd(
          model.computerScoreCount,
          model.playerScoreCount,
          option1,
          option2,
          option3,
          winner,
          computerChoice,
          playerChoice
        );
      } else {
        //
        model.increament("computer");
        let winner = "Computer";
        Controller.gameRoundEnd(
          model.computerScoreCount,
          model.playerScoreCount,
          option1,
          option2,
          option3,
          winner,
          computerChoice,
          playerChoice
        );
      }
    }
    //
  }
}

//
// initialize the controller
let model = new Model();
let view = new View();
let controller = new Controller(model, view);

controller.gameStart();

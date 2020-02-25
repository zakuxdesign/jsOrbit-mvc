import { View } from "./view.js";
import { Model } from "./model.js";
//
//
//
// --------------------------------------------------------------------------
// CLASS: methods for controller what view gets rendered
// --------------------------------------------------------------------------
export class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    self = this;
  }
  //
  static remove(sectionToRemove) {
    document.getElementById(sectionToRemove).remove();
  }

  //
  gameStart() {
    view.start_UI();
    //
    document
      .getElementById("start--button")
      .addEventListener("click", function() {
        controller.gamePlaying();
      });
  }

  //
  gamePlaying() {
    Controller.remove("section--start");
    //
    const options = ["Rock", "Paper", "Scissors"];
    view.playing_UI(
      model.computerScoreCount,
      model.playerScoreCount,
      options[0],
      options[1],
      options[2]
    );
    //
    let optionButtons = document.getElementsByClassName("option");
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    //
    for (let optionButton of optionButtons) {
      //
      optionButton.addEventListener("click", function() {
        Controller.remove("section--playing");
        //
        if (computerChoice == "Rock" && optionButton.id == "Paper") {
          // player wins
          let winner = "player";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id, winner);
        } else if (optionButton.id == "Rock" && computerChoice == "Paper") {
          // computer wins
          let winner = "computer";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id, winner);
        } else if (computerChoice == "Paper" && optionButton.id == "Scissors") {
          // player wins
          let winner = "player";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id, winner);
        } else if (optionButton.id == "Paper" && computerChoice == "Scissors") {
          // computer wins
          let winner = "computer";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id, winner);
        } else if (computerChoice == "Scissors" && optionButton.id == "Rock") {
          // player wins
          let winner = "player";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id);
        } else if (optionButton.id == "Scissors" && computerChoice == "Rock") {
          // computer wins
          let winner = "computer";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id, winner);
        } else {
          // draw
          let winner = "none";
          model.increament(winner);
          view.roundWinner_UI(computerChoice, optionButton.id, winner);
        }
        //
      });
    }
  }
}

//
// initialize the controller
let model = new Model();
let view = new View();
let controller = new Controller(model, view);

controller.gameStart();

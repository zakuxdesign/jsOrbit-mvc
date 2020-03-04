import {
  Component_section,
  Component_paragraph,
  Component_header,
  Component_button,
  Component_scoreBoard,
  Component_icon
} from "./components.js";

let section = new Component_section();
let paragraph = new Component_paragraph();
let header = new Component_header();
let button = new Component_button();
let scoreBoard = new Component_scoreBoard();
let icon = new Component_icon();

//
//
//
// --------------------------------------------------------------------------
// CLASS: methods for what's inside a view
// --------------------------------------------------------------------------
export class View {
  start_UI() {
    //
    section.render("section--start");
    //
    paragraph.render(
      "section--start",
      "start--paragraph",
      "Welcome to virtual"
    );
    //
    header.render(
      "section--start",
      "h1",
      "start--header",
      "",
      "Rock, Paper, & Scissors"
    );
    //
    paragraph.render(
      "section--start",
      "start--paragraph",
      "First to 4 wins. Ready to play?"
    );
    //
    button.render("section--start", "start--button", "", "Start Game");
  }

  playing_UI(computerScore, humanScore, option1, option2, option3) {
    //
    section.render("section--playing");
    //
    scoreBoard.render(computerScore, humanScore);
    //
    paragraph.render(
      "section--playing",
      "paragraph--playing",
      "Select an option, human."
    );
    //
    let buttonArea = document.createElement("div");
    buttonArea.setAttribute("id", "button--area");
    document.getElementById("section--playing").appendChild(buttonArea);
    //
    button.render("button--area", "Rock", "option", option1);
    //
    button.render("button--area", "Paper", "option", option2);
    //
    button.render("button--area", "Scissors", "option", option3);
  }

  roundWinner_UI(computerChoice, playerChoice, winner) {
    section.render("section--roundWinner");
    //
    //
    icon.render(
      "section--roundWinner",
      playerChoice,
      "icon-choices",
      "./images/" + playerChoice.toLowerCase() + ".svg"
    );
    //
    icon.render(
      "section--roundWinner",
      computerChoice,
      "icon-choices",
      "./images/" + computerChoice.toLowerCase() + ".svg"
    );
    //
    if (winner == "Player") {
      paragraph.render(
        "section--roundWinner",
        "paragraph--roundWinner",
        "You win this round!"
      );
    } else if (winner == "Computer") {
      paragraph.render(
        "section--roundWinner",
        "paragraph--roundWinner",
        winner + " wins this round!"
      );
    } else {
      paragraph.render(
        "section--roundWinner",
        "paragraph--roundWinner",
        "Draw!"
      );
    }
  }

  gameWinner_UI(winner, message) {
    section.render("section--gameWinner");
    //
    header.render("section--gameWinner", "h2", "winner-header", "", winner);
    //
    paragraph.render("section--gameWinner", "winner--paragraph", message);
  }
}

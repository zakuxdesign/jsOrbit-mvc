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
    header.render(
      "section--start",
      "h1",
      "start--header",
      "",
      "Rock, Paper, & Scissors"
    );
    paragraph.render("section--start", "start--paragraph", "Ready to play?");
    //
    button.render("section--start", "start--button", "", "Start Game");
  }

  playing_UI(computerScore, humanScore, option1, option2, option3) {
    //
    section.render("section--playing");
    //
    scoreBoard.render(computerScore, humanScore);
    //
    header.render(
      "section--playing",
      "h2",
      "playing--header",
      "",
      "Select an option"
    );
    //
    button.render("section--playing", "Rock", "option", option1);
    //
    button.render("section--playing", "Paper", "option", option2);
    //
    button.render("section--playing", "Scissors", "option", option3);
  }

  roundWinner_UI(computerChoice, playerChoice, winner) {
    section.render("section--roundWinner");
    //
    //
    let startTime = Date.now();
    let countDownToDisplay = ["Rock, ", "Paper, ", "Scissors, ", "Shoot!"];
    // for (let option of countDownToDisplay) {
    //   let timer = setInterval(function() {
    //     let timePassed = Date.now() - startTime;
    //     header.render(
    //       "section--roundWinner",
    //       "h2",
    //       option,
    //       "countDownToDisplay fade-in-fwd",
    //       option
    //     );
    //     if (timePassed > 700) clearInterval(timer);
    //   }, 800);
    // }

    //
    //
    const iconsToShow = [computerChoice, playerChoice];
    for (let icons of iconsToShow) {
      if (icons == "Rock") {
        icon.render(
          "section--roundWinner",
          icons,
          "icon-choices",
          "./images/rock.svg"
        );
      } else if (icons == "Paper") {
        icon.render(
          "section--roundWinner",
          icons,
          "icon-choices",
          "./images/paper.svg"
        );
      } else {
        icon.render(
          "section--roundWinner",
          icons,
          "icon-choices",
          "./images/scissors.svg"
        );
      }
    }

    if (winner == "player") {
      paragraph.render(
        "section--roundWinner",
        "winner--paragraph",
        "You won this round!"
      );
    } else if (winner == "computer") {
      paragraph.render(
        "section--roundWinner",
        "winner--paragraph",
        "You lost this round!"
      );
    } else {
      paragraph.render("section--roundWinner", "winner--paragraph", "Draw!");
    }
  }
}

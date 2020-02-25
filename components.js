// --------------------------------------------------------------------------------
// Paragraph
// --------------------------------------------------------------------------------
export class Component_section {
  constructor(section) {
    this.section = section;
  }
  //
  render(sectionId) {
    let section = document.createElement("div");
    section.setAttribute("id", sectionId);
    section.setAttribute("class", "section fade-in-fwd");
    document.getElementById("document--body").appendChild(section);
  }
}

// --------------------------------------------------------------------------------
// Paragraph
// --------------------------------------------------------------------------------
export class Component_paragraph {
  constructor(paragraph) {
    this.paragraph = paragraph;
  }
  //
  render(renderLocation, paragraphId, paragraphContent) {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", paragraphId);
    document.getElementById(renderLocation).appendChild(paragraph);
    paragraph.innerHTML = paragraphContent;
  }
}

// --------------------------------------------------------------------------------
// Header
// --------------------------------------------------------------------------------
export class Component_header {
  constructor(header) {
    this.header = header;
  }
  //
  render(renderLocation, headerType, headerId, headerClass, headerText) {
    let header = document.createElement(headerType);
    header.setAttribute("id", headerId);
    header.setAttribute("class", headerClass);
    header.innerHTML = headerText;
    document.getElementById(renderLocation).appendChild(header);
  }
}

// --------------------------------------------------------------------------------
// Button
// --------------------------------------------------------------------------------
export class Component_button {
  constructor(button) {
    this.button = button;
  }
  //
  render(renderLocation, buttonId, buttonClass, buttonText) {
    let button = document.createElement("button");
    button.setAttribute("id", buttonId);
    button.setAttribute("class", buttonClass);
    button.innerHTML = buttonText;
    document.getElementById(renderLocation).appendChild(button);
  }
}

// --------------------------------------------------------------------------------
// Score Board
// --------------------------------------------------------------------------------
export class Component_scoreBoard {
  constructor(scoreBoard, playerScore, computerScore) {
    this.scoreBoard = scoreBoard;
    this.playerScore = playerScore;
    this.computerScore = computerScore;
  }

  //
  render(playerScoreNumber, computerScoreNumber) {
    //
    const players = {
      Computer: "Computer",
      Human: "Player"
    };
    //
    // Create bar
    let scoreBoard = document.createElement("div");
    scoreBoard.setAttribute("id", "scoreBoard");
    document.getElementById("section--playing").appendChild(scoreBoard);
    //
    // Create player sections
    for (let player in players) {
      let playerSection = document.createElement("div");
      playerSection.setAttribute("id", "scoreBoard--player-" + player);
      playerSection.setAttribute("class", "scoreBoard--player-scores");
      document.getElementById("scoreBoard").appendChild(playerSection);
      //
      // Create player name
      let playerName = document.createElement("p");
      playerName.setAttribute("class", "scoreBoard--player-name");
      playerName.innerHTML = players[player];
      document
        .getElementById("scoreBoard--player-" + player)
        .appendChild(playerName);
      //
      // Create player score
      let playerScore = document.createElement("div");
      playerScore.setAttribute("id", "scoreBoard--score-" + players[player]);
      playerScore.setAttribute("class", "scoreBoard--score-number");
      document
        .getElementById("scoreBoard--player-" + player)
        .appendChild(playerScore);

      //
      let playerNumber = document.createElement("p");
      if (players[player] == "Player") {
        playerNumber.innerHTML = playerScoreNumber;
      } else {
        playerNumber.innerHTML = computerScoreNumber;
      }
      document
        .getElementById("scoreBoard--score-" + players[player])
        .appendChild(playerNumber);
    }
  }
}

// --------------------------------------------------------------------------------
// Icon
// --------------------------------------------------------------------------------
export class Component_icon {
  constructor(image) {
    this.image = image;
  }

  //
  render(renderLocation, imageId, imageClass, imageType) {
    let image = document.createElement("img");
    image.setAttribute("id", imageId);
    image.setAttribute("id", imageClass);
    image.src = imageType;
    document.getElementById(renderLocation).appendChild(image);
  }
}

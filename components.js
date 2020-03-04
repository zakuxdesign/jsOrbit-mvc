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
  render(computerScoreNumber, playerScoreNumber) {
    //
    // Create bar
    let scoreBoard = document.createElement("div");
    scoreBoard.setAttribute("id", "scoreBoard");
    document.getElementById("section--playing").appendChild(scoreBoard);
    //
    // Create player sections

    //
    let paragraph = new Component_paragraph();
    //
    paragraph.render("scoreBoard", "score-computer", "Computer");
    //
    //
    let scores = document.createElement("div");
    scores.setAttribute("id", "scores");
    document.getElementById("scoreBoard").appendChild(scores);
    //
    let header = new Component_header();
    header.render(
      "scores",
      "h2",
      "scores",
      "",
      computerScoreNumber + " - " + playerScoreNumber
    );
    //
    paragraph.render("scoreBoard", "score-human", "Human");
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

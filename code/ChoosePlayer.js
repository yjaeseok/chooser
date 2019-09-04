const sf = require("./libs/sf.js");

module.exports.function = function choosePlayer (playerAction, chooser) {
  if (isValidPlayerAction(playerAction)) {
    chooser.isValidPlayerAction = true;

    if (isLastPlayer(chooser)) {
      chooser.selected = true;
    } else {
      chooser.selected = tryToChoose(chooser);
      if (!chooser.selected) {
        chooser.currentPlayer += 1;
        chooser.remainPlayer -= 1;
        updateProgress(chooser);
      }
    }
  } else {
    chooser.isValidPlayerAction = false;
  }
  return chooser;
}

function isValidPlayerAction(playerAction) {
  return playerAction == "빅스비" || playerAction.toUpperCase() == "BIXBY";
}

function isLastPlayer(chooser) {
  return chooser.currentPlayer == chooser.numPlayer;
}

function tryToChoose(chooser) {
  const random = Math.random();
  return random * 100 <= chooser.chooseRatio;
}

function updateProgress(chooser) {
  chooser.progress = (chooser.currentPlayer - 1) / parseFloat(chooser.numPlayer) * 100;
  // next player ratio text
  chooser.chooseRatio = sf("{0:#,##0}", (1 / parseFloat(chooser.remainPlayer) * 100));
}
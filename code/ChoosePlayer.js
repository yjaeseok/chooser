const sf = require("./libs/sf.js");

module.exports.function = function choosePlayer (playerAction, chooser) {
  chooser.isValidPlayerAction = isValidPlayerAction(playerAction);
  if (chooser.isValidPlayerAction) {
    if (isLastPlayer(chooser)) {
      chooser.chosen = true;
    } else {
      chooser.isGameFinished = tryToMakeChoice(chooser);
      if (!chooser.isGameFinished) {
        // prepare next game
        chooser.currentPlayer += 1;
        chooser.remainPlayer -= 1;

        // progress bar size
        chooser.progress = (chooser.currentPlayer - 1) / parseFloat(chooser.numPlayer) * 100;

        // next player choose ratio
        chooser.chooseRatio = sf("{0:#,##0}", (1 / parseFloat(chooser.remainPlayer) * 100));
      }
    }
  }
  return chooser;
}

function isValidPlayerAction(playerAction) {
  return playerAction == "빅스비" || playerAction.toUpperCase() == "BIXBY";
}

function isLastPlayer(chooser) {
  return chooser.currentPlayer == chooser.numPlayer;
}

function tryToMakeChoice(chooser) {
  const random = Math.random();
  return random * 100 <= chooser.chooseRatio;
}
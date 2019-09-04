const sf = require("./libs/sf.js");

module.exports.function = function createChooser (numPlayer) {
  var chooser = {
    numPlayer: numPlayer,
    currentPlayer: 1,
    remainPlayer: numPlayer,
    chooseRatio: sf("{0:#,##0}", (1 / numPlayer * 100)),
    progress: 0,
    isGameFinished: false,
    isValidPlayerAction: true
  };
  return chooser;
}
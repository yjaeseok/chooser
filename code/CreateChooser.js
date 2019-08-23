const sf = require("./libs/sf.js");

module.exports.function = function createChooser (numPlayer) {
  var chooser = {
    numPlayer: numPlayer,
    currentPlayer: 1,
    chooseRatio: sf("{0:#,##0.00}", (1 / numPlayer * 100)),
    selected: false
  };
  return chooser;
}
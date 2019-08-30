const sf = require("./libs/sf.js");

module.exports.function = function createChooser (numPlayer) {
  var progress = '';
  for (var i = 0; i < numPlayer; i++) {
    progress += '□';
  }
  var chooser = {
    numPlayer: numPlayer,
    currentPlayer: 1,
    chooseRatio: sf("{0:#,##0}", (1 / numPlayer * 100)),
    progress: progress,
    selected: false,
    isBixby: true
  };
  return chooser;
}
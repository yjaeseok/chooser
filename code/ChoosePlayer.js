const sf = require("./libs/sf.js");

module.exports.function = function choosePlayer (playerAction, chooser) {
  if (playerAction == "빅스비" || playerAction.toUpperCase() == "BIXBY") {
    chooser.isBixby = true;
    if (chooser.currentPlayer < chooser.numPlayer) {
      const random = Math.random();
      chooser.progress = chooser.currentPlayer / parseFloat(chooser.numPlayer) * 100;
      chooser.selected =  random * 100 <= chooser.chooseRatio;
      if (!chooser.selected) {
        chooser.currentPlayer += 1;    
      }
      chooser.chooseRatio = sf("{0:#,##0}", (1 / parseFloat(chooser.numPlayer - chooser.currentPlayer + 1) * 100));
    } else {
      chooser.selected = true;
    }
  } else {
    chooser.isBixby = false;
  }
  return chooser;
}

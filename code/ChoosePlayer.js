const sf = require("./libs/sf.js");

module.exports.function = function choosePlayer (playerAction, chooser) {
  if (playerAction == "빅스비" || playerAction.toUpperCase() == "BIXBY") {
    chooser.isBixby = true;
    if (chooser.currentPlayer < chooser.numPlayer) {
      const remainPlayer = chooser.numPlayer - chooser.currentPlayer - 1;
      const selectedRate = 1 / parseFloat(remainPlayer);
      const random = Math.random();
      chooser.selected =  random <= selectedRate;
      //chooser.chooseRatio = sf("{0:#,##0.00}", remainPlayer);
      if (!chooser.selected) {
        chooser.currentPlayer += 1;    
      }
    } else {
      chooser.selected = true;
    }
  } else {
    chooser.isBixby = false;
  }
  return chooser;
}

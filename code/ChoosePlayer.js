const sf = require("./libs/sf.js");

module.exports.function = function choosePlayer (playerAction, chooser) {
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
  return chooser;
}

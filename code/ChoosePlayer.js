module.exports.function = function choosePlayer (playerAction, chooser) {
  if (chooser.currentPlayer < chooser.numPlayer) {
    const random = Math.random();
    chooser.selected =  random >= 0.5;

    if (!chooser.selected) {
      chooser.currentPlayer += 1;    
    }
  } else {
    chooser.selected = true;
  }
  return chooser;
}

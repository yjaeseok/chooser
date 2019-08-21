module.exports.function = function choosePlayer (playerAction, chooser) {
  if (chooser.remainPlayer > 1) {
    chooser.remainPlayer -= 1;
    chooser.selected = Math.random() >= 0.5;
  } else {
    chooser.selected = true;
  }
  return chooser;
}

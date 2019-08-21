module.exports.function = function createChooser (numPlayer) {
  var chooser = {
    numPlayer: numPlayer,
    currentPlayer: 1,
    selected: false
  };
  return chooser;
}
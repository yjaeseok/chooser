module.exports.function = function createChooser (numPlayer) {
  var chooser = {
    selected: false,
    remainPlayer: numPlayer
  };
  return chooser;
}
module.exports.function = function findMeow () {
  var input = {};
  
  input.audioItem = [{
    id: 1,
    stream: [
      {
        url: "https://storage.googleapis.com/jake-chooser/chooser.mp3",
        format: "mp3"
      }
    ],
    title: "결국 너야",
    subtitle: "Chooser",
    artist: "왁스 WAX",
    albumName: "왁스 (Wax) 8집 - Always You",
    albumArtUrl: "https://storage.googleapis.com/jake-chooser/chooser.jpg"
  }]
  
  input.category = 'SINGLE';
  input.displayName = '결국 너야';
  input.repeatMode = 'OFF';
  input.doNotWaitForTTS = true;
  
  return input;
}
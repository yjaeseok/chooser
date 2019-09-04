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
    title: "당첨을 축하드립니다.",
    subtitle: "제이크 복불복",
    artist: "Anonymous Artist",
    albumName: "Unknown",
    albumArtUrl: "https://storage.googleapis.com/jake-chooser/chooser.jpg"
  }]
  
  input.category = 'SINGLE';
  input.displayName = '제이크 복불복';
  input.repeatMode = 'OFF';
  input.doNotWaitForTTS = false;
  
  return input;
}
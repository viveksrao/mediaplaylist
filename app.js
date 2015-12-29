var playlist = new Playlist();

var hello = new Song("Hello","Adele","6:07");
var listen = new Song("Listen","Beyonce","3:05");
var black = new Song("Back To Black","Amy Winehouse","4:09");
var temptations = new Song("Temptations","Silent Night","6:10");
var dont = new Song("Don\'t","Ed Sheeran","4:52");
var fallin = new Song("Fallin","Alicia Keys","3:28");

playlist.add(hello);
playlist.add(listen);
playlist.add(black);
playlist.add(temptations);
playlist.add(dont);
playlist.add(fallin);

var playlistElement = document.getElementById('playlist');
playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById('next');
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById('stop');
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}

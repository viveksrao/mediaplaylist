# Media Playlist
The Media Playlist is a JavaScript application built using JavaScript, HTML and CSS. Do note this application is just a simulation of a Media Player & is not going to actually play music. This is a Practice project for understanding how to create objects through constructors and prototypes. The UI has a single playlist. Clicking on Play button plays the first song in the playlist. Clicking on Next will jump to the next song. Finally, clicking on Stop, stops it.  

## Song Properties
* title
* artist
* duration
* isPlaying

## Song Methods
* play
* stop
* toHTML - outputting the song to HTML

## Playlist Properties
* songs - Array
* nowPlayingIndex - for keeping track of current song in the playlist

## Playlist Methods
* add
* play
* next
* stop
* renderInElement - displays the playlist on the page

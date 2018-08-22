var playlist = {
  Jim_James: 'New Life',
  Prince: 'Kiss',
  MJ: 'Bad'
};



function updatePlaylist (playlist, artistName, songTitle) {
<<<<<<< HEAD
 playlist = Object.assign ({}, playlist, {[artistName]: songTitle});
 return playlist;
=======
return Object.assign ({}, playlist, {[artistName]: songTitle});
>>>>>>> fa4ce2ae6baaba7091b22b0615ceb9062449feb8
}


function removeFromPlaylist(obj, artist){
  var objTwo = Object.assign({}, obj)
  delete objTwo.artist
  return objTwo
}
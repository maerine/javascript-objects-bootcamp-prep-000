var playlist = 
  {
    ["The Beatles"]: "Penny Lane",
    ["The Rolling Stones"]: "Paint it Black",
    ["The Who"]: "Pinball Wizard"
  };
  
  function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, {[artistName]: songTitle});
  }
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist.
  }
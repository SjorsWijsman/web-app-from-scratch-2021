import { getData } from "./data/getData.js";
import { getHashValue } from "./helpers/hashTools.js";
import { displayPlaylists } from "./render/displayPlaylists.js";
import { openPlaylist } from "./render/openPlaylist.js";

// Gets the user's playlists
getPlaylists();
function getPlaylists() {
  const limit = 50;
  getData(`https://api.spotify.com/v1/me/playlists?limit=${limit}`, displayPlaylists);
}

// Checks the localStorage for a saved hash
checkForStashedHash();
function checkForStashedHash() {
  const hash = localStorage.getItem("ranker-hash");
  if (hash) {
    localStorage.removeItem("ranker-hash");
    window.location.hash = hash;
  }
}

// Checks the hash for a playlist id to display
checkForPlaylistInHash();
function checkForPlaylistInHash() {
  const playlist = getHashValue("playlist");
  if (playlist) {
    getData(`https://api.spotify.com/v1/playlists/${playlist}`, openPlaylist);
  }
}

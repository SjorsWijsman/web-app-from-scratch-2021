import { getData } from "./getData.js";
import { getHashValue } from "./hashTools.js";
import { displayPlaylists } from "./displayPlaylists.js";
import { openPlaylist } from "./openPlaylist.js";

getPlaylists();
function getPlaylists() {
  const limit = 50;
  getData(`https://api.spotify.com/v1/me/playlists?limit=${limit}`, displayPlaylists);
}

checkForPlaylistInHash();
function checkForPlaylistInHash() {
  const playlist = getHashValue("playlist");
  if (playlist) {
    getData(`https://api.spotify.com/v1/playlists/${playlist}`, openPlaylist);
  }
}

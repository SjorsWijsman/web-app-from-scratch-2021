import { getData } from "./getData.js";
import { displayPlaylists } from "./displayPlaylists.js";

getPlaylists();
function getPlaylists() {
  const limit = 50;
  getData(`https://api.spotify.com/v1/me/playlists?limit=${limit}`, displayPlaylists);
}

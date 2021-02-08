import { getData } from "./getData.js";

export function openPlaylist(data) {
  const infoContainer = document.getElementById("playlist-info");
  infoContainer.getElementsByTagName("H1")[0].innerHTML = data.name;
  infoContainer.getElementsByTagName("IMG")[0].src = data.images[0].url;
  infoContainer.getElementsByTagName("A")[0].href = data.external_urls.spotify;

  getData(data.tracks.href, displayTracks);
}

function displayTracks(data) {
  const tracksContainer = document.getElementById("playlist-tracks");
  console.log(data)
}

import { getData } from "../data/getData.js";
import { openPlaylist } from "../render/openPlaylist.js";
import { getHashValue } from "../helpers/hashTools.js";

export function displayPlaylists(data) {
  const container = document.getElementById("playlists");
  for (const playlist of data.items) {
    // Create playlist container DIV element
    const playlistEl = document.createElement("A");
    playlistEl.classList.add("playlist");
    playlistEl.href = `#playlist=${playlist.id}`;

    playlistEl.dataset.owner = playlist.owner.id;

    // Add playlist image as IMG element
    const image = document.createElement("IMG");
    image.src = playlist.images[0].url;
    playlistEl.appendChild(image);

    // Add playlist title as P element
    const title = document.createElement("P");
    title.innerHTML = playlist.name;
    playlistEl.appendChild(title);

    // Get playlist onclick
    playlistEl.onclick = () => {
      getData(playlist.href, openPlaylist);
    }

    // Append playlist element to playlists container
    container.appendChild(playlistEl);
  }
}

import { getData } from "./getData.js";
import { openPlaylist } from "./openPlaylist.js";

export function displayPlaylists(data) {
  const container = document.getElementById("playlists");
  for (const playlist of data.items) {

    // Create playlist container DIV element
    const playlistEl = document.createElement("DIV");
    playlistEl.classList.add("playlist");

    playlistEl.dataset.owner = data.owner.id;

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

function filterPlaylists() {
  const onlyOwnerToggle = document.getElementById("playlist-owner");
  const container = document.getElementById("playlists");
  const user = localStorage.getItem("ranker-user");
  for (const playlist of container.children) {
    console.log(playlist);
    if (playlist.dataset.owner !== user) {
      playlist.style.visibility = "hidden";
    } else {
      playlist.style.visibility = "visible";
    }
  }
}

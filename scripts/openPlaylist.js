import { getData } from "./getData.js";

export function openPlaylist(data) {
  const infoContainer = document.getElementById("playlist-info");
  infoContainer.getElementsByTagName("H1")[0].innerHTML = data.name;
  infoContainer.getElementsByTagName("IMG")[0].src = data.images[0].url;
  infoContainer.getElementsByTagName("A")[0].href = data.external_urls.spotify;

  getData(data.tracks.href, displayTracks);
}

function displayTracks(data) {
  console.log(data)
  const tracksContainer = document.getElementById("playlist-table");

  tracksContainer.innerHTML = "";

  for (const [index, item] of data.items.entries()) {

    // Index
    tracksContainer.appendChild(tableData(index + 1));

    const artists = item.track.artists.map(item => item.name);

    // Image, title, artist
    const trackInfo = tableData(
      `<img src="${item.track.album.images[2].url}" alt="Album Cover Image"/>` +
      `<div>
        <span>${item.track.name}</span>
        <span>${artists.join(", ")}</span>
      </div>`
    );
    trackInfo.classList.add("track-info");
    tracksContainer.appendChild(trackInfo);

    // tableRow.appendChild(tableData(item.track.album.name));

    function tableData(text) {
      const td = document.createElement("DIV");
      td.innerHTML = text;
      return td;
    }
  }
}

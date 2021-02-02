export function displayPlaylists(data) {
  const container = document.getElementById("playlists-container");
  for (const playlist of data.items) {
    // Create playlist container DIV element
    const playlistEl = document.createElement("DIV");
    playlistEl.classList.add("playlist");

    // Add playlist image as IMG element
    const image = document.createElement("IMG");
    image.src = playlist.images[0].url;
    playlistEl.appendChild(image);

    // Add playlist title as P element
    const title = document.createElement("P");
    title.innerHTML = playlist.name;
    playlistEl.appendChild(title);

    // Append playlist element to playlists container
    container.appendChild(playlistEl);
  }
}

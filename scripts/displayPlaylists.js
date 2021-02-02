export function displayPlaylists(data) {
  const container = document.getElementById("playlists-container");
  for (const playlist of data.items) {
    const p = document.createElement("P");
    p.innerHTML = playlist.name;
    container.appendChild(p);
    console.log(playlist);
  }
}

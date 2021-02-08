function filterPlaylists() {
  const onlyOwnerToggle = document.getElementById("playlist-owner");
  const container = document.getElementById("playlists");
  const user = localStorage.getItem("ranker-user");
  if (user) {
    for (const playlist of container.children) {
      console.log(playlist);
      if (playlist.dataset.owner !== user) {
        playlist.style.visibility = "hidden";
      } else {
        playlist.style.visibility = "visible";
      }
    }
  }
}

// Filters playlists in the sidebar according to owner 
function filterPlaylists() {
  const onlyOwnerToggle = document.getElementById("playlist-owner");
  const container = document.getElementById("playlists");
  const user = localStorage.getItem("ranker-user");
  if (user) {
    for (const playlist of container.children) {
      playlist.style.display = "flex";
      if (onlyOwnerToggle.checked && playlist.dataset.owner !== user) {
        playlist.style.display = "none";
      }
    }
  }
}

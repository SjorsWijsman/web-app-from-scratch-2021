import { displayPlaylists } from "./displayPlaylists.js";

// Get data from url
export function getData(accessToken) {
  const userId = "me";
  const baseUrl = "https://api.spotify.com/v1/me";
  const playlistsUrl = `${baseUrl}/playlists?limit=50`;

  fetchData(playlistsUrl, accessToken).then(data => {
    displayPlaylists(data);
  })
}

// Fetch data from Spotify API
export async function fetchData(url, accessToken) {
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  return response.json()
}

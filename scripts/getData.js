// code inspired by: https://github.com/mujibsardar/spotify_jquery_only/blob/master/script.js
// https://www.youtube.com/watch?v=d0FFlTeyAY8

authorizeUser();

// Authorizes the user and redirects if necessary
function authorizeUser() {
  const clientId = "71c1e592b56c424caf9714524949cf26";
  const redirectUrl = "https%3A%2F%2Fsjorswijsman.github.io%2Fweb-app-from-scratch-2021";
  const spotifyRedirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}`;

  // Check for accessToken in hash, redirect if unauthorized
  const accessToken = getAccessToken();
  if (accessToken !== null) {
    getData(accessToken)
  } else {
    window.location.replace(spotifyRedirect);
  }
};

// Get access token from window hash value or return null
function getAccessToken() {
  const hashValue = window.location.hash;
  if (hashValue.includes("access_token=")) {
    // https://stackoverflow.com/questions/14867835/get-substring-between-two-characters-using-javascript
    const accessTokenValue = hashValue
      .split("access_token=").pop()
      .split("&")[0];
    return accessTokenValue;
  } else {
    return null;
  }
};

// Get data from url
function getData(accessToken) {
  const userId = "miwirosj";
  const baseUrl = "https://api.spotify.com/v1";
  const userUrl = `${baseUrl}/users/${userId}`;
  const playlistsUrl = `${userUrl}/playlists`;

  fetchData(playlistsUrl, accessToken).then(data => {
    console.log(data);
  })
}

// Fetch data from Spotify API
async function fetchData(url, accessToken) {
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  return response.json()
}

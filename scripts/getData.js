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
  if (accessToken === null) {
    window.location.replace(spotifyRedirect);
  }
}

// Get access token from window hash value or return null
function getAccessToken() {
  const hashValue = window.location.hash;
  if (hashValue.includes("access_token=")) {
    const accessTokenValue = hashValue
      .split("access_token=").pop()
      .split("&")[0];
    return accessTokenValue;
  } else {
    return null;
  }
}

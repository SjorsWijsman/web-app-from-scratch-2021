// code inspired by: https://github.com/mujibsardar/spotify_jquery_only/blob/master/script.js
// https://www.youtube.com/watch?v=d0FFlTeyAY8
import { getData } from "./getData.js";

// Authorizes the user and redirects if necessary
export async function authUser(forceRedirect = false) {
  const clientId = "71c1e592b56c424caf9714524949cf26";
  // const redirectUrl = "https%3A%2F%2Fsjorswijsman.github.io%2Fweb-app-from-scratch-2021";
  const authRedirect = `https://accounts.spotify.com/authorize` +
    `?client_id=${clientId}` +
    `&scope=playlist-read-private` +
    `&response_type=token` +
    `&redirect_uri=${encodeURIComponent(window.location)}`;

  // Force redirect to spotify authorization
  if (forceRedirect) {
    window.location.replace(authRedirect);
  }

  // Get accessToken from localStorage, if it doesn't exist:
  // Redirect to spotify authorization
  getAccessToken();
  const accessToken = localStorage.getItem("ranker-hash");
  if (accessToken) {
    getUserData(accessToken)
    return accessToken;
  } else {
    window.location.replace(authRedirect);
  }
};

// Get access token from window hash value and store in localStorage
function getAccessToken() {
  const hashValue = window.location.hash;
  if (hashValue.includes("access_token=")) {
    // https://stackoverflow.com/questions/14867835/get-substring-between-two-characters-using-javascript
    const accessTokenValue = hashValue
      .split("access_token=").pop()
      .split("&")[0];
    localStorage.setItem("ranker-hash", accessTokenValue);
    window.location = window.location.href.split('#')[0];
  }
};

function getUserData() {
  getData(`https://api.spotify.com/v1/me`, (data) => {
    console.log(data)
  })
}

// code inspired by: https://github.com/mujibsardar/spotify_jquery_only/blob/master/script.js
// https://www.youtube.com/watch?v=d0FFlTeyAY8
import { fetchData } from "./getData.js";
import { createListFromHash, createHashFromList, removeHashValues } from "./hashTools.js";

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
    getUserData(accessToken);
    return accessToken;
  } else {
    window.location.replace(authRedirect);
  }
};

// Get access token from window hash value and store in localStorage
function getAccessToken() {
  // Create hash list from window hash
  const hashList = createListFromHash(window.location.hash);

  // Check if access_token is in hashList
  for (const value of hashList) {
    if (value[0] === "access_token" && value[1]) {
      // https://stackoverflow.com/questions/14867835/get-substring-between-two-characters-using-javascript
      const accessTokenValue = hashValue
        .split("access_token=").pop()
        .split("&")[0];
      localStorage.setItem("ranker-hash", accessTokenValue);
    }
  }

  // Remove spotify hash values
  const removeList = ["access_token", "token_type", "expires_in"];
  const filteredHashList = removeHashValues(hashList, removeList);

  // Create new hash from filtered hash list
  const newHash = createHashFromList(filteredHashList);

  // Set window hash to new hash without spotify authorization bullshit
  window.location.hash = newHash;
};

// Get current user data, store its id in localStorage and display in app
function getUserData(accessToken) {
  fetchData(`https://api.spotify.com/v1/me`, accessToken).then(data => {
    if (!data.error) {
      localStorage.setItem("ranker-user", data.id);
      document.getElementById("user").innerHTML = data.id;
    } else {
      console.error(data.error);
    }
  });
}

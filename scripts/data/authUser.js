// code inspired by: https://github.com/mujibsardar/spotify_jquery_only/blob/master/script.js
// https://www.youtube.com/watch?v=d0FFlTeyAY8
import { fetchData } from "./getData.js";
import { createListFromHash, createHashFromList, removeHashValues, getLocationWithoutHash } from "../helpers/hashTools.js";

// Authorizes the user and redirects if necessary
export async function authUser(forceRedirect = false) {
  // Force redirect to spotify authorization
  if (forceRedirect) {
    redirectUserToAuth();
  }

  // Get accessToken from localStorage, if it doesn't exist:
  // Redirect to spotify authorization
  getAccessToken();
  const accessToken = localStorage.getItem("ranker-token");
  if (accessToken) {
    cleanUpUrl();
    getUserData(accessToken);
    return accessToken;
  } else {
    redirectUserToAuth();
  }
};

// Get access token from window hash value and store in localStorage
function getAccessToken() {
  // Create hash list from window hash
  const hashList = createListFromHash(window.location.hash);

  // Check if access_token is in hashList
  for (const value of hashList) {
    if (value[0] === "access_token" && value[1]) {
      localStorage.setItem("ranker-token", value[1]);
    }
  }
};

// Removes spotify authorization hash values from url hash
function cleanUpUrl() {
  const hashList = createListFromHash(window.location.hash);

  // Remove spotify hash values
  const removeList = ["access_token", "token_type", "expires_in"];
  const filteredHashList = removeHashValues(hashList, removeList);

  // Create new hash from filtered hash list
  const newHash = createHashFromList(filteredHashList);

  // Set window hash to new hash without spotify authorization bullshit
  if (newHash) {
    window.location.hash = newHash;
  }
}

// Redirect user to spotify authorization
function redirectUserToAuth() {
  // Save current hash to localStorage to restore later
  localStorage.setItem("ranker-hash", window.location.hash);

  const clientId = "71c1e592b56c424caf9714524949cf26";
  const authRedirect = `https://accounts.spotify.com/authorize` +
    `?client_id=${clientId}` +
    `&scope=playlist-read-private` +
    `&response_type=token` +
    `&redirect_uri=${encodeURIComponent(getLocationWithoutHash())}`;

  window.location.replace(authRedirect);
}

// Get current user data, store its id in localStorage and display in app
function getUserData(accessToken) {
  // use fetchData directly to prevent an infinite fetch loop (instead of getData)
  fetchData(`https://api.spotify.com/v1/me`, accessToken)
    .then(data => {
      localStorage.setItem("ranker-user", data.id);
      document.getElementById("user").innerHTML = data.id;
    })
    .catch(e => {
      console.error(e)
    })
}

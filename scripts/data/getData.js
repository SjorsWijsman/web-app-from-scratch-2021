import { authUser } from "./authUser.js";

// Get data from url
export function getData(url, callback) {
  authUser().then(accessToken => {
    fetchData(url, accessToken)
      .then(data => {
        if (data.error) {
          console.error(data.error);
          if (data.error.message === "The access token expired") {
            // Force reauthorization (get a new access token)
            authUser(true);
          }
        } else {
          callback(data)
        }
      })
  });
}

// Fetch data from Spotify API
export async function fetchData(url, accessToken) {
  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });
  return response.json();
}

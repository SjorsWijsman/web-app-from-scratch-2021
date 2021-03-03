# Ranker
Live Demo: https://sjorswijsman.github.io/web-app-from-scratch-2021/  
Ranker allows you to rank the songs in your Spotify playlists, allowing you to easily create top 10/50/etc. playlists. As of right now, this demo only displays the playlists and the first 100 songs in this playlist for authorized Spotify users.

![Preview Screenshot](https://i.ibb.co/YbZxtyb/Screenshot-2021-03-03-at-10-32-00.png)

This project was created as an excercise for the Web Development & Design minor at HvA.

## Table of Contents
<table>
    <tr>
        <td align="center"><a href="#features">Features<a></td>
        <td align="center"><a href="#installation">Installation<a></td>
        <td align="center"><a href="#docs">Docs<a></td>
        <td align="center"><a href="#api">API<a></td>
    </tr>
</table>
          
### Features
- Seamless Spotify API Authorization & Reauthorization in pure JavaScript
- An overview of all your playlists, allowing you to filter by playlist owner
- Displays the first 100 tracks in any playlist by using the playlist ID

TODO:
- Ranking of tracks in playlists
- Playlist Search
- Allowing users to use the app without authorization

### Installation
This project was made developed any dependencies and doesn't require you to install anything. Simply clone this repo and open the index.html file in a modern browser:
```
git clone https://github.com/SjorsWijsman/web-app-from-scratch-2021.git
```
Optionally run a live server by using your preferred Code Editor live server plugin or by running the following command with Python installed:
```
python -m SimpleHTTPServer 8000  
```

### Docs
**Actor Diagram** 
![Actor diagram](https://raw.githubusercontent.com/SjorsWijsman/web-app-from-scratch-2021/6867ef5c13ab387c08f21df0052b6c9d284469c5/docs/actordiagram.svg)

**Interaction Diagram**
![Interaction diagram](https://raw.githubusercontent.com/SjorsWijsman/web-app-from-scratch-2021/6867ef5c13ab387c08f21df0052b6c9d284469c5/docs/interactiondiagram.svg)

### API
Spotify Web API docs: https://developer.spotify.com/documentation/web-api/

_The app performs two fetches from the API after user authorization from these endpoints:_  

1. Get authorized userdata:
```
https://api.spotify.com/v1/me
```
2. Get user's playlists:
```
https://api.spotify.com/v1/me/playlists
```
_When the user opens a playlist or a playlist ID exists in the url hash the app performs a third fetch to get the playlist data from the playlist href:_

3. Get playlist data:
```
https://api.spotify.com/v1/playlists/7qgxBxbFcn4WMBuAD7U6Qj
```
_And a final fetch to get the tracks in this playlist:_

4. Get playlist tracks:
```
https://api.spotify.com/v1/playlists/7qgxBxbFcn4WMBuAD7U6Qj/tracks
```

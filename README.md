Moodie Finder is an ongoing project
Each day as I continue to learn how to add different features I apply them onto this project.
Moodie Finder is a React app that uses Spotify's API to search for different playlists based on moods. 
Although, I have not fully deployed the project as I'm still learning and applying new features but each day I'm getting closer to achieving what I want my app to accomplish. 

PROJECT PROGRESS RESOURCES:
https://developer.spotify.com/documentation/web-api/quick-start/
- I followed these steps shown in this documentation to get me started on what I needed to be able to use Spotify's Web API. 

- I used my own personal Spotify account credentials to register my application.

- Then I provided my application credentials: 
var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri

-Made calls to Spotify's account services
First call: passing in Client ID, scopes and redirect URl
Second call:'/api/token' endpoint passing it to the authorization code and then it returns an access token and also a refresh token
Third call: requests to '/refresh_token' is sent to '/api/token' to generate a new access token once previous token expires

Then now we Run the Application:

Currently, since project is not deployed it is only local, I start my app then it loads my Moodie Finder webpage and I click on Log into Spotify using my personal credentials then it takes my access token and redirects the URl back to Moodie Finder Webpage and you can search in the search bar different keywords example: Happy and then Spotify's API will search for playlists related to Happy and it return a list of different playlists. 
However, right now I'm still learning how to make calls to Spotify's API to not only return images of the playlists but I'd want it to return the tracks as well. Still a work in progress but I hope to finish this project and have everyone be able to use my application <3 

Thank you for taking the time to read about my creation !!!!

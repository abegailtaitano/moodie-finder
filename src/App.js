import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';


function App() {

  const CLIENT_ID = "7195f96ac5444808a620d590a629b89f"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
  }

  setToken(token)

}, [])


const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}

const searchPlaylists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: searchKey,
          type: "playlist"
      }
  })

  setPlaylists(data.playlists.items)
}

const renderPlaylists = () => {
  return playlists.map(playlist => (
      <div key={playlist.id}>
          {playlist.images.length ? <img width={"100%"} src={playlist.images[0].url} alt=""/> : <div>No Image</div>}
          {playlist.name}
      </div>
  ))
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>MOODIE FINDER</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Login to Spotify</a>
          : 

{token ?
    <form onSubmit={searchPlaylists}>
        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        <button type={"submit"}>Search</button>
        <button onClick={logout}>Logout</button>
    </form>

    : <h2>Please login</h2>
}

{renderPlaylists()}
        
      </header>
    </div>
  );
}

export default App;

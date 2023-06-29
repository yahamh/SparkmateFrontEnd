import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { loginUser } from './loginService.js';
import { getFavoriteMovies, getAllMovies} from './movieService'
import axios, { all } from 'axios';


function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let allMovies = [];

  const handleLogin = async () => {
    //loginUser(username);
    getAllMovies().then(res => {
      allMovies = res;
      console.log(allMovies);
    })
    getFavoriteMovies(username);
    setIsLoggedIn(true);
    
    showMovies();
  };
  const showMovies = () => {
    return allMovies.map((movie, index) => (
      <p key={index}>{movie.Title}</p>
    ));
  };
  
  

  // const handleFavoriteMovies = async () => {
  //   getFavoriteMovies(username);
  // };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoggedIn ? (
          <>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
            {/* Add the view for favorite movies here */}
            <p>Available Movies:</p>
            {allMovies.map((movie, index) => (
              <p id={movie.imdbID} key={index}>{movie.Title}</p>
            ))}
            {/* <button onClick={addTofavorite(movie.imdbID)}>Add To Fav</button> */}
            <p>Your favorite movies:</p>
            {/* Render the favorite movies */}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <button onClick={handleLogin}>Login</button>
          </>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

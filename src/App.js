// import logo from './logo.svg';
import React from "react";
import { useState, useEffect } from 'react';
// import { Switch, Route } from "react-router-dom";
import './App.css';
// import NavControls from "./NavControls";
import Skin from "./Skin";
import Radar from "./Radar";
// import Login from "./Login";
// import Logout from "./Logout";
// import Landing from "./Cruise";
// import Profile from "./Profile";
// import Earth from "./Earth";
// import Moon from "./Moon";
// import Mars from "./Mars";
// import NASAtv from "./NASAtv";
// import GoToSpace from "./GoToSpace";
// import Launches from "./Launches";
// import Games from "./Games";

function App() {
  const [currentUser, setCurrentUser] = useState("/");
  const [page, setPage] = useState("/")

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then(setCurrentUser);
  }, []);

  // manual login
  function handleLogin() {
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  // manual logout
  function handleLogout() {
    setCurrentUser(null);
  }


  return (
    <div>
        <Skin />
      {/* <div>
        <button onClick={handleLogout}>Log out</button>
        <button onClick={handleLogin}>Log in</button>
        {currentUser ? <h1>Welcome, {currentUser.username}</h1> : null}
      </div> */}
      
    </div>
  );
 
}

export default App;





// in App.js when created new react app:
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

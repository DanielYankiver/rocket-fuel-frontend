// import logo from './logo.svg';
import React from "react";
import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import NavControls from "./NavControls";
import Skin from "./Skin";
import Login from "./Login";
import Logout from "./Logout";
import Landing from "./Landing";
import Profile from "./Profile";
import Earth from "./Earth";
import Moon from "./Moon";
import Mars from "./Mars";
import NASAtv from "./NASAtv";
import GoToSpace from "./GoToSpace";
import Launches from "./Launches";
import Games from "./Games";

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
      {/* <div>
        <NavControls onChangePage={setPage} />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/abort">
            <Logout />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/cruise">
            <Landing />
          </Route>
          <Route exact path="/profile">
            <Profile currentUser={currentUser}/>
          </Route>
          <Route exact path="/earth">
            <Earth />
          </Route>
          <Route exact path="/moon">
            <Moon />
          </Route>
          <Route exact path="/mars">
            <Mars />
          </Route>
          <Route exact path="/NASAtv">
            <NASAtv />
          </Route>
          <Route exact path="/gotospace">
            <GoToSpace />
          </Route>
          <Route exact path="/launches">
            <Launches />
          </Route>
          <Route exact path="/games">
            <Games />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
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

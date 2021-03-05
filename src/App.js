import React from "react";
import './App.css';
import Skin from "./Skin";


function App() {

  return (
    <div>
        <Skin />
    </div>
  );
  
}

export default App;

// import { useState, useEffect } from 'react';

  // const [currentUser, setCurrentUser] = useState("/");
  // const [page, setPage] = useState("/")

  // // auto-login
  // useEffect(() => {
  //   fetch("http://localhost:3000/me")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }, []);

  // // manual login
  // function handleLogin() {
  //   fetch("http://localhost:3000/me")
  //     .then((r) => r.json())
  //     .then(setCurrentUser);
  // }

  // // manual logout
  // function handleLogout() {
  //   setCurrentUser(null);
  // }

      // {/* <div>
      //   <button onClick={handleLogout}>Log out</button>
      //   <button onClick={handleLogin}>Log in</button>
      //   {currentUser ? <h1>Welcome, {currentUser.username}</h1> : null}
      // </div> */}




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

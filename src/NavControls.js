import React from "react";
import { NavLink } from "react-router-dom"

function NavControls() {
    
    return (
        <nav>
            <NavLink exact to="/">Landing</NavLink>
            <br></br>
            <NavLink to="/profile">Profile</NavLink>
            <br></br>
            <NavLink to="/earth">Earth</NavLink>
            <br></br>
            <NavLink to="/moon">Moon</NavLink>
            <br></br>
            <NavLink to="/mars">Mars</NavLink>
            <br></br>
            <NavLink to="/NASAtv">NASA TV Live</NavLink>
            <br></br>
            <NavLink to="/gotospace">Go to Space</NavLink>
            <br></br>
            <NavLink to="/launches">Launches</NavLink>
            <br></br>
            <NavLink to="/games">Games</NavLink>
            {/* <NavLink to="/rankup">Rank Up</NavLink> */}
        </nav>
    );
}

export default NavControls;

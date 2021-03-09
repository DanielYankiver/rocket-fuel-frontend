import React from "react";
import { NavLink } from "react-router-dom"

function NavControls() {
    
    return (
        <nav>
            <NavLink exact to="/">Launch</NavLink>
            <br></br>
            <NavLink exact to="/abort">Abort</NavLink>
            <br></br>
            <NavLink exact to="/cruise">Landing</NavLink>
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
        </nav>
    );
}

export default NavControls;

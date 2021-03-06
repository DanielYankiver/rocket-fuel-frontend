import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import Abort from "./Abort";
import Launch from "./Launch";
import Landing from "./Cruise";
import Profile from "./Profile";
import Earth from "./Earth";
import Moon from "./Moon";
import Mars from "./Mars";
import NASAtv from "./NASAtv";
import GoToSpace from "./GoToSpace";
import Launches from "./Launches";
import SpaceInvaders from "./SpaceInvaders";


function Cutout() {

    return (
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/launch">
                <Launch />
            </Route>
            <Route exact path="/abort">
                <Abort />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/cruise">
                <Landing />
            </Route>
            <Route exact path="/profile">
                <Profile />
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
            <Route exact path="/spaceinvaders">
                <SpaceInvaders />
            </Route>
            <Route path="*">
                <h1>404 not found</h1>
            </Route>
        </Switch>
    )

    // return (
    //     <>
    //         { display 
    //          ?
    //   <foreignObject 
    //     className="video-player" 
    //     width="847.5" 
    //     height="490"
    //     x="327.4" 
    //     y="153"
    //   >
    //     <ReactPlayer 
    //       className={theClassName} 
    //       volume="0" 
    //       playing="true" 
    //       controls="1" 
    //       modestbranding="1" 
    //       url={theUrl} 
    //       width={847.5}
    //       height={490}
    //     />
    //   </foreignObject>
    //   :
    //   <foreignObject 
    //     className="page-embed" 
    //     width="847.5" 
    //     height="490"
    //     x="327.4" 
    //     y="153"
    //   >
    //     <div>
    //       <embed
    //         src={theSrc}
    //         width={847.5}
    //         height={490}
    //       />
    //      </div>
    //   </foreignObject> }
            
    //     </>

    // )

}

export default Cutout 
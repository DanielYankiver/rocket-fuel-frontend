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
import Hyperspeed from "./Hyperspeed";
import Shoot from "./Shoot";
import Blackhole from "./Blackhole";
import Ocean from "./Ocean";
import Roadster from "./Roadster";
import Futurama from "./Futurama";
import Clouds from "./Clouds";
import AsteroidBelt from "./AsteroidBelt";
import AsteroidHittingEarth from "./AsteroidHittingEarth";
import SpaceWalk from "./SpaceWalk";
import StarTrek from "./StarTrek";
import SpaceCats from "./SpaceCats";
import FlyingSaucers from "./FlyingSaucers";
import Alien from "./Alien";
import DoNotEnter from "./DoNotEnter";
import RickAndMorty from "./RickAndMorty";
import NeonTunnel from "./NeonTunnel";
import Retro from "./Retro";


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
            <Route exact path="/hyperspeed">
                <Hyperspeed />
            </Route>
            <Route exact path="/shoot">
                <Shoot />
            </Route>
            <Route exact path="/blackhole">
                <Blackhole />
            </Route>
            <Route exact path="/ocean">
                <Ocean />
            </Route>
            <Route exact path="/starman">
                <Roadster />
            </Route>
            <Route exact path="/futurama">
                <Futurama />
            </Route>
            <Route exact path="/clouds">
                <Clouds />
            </Route>
            <Route exact path="/asteroid-belt">
                <AsteroidBelt  />
            </Route>
            <Route exact path="/astroid-hitting-earth">
                <AsteroidHittingEarth />
            </Route>
            <Route exact path="/space-walk">
                <SpaceWalk />
            </Route>
            <Route exact path="/star-trek">
                <StarTrek />
            </Route>
            <Route exact path="/space-cats">
                <SpaceCats />
            </Route>
            <Route exact path="/flying-saucers">
                <FlyingSaucers />
            </Route>
            <Route exact path="/alien">
                <Alien />
            </Route>
            <Route exact path="/do-not-enter">
                <DoNotEnter />
            </Route>
            <Route exact path="/rick-and-morty">
                <RickAndMorty />
            </Route>
            <Route exact path="/neon-tunnel">
                <NeonTunnel />
            </Route>
            <Route exact path="/retro">
                <Retro />
            </Route>
            <Route path="*">
                <h1>404 not found</h1>
            </Route>
        </Switch>
    )

}

export default Cutout 
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Logout from "./Logout";
import Cruise from "./Cruise";
import Profile from "./Profile";
import Earth from "./Earth";
import Moon from "./Moon";
import Mars from "./Mars";
import NASAtv from "./NASAtv";
import GoToSpace from "./GoToSpace";
import Launches from "./Launches";
import Games from "./Games";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>       
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/launch">
                        <Logout />
                    </Route>
                    <Route exact path="/abort">
                        <Logout />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/cruise">
                        <Cruise />
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
                    <Route exact path="/games">
                        <Games />
                    </Route>
                    <Route path="*">
                        <h1>404 not found</h1>
                    </Route>
                </Switch>
                {/* <Switch>
                    <Route exact path="/" exact component={Login} />
                    <Route exact path="/abort" component={Logout} />
                    <Route exact path="/cruise" component={Landing} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/earth" component={Earth} />
                    <Route exact path="/moon" component={Moon} />
                    <Route exact path="/mars" component={Mars} />
                    <Route exact path="/NASAtv" component={NASAtv} />
                    <Route exact path="/gotospace" component={GoToSpace } />
                    <Route exact path="/launches" component={Launches} />
                    <Route exact path="/games" component={Games} />
                </Switch> */}
            </Router>
        )
    }
}

{/* <Switch>
  <Route exact path="/profile">
    <Profile currentUser={currentUser}/>
  </Route>

  <Route path="*">
    <h1>404 not found</h1>
  </Route>
</Switch> */}
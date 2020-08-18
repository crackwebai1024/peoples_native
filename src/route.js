import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./containers/Home";
import Picture from "./containers/Picture";
import User from "./containers/User";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" initial="true" />
        <Scene key="picture" component={Picture} title="Picture" />
        <Scene key="user" component={User} title="User" />
      </Scene>
    </Router>
  );
};

export default Routes;

import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Routes = () => (
  <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="home" component={HomeScreen} initial={true} />
      <Scene key="login" component={LoginScreen} title="Login" />
      <Scene key="register" component={RegisterScreen} title="Register" />
    </Stack>
  </Router>
);

export default Routes;

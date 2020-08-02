import React from "react";
import { StyleSheet, Text } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CasesListScreen from "../screens/CasesListScreen";
import FeedScreen from "../screens/FeedScreen";
import DonationsScreen from "../screens/DonationsScreen";
import colors from "../config/colors";
import metrics from "../config/metrics";
import fonts from "../config/fonts";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

/*
TODO: Change the navigation to pure react native
*/
const Routes = () => (
  <Router>
    <Stack key="root" hideNavBar={false}>
      {/* Main */}
      <Scene key="home" component={HomeScreen} title="Home" />

      {/* Authentications */}
      <Scene key="login" component={LoginScreen} title="Login" />
      <Scene key="register" component={RegisterScreen} title="Register" />

      {/* } 
           
          titleStyle={Styles.title} 
      */}

      {/* Tabs */}
      <Scene key="menu" hideNavBar tabs>
        <Scene
          // tabBarLabel={""}
          initial
          key="cases"
          component={CasesListScreen}
          title="Cases"
          hideNavBar={false}
        />
        <Scene
          key="feed"
          component={FeedScreen}
          title="Feed"
          hideNavBar={false}
        />
        <Scene
          key="donations"
          component={DonationsScreen}
          title="Donations"
          hideNavBar={false}
        />
      </Scene>
    </Stack>
  </Router>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.lightSoft,
    textAlign: "center",
    borderTopWidth: 2,
    color: "red",
  },
  navBar: {
    backgroundColor: colors.lightSoft,
    textAlign: "center",
  },
  btnText: {
    color: colors.light,
    fontSize: fonts.medium,
    fontWeight: "bold",
  },
  description: {
    paddingTop: 30,
    color: colors.light,
    fontSize: fonts.medium,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 5,
    marginRight: 2,
  },
  title: {
    flex: 1,
  },
});

export default Routes;

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { color } from "react-native-reanimated";
import { Actions } from "react-native-router-flux";

import colors from "../config/colors";

export default function HomeScreen() {
  const singIn = () => Actions.login();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.primary}
          style="auto"
          barStyle={"light-content"}
        />

        <TouchableOpacity style={styles.logoContainer} onPress={singIn}>
          <View style={styles.logo}>
            <Text style={styles.text}>Logo</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Donate App - React Native</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    width: "100%",
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: colors.dark,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    marginTop: 20,
    paddingVertical: 40,
    width: 150,
    height: 150,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: colors.darkSoft,
    backgroundColor: colors.primary,
  },
  text: {
    flex: 1,
    color: colors.light,
    fontSize: 30,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});

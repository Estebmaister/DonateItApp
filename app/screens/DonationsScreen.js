import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import fonts from "../config/fonts";
import metrics from "../config/metrics";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Case from "../components/Case";

const CasesListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        style="auto"
        barStyle={"dark-content"}
      />
      {/* <ScrollView style={styles.scrollView} decelerationRate={0.92}> */}
      <Title title={"Donations"} />
      <FlatList
        style={styles.scrollView}
        data={cases}
        keyExtractor={(item, index) => item.title + ++index}
        renderItem={({ item, index }) => (
          <Case
            title={item.title + ++index}
            description={item.description}
            image={item.image}
          />
        )}
      />
      {/* </ScrollView> */}
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  scrollView: {
    // marginBottom: metrics.navHeight * 1.1,
    marginTop: -metrics.titleHeight / 3.5,
  },
  text: {
    fontSize: fonts.xLarge,
  },
});

const cases = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title: "Case number ",
    image: require("../assets/app.png"),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title: "Case number ",
    image: require("../assets/app.png"),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title: "Case number ",
    image: require("../assets/app.png"),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title: "Case number ",
    image: require("../assets/app.png"),
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    title: "Case number ",
    image: require("../assets/app.png"),
  },
];

export default CasesListScreen;

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
import Feed from "../components/Feed";

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        style="auto"
        barStyle={"dark-content"}
      />
      <Title title={"Feed"} />
      <FlatList
        style={styles.scrollView}
        data={user}
        keyExtractor={(item, index) => item.case + ++index}
        renderItem={({ item, index }) => (
          <Feed
            index={index}
            name={item.name}
            case={item.case + ++index}
            date={item.date}
          />
        )}
      />
      {/* <Nav /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: colors.dark,
  },
  scrollView: {
    marginTop: -metrics.titleHeight / 3.5,
  },
  text: {
    fontSize: fonts.xLarge,
  },
});

const user = [
  {
    name: "Jean Chayeb",
    case: "Case #",
    date: "Wed 4",
  },
  {
    name: "Esteban Camargo",
    case: "Case #",
    date: "Wed 11",
  },
  {
    name: "Example One",
    case: "Case #",
    date: "Wed 18",
  },
  {
    name: "Example Two",
    case: "Case #",
    date: "Wed 25",
  },
  {
    name: "Another Person",
    case: "Case #",
    date: "Wed 1",
  },
  {
    name: "Example Three",
    case: "Case #",
    date: "Wed 8",
  },
  {
    name: "Example Four",
    case: "Case #",
    date: "Wed 15",
  },
];

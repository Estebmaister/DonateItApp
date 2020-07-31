import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";
import metrics from "../config/metrics";
import { Actions } from "react-native-router-flux";

export default function Nav() {
  const casesView = () => Actions.cases();
  const feedView = () => Actions.feed();
  const donationsView = () => Actions.donations();

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={[styles.btn, styles.casesButton]}
        onPress={casesView}
      >
        <Text style={styles.label}>Cases</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.feedButton]}
        onPress={feedView}
      >
        <Text style={styles.label}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.donationsButton]}
        onPress={donationsView}
      >
        <Text style={styles.label}>My Donations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: metrics.navHeight,
  },

  casesButton: {
    backgroundColor: colors.lightSoft,
  },
  donationsButton: {
    backgroundColor: colors.lightSoft,
  },
  feedButton: {
    backgroundColor: colors.lightSoft,
  },

  label: {
    fontSize: fonts.medium,
    textAlign: "center",
  },

  nav: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: metrics.navHeight,
    backgroundColor: colors.light,
    // bottom: 0,
    // position: "absolute",
    // left: 0,
  },
});

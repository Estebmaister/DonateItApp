import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";
import metrics from "../config/metrics";

export default function Title(props) {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Text style={styles.label}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: metrics.window.width,
    height: metrics.titleHeight,
    zIndex: 1,
    overflow: "hidden",
  },
  container: {
    borderRadius: metrics.window.width / 1.1,
    width: metrics.window.width * 2,
    height: metrics.window.width * 1.6,
    marginLeft: -(metrics.window.width / 2),
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.dark,
  },

  label: {
    textAlign: "center",
    fontSize: fonts.xLarge,
    fontWeight: "bold",
    color: colors.light,

    height: metrics.titleHeight,
    width: metrics.window.width,
    position: "absolute",
    bottom: -(metrics.titleHeight / 4),
    marginLeft: metrics.window.width / 2,
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";
import metrics from "../config/metrics";

const checkIndexIsFirst = (n) => n === 0;

export default function Case(props) {
  const [isViewed, setIsViewed] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          display: isViewed ? "none" : "flex",
        },
        {
          marginTop: checkIndexIsFirst(props.index) ? metrics.titleHeight : 0,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.touchName}>
          <Text style={[styles.text, styles.textName]}>{props.name}</Text>
        </TouchableOpacity>
        <Button
          disabled={isViewed}
          title={isViewed ? "Deleted" : "Delete"}
          onPress={() => (isViewed ? setIsViewed(false) : setIsViewed(true))}
        />
        <Text style={styles.text}>
          donates goods for {props.case} on {props.date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.dark,
    padding: 20,
    borderColor: "white",
    borderTopWidth: 2,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: {
    color: colors.light,
    fontSize: fonts.small,
  },
  textName: {
    fontSize: fonts.medium,
  },
  touchName: {
    paddingRight: 5,
    paddingVertical: 5,
  },
});

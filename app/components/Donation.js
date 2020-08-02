import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";

const checkIndexIsEven = (n) => n % 2 == 0;

export default function Case(props) {
  const [isViewed, setIsViewed] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textContainer,
          { borderRightWidth: checkIndexIsEven(props.index) ? 0 : 1, flex: 1 },
        ]}
      >
        <Text style={styles.text}>{props.date}</Text>
      </View>

      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => (isViewed ? setIsViewed(false) : setIsViewed(true))}
      >
        <Text
          style={[styles.text, { fontWeight: isViewed ? "bold" : "normal" }]}
        >
          {props.case}
        </Text>
      </TouchableOpacity>

      <View
        style={[
          styles.textContainer,
          { borderLeftWidth: checkIndexIsEven(props.index) ? 0 : 1, flex: 1 },
        ]}
      >
        <Text style={styles.text}>{props.amount}$</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  text: {
    color: colors.light,
    fontSize: fonts.medium,
    textAlign: "center",
  },
  textContainer: {
    paddingVertical: "5%",
    borderColor: colors.lightSoft,
    flex: 2,
    justifyContent: "center",
    height: "100%",
  },
});

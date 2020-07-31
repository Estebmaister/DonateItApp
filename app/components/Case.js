import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";

export default function Case(props) {
  const [isViewed, setIsViewed] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.image} />
        </View>

        <TouchableOpacity style={styles.title}>
          <Text style={styles.titleText}>{props.title}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>{props.description}</Text>

      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => (isViewed ? setIsViewed(false) : setIsViewed(true))}
      >
        <Text style={styles.btnText}>{isViewed ? "Clicked" : "View"}</Text>
      </TouchableOpacity>
      {/* <Button
        disabled={isViewed}
        style={[styles.btn]}
        title={isViewed ? "Clicked" : "View"}
        onPress={() => (isViewed ? setIsViewed(false) : setIsViewed(true))}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "flex-end",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    marginTop: 20,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    // borderWidth: 2,
  },
  btnText: {
    color: colors.light,
    fontSize: fonts.medium,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
    marginHorizontal: "5%",
    padding: 20,
    backgroundColor: colors.dark,
    borderRadius: 4,
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
  imageContainer: {
    width: "30%",
  },
  titleContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
  },
  titleText: {
    color: colors.light,
    fontSize: fonts.large,
    textAlign: "center",
  },
});

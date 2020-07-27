// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  let x = 1;
  console.log("App executed");
  console.log(useDimensions());
  console.log(Dimensions.get("screen"));
  console.log(Dimensions.get("window"));
  const handlePress = () => alert(StatusBar);

  // SafeAreaView it's only safe in iOS
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="click Me"
        onPress={() =>
          Alert.alert("My Title", "Do you want an alert?", [
            { text: "Yes", onPress: handlePress },
            { text: "No" },
          ])
        }
      />
      <Text numberOfLines={0} onPress={handlePress}>
        Hello from App.js! - A really really long text. Now I wanna make it even
        longer and see what happens!
      </Text>
      <TouchableOpacity
        onPress={() =>
          Alert.prompt("My Title", "Do you want an alert?", (text) =>
            alert(text)
          )
        } //Only works on iOS
      >
        <Image source={require("./assets/icon.png")} />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => {}}>
        <Image
          blurRadius={6}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
        }}
      ></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

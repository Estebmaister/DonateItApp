// import { StatusBar } from "expo-status-bar"; // The expo auto configuration of the StatusBar
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
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  let x = 1;
  console.log("App executed: ", x);
  // console.log(useDimensions());
  // console.log(Dimensions.get("screen"));
  // console.log(Dimensions.get("window"));
  const handlePress = () => alert(StatusBar);
  const { landscape } = useDeviceOrientation();

  // SafeAreaView it's only safe in iOS 07/2020
  return (
    //   <Button
    //     title="click Me"
    //     onPress={() =>
    //       Alert.alert("My Title", "Do you want an alert?", [
    //         { text: "Yes", onPress: handlePress },
    //         { text: "No" },
    //       ])
    //     }
    //   />
    //   <Text numberOfLines={0} onPress={handlePress}>
    //     Hello from App.js! - A really really long text. Now I wanna make it even
    //     longer and see what happens!
    //   </Text>
    //   <TouchableOpacity
    //     onPress={() =>
    //       Alert.prompt("Title", "message alert?", (text) => alert(text))
    //     } //Only works on iOS
    //   >
    //     <Image source={require("./assets/icon.png")} />
    //   </TouchableOpacity>
    //   <TouchableHighlight onPress={() => {}}>
    //     <Image
    //       blurRadius={6}
    //       fadeDuration={1000}
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     />
    //   </TouchableHighlight>
    //
    //   <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: "100%",
    //       height: landscape ? "100%" : "30%",
    //     }}
    //   ></View>
    <SafeAreaView style={styles.container}>
      <RegisterScreen />
      {/* <StatusBar style={{ color: "#fff" }} /> **/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center", // Secondary axis
    justifyContent: "center", // Primary axis
    flexWrap: "wrap",
    alignContent: "center", // Only on multiline
  },
});

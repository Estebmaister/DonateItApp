import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
import Routes from "./app/components/Routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> **/}
      {/* <ViewImageScreen /> **/}
      {/* <RegisterScreen /> **/}
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

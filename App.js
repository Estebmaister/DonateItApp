import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Routes from "./app/components/Routes";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import CasesListScreen from "./app/screens/CasesListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <CasesListScreen /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Actions } from "react-native-router-flux";

import colors from "../config/colors";
import fonts from "../config/fonts";

export default function RegisterScreen() {
  const singUp = () => Actions.register();
  const casesView = () => Actions.menu();
  let password;

  return (
    <View style={styles.registerContainer}>
      <StatusBar backgroundColor={colors.primary} barStyle={"dark-content"} />

      <Text style={styles.header}> Login </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Your Email"
        placeholderTextColor={colors.lightSoft}
        underlineColorAndroid={"transparent"}
        keyboardType={"email-address"}
        onSubmitEditing={() => password.focus()}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Your Password"
        placeholderTextColor={colors.lightSoft}
        secureTextEntry={true}
        underlineColorAndroid={"transparent"}
        ref={(input) => (password = input)}
      />

      <TouchableOpacity style={styles.btn} onPress={casesView}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.signTextCont}>
        <Text style={styles.signText}>Do not have an account yet?</Text>
        <TouchableOpacity onPress={singUp}>
          <Text style={styles.signButton}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.primary,
    marginTop: 30,
  },
  btnText: {
    color: colors.light,
    fontWeight: "bold",
  },
  header: {
    fontSize: fonts.large,
    color: colors.light,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: colors.darkSoft,
    borderBottomWidth: 1,
  },
  registerContainer: {
    flex: 1,
    justifyContent: "center", // Primary axis
    backgroundColor: colors.dark,
    paddingLeft: 60,
    paddingRight: 60,
  },

  signTextCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 16,
  },
  signText: {
    color: colors.lightSoft,
    fontSize: fonts.small,
  },
  signButton: {
    color: colors.light,
    fontSize: fonts.small,
    fontWeight: "500",
  },
  textInput: {
    fontSize: fonts.xSmall,
    height: 40,
    marginBottom: 30,
    color: colors.light,
    borderBottomColor: colors.lightSoft,
    borderBottomWidth: 1,
  },
});

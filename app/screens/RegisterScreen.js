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

export default function RegisterScreen() {
  const singIn = () => Actions.pop();
  let email, password, repeatPassword;

  return (
    <View style={styles.registerContainer}>
      <StatusBar backgroundColor={colors.primary} barStyle={"dark-content"} />

      <Text style={styles.header}> Registration </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Your Name"
        placeholderTextColor={colors.lightSoft}
        underlineColorAndroid={"transparent"}
        onSubmitEditing={() => email.focus()}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Your Email"
        placeholderTextColor={colors.lightSoft}
        underlineColorAndroid={"transparent"}
        keyboardType={"email-address"}
        ref={(input) => (email = input)}
        onSubmitEditing={() => password.focus()}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Your Password"
        placeholderTextColor={colors.lightSoft}
        secureTextEntry={true}
        underlineColorAndroid={"transparent"}
        ref={(input) => (password = input)}
        onSubmitEditing={() => repeatPassword.focus()}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Repeat Password"
        placeholderTextColor={colors.lightSoft}
        secureTextEntry={true}
        underlineColorAndroid={"transparent"}
        ref={(input) => (repeatPassword = input)}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signTextCont}>
        <Text style={styles.signText}>Do you already have an account?</Text>
        <TouchableOpacity onPress={singIn}>
          <Text style={styles.signButton}> Sign In</Text>
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
    fontSize: 24,
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
    fontSize: 16,
  },
  signButton: {
    color: colors.light,
    fontSize: 16,
    fontWeight: "500",
  },
  textInput: {
    height: 40,
    marginBottom: 30,
    color: colors.light,
    borderBottomColor: colors.lightSoft,
    borderBottomWidth: 1,
  },
});

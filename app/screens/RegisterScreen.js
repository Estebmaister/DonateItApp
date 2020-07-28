import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import colors from "../config/colors";

export default function RegisterScreen() {
  let email, password, repeatPassword;
  return (
    <View style={styles.registerContainer}>
      <StatusBar backgroundColor={colors.primary} barStyle={"light-content"} />
      <Text style={styles.header}> Registration </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Your Name"
        underlineColorAndroid={"transparent"}
        onSubmitEditing={() => email.focus()}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your Email"
        underlineColorAndroid={"transparent"}
        keyboardType={"email-address"}
        ref={(input) => (email = input)}
        onSubmitEditing={() => password.focus()}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your Password"
        secureTextEntry={true}
        underlineColorAndroid={"transparent"}
        ref={(input) => (password = input)}
        onSubmitEditing={() => repeatPassword.focus()}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Repeat Password"
        secureTextEntry={true}
        underlineColorAndroid={"transparent"}
        ref={(input) => (repeatPassword = input)}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
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
  textInput: {
    height: 40,
    marginBottom: 30,
    color: colors.light,
    borderBottomColor: colors.lightSoft,
    borderBottomWidth: 1,
  },
});

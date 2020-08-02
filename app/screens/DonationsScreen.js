import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import fonts from "../config/fonts";
import metrics from "../config/metrics";
import Nav from "../components/Nav";
import Title from "../components/Title";
import Donation from "../components/Donation";

const DonationsList = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        style="auto"
        barStyle={"dark-content"}
      />
      {/* <ScrollView style={styles.scrollView} decelerationRate={0.92}> */}
      <Title title={"My Donations"} />
      <View style={styles.donationBar}>
        <Text style={styles.textBar}>Date</Text>
        <Text style={styles.textBar}>Case</Text>
        <Text style={styles.textBar}>Amount</Text>
      </View>
      <FlatList
        style={styles.scrollView}
        data={cases}
        keyExtractor={(item, index) => item.case + ++index}
        renderItem={({ item, index }) => (
          <Donation
            case={item.case + ++index}
            amount={item.amount}
            date={item.date}
          />
        )}
      />
      {/* </ScrollView> */}
      {/* <Nav /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: colors.dark,
  },
  donationBar: {
    marginTop: metrics.titleHeight / 3.5,
    marginBottom: metrics.titleHeight / 3.5,
    marginHorizontal: "5%",
    paddingHorizontal: 10,
    paddingVertical: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.lightSoft,
    borderBottomWidth: 1,
  },
  textBar: {
    width: "30%",
    fontSize: fonts.large,
    color: colors.light,
    textAlign: "center",
  },
  scrollView: {
    // marginBottom: metrics.navHeight * 1.1,
  },
  text: {
    fontSize: fonts.xLarge,
  },
});

const cases = [
  {
    amount: "60",
    case: "Case number ",
    date: "Wed 4",
  },
  {
    amount: "50",
    case: "Case number ",
    date: "Fri 6",
  },
  {
    amount: "80",
    case: "Case number ",
    date: "Sat 7",
  },
  {
    amount: "60",
    case: "Case number ",
    date: "Mon 9",
  },
  {
    amount: "70",
    case: "Case number ",
    date: "Wed 11",
  },
  {
    amount: "40",
    case: "Case number ",
    date: "Wed 18",
  },
  {
    amount: "10",
    case: "Case number ",
    date: "Thu 19",
  },
  {
    amount: "80",
    case: "Case number ",
    date: "Fri 20",
  },
  {
    amount: "20",
    case: "Case number ",
    date: "Mon 23",
  },
  {
    amount: "50",
    case: "Case number ",
    date: "Tue 24",
  },
];

export default DonationsList;

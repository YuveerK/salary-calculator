import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ExpensesHeader = () => (
  <View style={styles.headerRow}>
    <Ionicons name="card" size={34} color="#4EFFA1" />
    <Text style={styles.header}>Monthly Expenses</Text>
  </View>
);

export default ExpensesHeader;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "900",
    color: "white",
  },
});

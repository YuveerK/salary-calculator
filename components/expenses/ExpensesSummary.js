import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import RemainingSalaryBar from "./RemainingSalaryBar";

const ExpensesSummary = ({ totalExpenses, updatedNet, originalNet }) => (
  <LinearGradient
    colors={["#121212", "#0D0D0D"]}
    style={styles.summaryContainer}
  >
    {/* TOTAL EXPENSES */}
    <View style={styles.summaryBlock}>
      <Text style={styles.summaryLabel}>Total Expenses</Text>
      <Text style={styles.summaryValue}>
        R {totalExpenses.toLocaleString()}
      </Text>
    </View>

    {/* UPDATED NET */}
    <View style={styles.summaryBlock}>
      <Text style={styles.summaryLabel}>Updated Net Salary</Text>
      <Text style={styles.summaryNet}>R {updatedNet.toLocaleString()}</Text>
    </View>

    {/* REMAINING SALARY BAR */}
    <View style={{ marginTop: 12 }}>
      <RemainingSalaryBar originalNet={originalNet} updatedNet={updatedNet} />
    </View>
  </LinearGradient>
);

export default ExpensesSummary;

const styles = StyleSheet.create({
  summaryContainer: {
    padding: 22,
    marginBottom: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  summaryBlock: { marginBottom: 18 },
  summaryLabel: { color: "#8C8C8C", fontSize: 14 },
  summaryValue: {
    color: "red",
    fontSize: 26,
    fontWeight: "800",
  },
  summaryNet: {
    color: "#4EFFA1",
    fontSize: 30,
    fontWeight: "900",
  },
});

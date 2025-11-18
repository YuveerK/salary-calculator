import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BreakdownItem from "./BreakdownItem";

const BreakdownSection = ({ details }) => (
  <View style={styles.breakdownContainer}>
    <Text style={styles.breakdownTitle}>📊 Detailed Breakdown</Text>

    {/* INCOME */}
    <BreakdownItem
      label="Gross Monthly Salary"
      value={details.gross}
      color="green"
      explanation="This is your full salary before any deductions such as tax or UIF."
    />

    <BreakdownItem
      label="Annual Salary"
      value={details.annual}
      color="blue"
      explanation="Your yearly income before tax and other deductions (monthly × 12)."
    />

    {/* TAX CALCULATIONS */}
    <BreakdownItem
      label="Tax Before Rebates"
      value={details.taxBeforeRebate}
      color="red"
      explanation="The tax calculated based on SARS tax brackets before applying any rebates."
    />

    {/* REBATE */}
    <BreakdownItem
      label="Rebate Applied"
      value={details.rebate}
      color="purple"
      explanation="A tax discount given automatically by SARS depending on your age."
    />

    {/* PAYE */}
    <BreakdownItem
      label="Annual PAYE After Rebate"
      value={details.annualPAYE}
      color="red"
      explanation="PAYE (Pay As You Earn) is the actual tax you pay after rebates are deducted."
    />

    <BreakdownItem
      label="Monthly PAYE"
      value={details.paye}
      color="red"
      explanation="This is how much tax is taken from your salary every month by your employer."
    />

    {/* UIF */}
    <BreakdownItem
      label="UIF"
      value={details.uif}
      color="red"
      explanation="UIF (Unemployment Insurance Fund) is a mandatory 1% contribution that provides financial relief if needed."
    />
  </View>
);

export default BreakdownSection;

const styles = StyleSheet.create({
  breakdownContainer: {
    marginTop: 35,
    marginBottom: 40,
    padding: 22,
    borderRadius: 20,
    backgroundColor: "#0F0F0F",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  breakdownTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#4EFFA1",
    marginBottom: 20,
  },
});

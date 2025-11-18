import { View, Text, StyleSheet } from "react-native";
import React from "react";

const colors = {
  green: "#4EFFA1",
  red: "#FF4E4E",
  blue: "#4EA2FF",
  purple: "#B56CFF",
  default: "#FFFFFF",
};

const BreakdownItem = ({ label, value, color = "default", explanation }) => (
  <View style={styles.rowWrapper}>
    <View style={styles.row}>
      <Text style={[styles.label, { color: colors[color] }]}>{label}</Text>
      <Text style={[styles.value, { color: colors[color] }]}>
        R {Number(value).toLocaleString()}
      </Text>
    </View>

    {explanation && <Text style={styles.explanation}>{explanation}</Text>}
  </View>
);

export default BreakdownItem;

const styles = StyleSheet.create({
  rowWrapper: {
    marginBottom: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
  },
  explanation: {
    marginTop: 6,
    color: "#8C8C8C",
    fontSize: 13,
    lineHeight: 18,
  },
});

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ExpenseItem = ({ name, amount, onDelete }) => (
  <View style={styles.card}>
    <View style={styles.left}>
      <Ionicons name="cash-outline" size={22} color="#4EFFA1" />
      <Text style={styles.name}>{name}</Text>
    </View>

    <View style={styles.right}>
      <Text style={styles.amount}>R {amount.toLocaleString()}</Text>

      <TouchableOpacity onPress={onDelete}>
        <Ionicons name="trash-outline" size={22} color="#ff4d4d" />
      </TouchableOpacity>
    </View>
  </View>
);

export default ExpenseItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  amount: {
    color: "#4EFFA1",
    fontSize: 18,
    fontWeight: "800",
  },
});

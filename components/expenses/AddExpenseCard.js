import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AddExpenseCard = ({ name, setName, amount, setAmount, onAdd }) => (
  <LinearGradient colors={["#1A1A1A", "#0D0D0D"]} style={styles.card}>
    <TextInput
      placeholder="Expense Name"
      placeholderTextColor="#777"
      value={name}
      onChangeText={setName}
      style={styles.input}
    />

    <TextInput
      placeholder="Amount"
      placeholderTextColor="#777"
      keyboardType="numeric"
      value={amount}
      onChangeText={setAmount}
      style={styles.input}
    />

    <TouchableOpacity style={styles.btn} onPress={onAdd}>
      <Text style={styles.btnText}>Add Expense</Text>
    </TouchableOpacity>
  </LinearGradient>
);

export default AddExpenseCard;

const styles = StyleSheet.create({
  card: {
    padding: 22,
    borderRadius: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  input: {
    backgroundColor: "#0A0A0A",
    padding: 16,
    borderRadius: 12,
    color: "white",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1f1f1f",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#4EFFA1",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 6,
  },
  btnText: {
    fontWeight: "800",
    color: "black",
    fontSize: 16,
  },
});

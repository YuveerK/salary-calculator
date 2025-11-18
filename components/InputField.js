import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const InputField = ({ salary, setSalary }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Enter Your Monthly Salary</Text>

      <LinearGradient
        colors={["#1A1A1A", "#0F0F0F"]}
        style={styles.inputWrapper}
      >
        <TextInput
          value={salary}
          onChangeText={setSalary}
          placeholder="e.g. 45000"
          placeholderTextColor="#666"
          keyboardType="numeric"
          style={styles.input}
        />
      </LinearGradient>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
  },
  inputLabel: {
    color: "#4EFFA1",
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600",
  },
  inputWrapper: {
    borderRadius: 14,
    padding: 2,
  },
  input: {
    backgroundColor: "#0A0A0A",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: "white",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },
});

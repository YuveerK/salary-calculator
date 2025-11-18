import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const CalculateButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <LinearGradient
      colors={["#4EFFA1", "#2FB97A"]}
      style={styles.buttonGradient}
    >
      <Text style={styles.buttonText}>Calculate Salary</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default CalculateButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    overflow: "hidden",
    marginTop: 40,
  },
  buttonGradient: {
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
});

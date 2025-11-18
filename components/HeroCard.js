import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const HeroCard = ({ details, salary }) => {
  return (
    <LinearGradient
      colors={["#1A1A1A", "#0D0D0D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.heroCard}
    >
      <Text style={styles.heroTitle}>2026 Net Salary</Text>

      <Text style={styles.heroAmount}>
        R {details ? details.net.toLocaleString() : "0.00"}
      </Text>

      <Text style={styles.heroCaption}>
        {salary
          ? "Press calculate to view full breakdown"
          : "Enter your salary to begin"}
      </Text>
    </LinearGradient>
  );
};

export default HeroCard;

const styles = StyleSheet.create({
  heroCard: {
    marginTop: 30,
    padding: 24,
    borderRadius: 20,
    shadowColor: "#4EFFA1",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  heroTitle: {
    color: "#4EFFA1",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  heroAmount: {
    fontSize: 42,
    fontWeight: "900",
    color: "white",
    letterSpacing: 1,
  },
  heroCaption: {
    marginTop: 6,
    color: "#777",
    fontSize: 14,
  },
});

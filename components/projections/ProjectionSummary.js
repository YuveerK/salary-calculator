import { View, Text, StyleSheet } from "react-native";

const ProjectionSummary = ({
  years,
  finalValue,
  totalContributions,
  interestEarned,
}) => {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryLabel}>
        Projected Value after {years} years
      </Text>
      <Text style={styles.summaryValue}>R {finalValue.toLocaleString()}</Text>

      <Text style={styles.summaryLabel}>Total Contributions</Text>
      <Text style={styles.summaryValueSmall}>
        R {totalContributions.toLocaleString()}
      </Text>

      <Text style={styles.summaryLabel}>Interest Earned</Text>
      <Text style={styles.summaryValueSmall}>
        R {interestEarned.toLocaleString()}
      </Text>
    </View>
  );
};

export default ProjectionSummary;

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(78,255,161,0.3)",
    marginBottom: 60,
  },
  summaryLabel: {
    color: "#888",
    fontSize: 14,
    marginBottom: 6,
  },
  summaryValue: {
    color: "#4EFFA1",
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 6,
  },
  summaryValueSmall: {
    color: "#4EFFA1",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },
});

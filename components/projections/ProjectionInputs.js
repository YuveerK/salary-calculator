import { View, Text, TextInput, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const ProjectionInputs = ({
  lumpSum,
  setLumpSum,
  monthlyContribution,
  setMonthlyContribution,
  updatedNet,
  annualRate,
  setAnnualRate,
  years,
  setYears,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.subLabel}>Lump Sum (today)</Text>
      <TextInput
        style={styles.input}
        placeholder="R 0"
        placeholderTextColor="#555"
        keyboardType="numeric"
        value={lumpSum.toString()}
        onChangeText={(t) => setLumpSum(Number(t) || 0)}
      />

      <Text style={styles.subLabel}>Monthly Contribution</Text>
      <TextInput
        style={styles.input}
        placeholder={`R ${updatedNet.toLocaleString()}`}
        placeholderTextColor="#555"
        keyboardType="numeric"
        value={monthlyContribution.toString()}
        onChangeText={(t) => setMonthlyContribution(Number(t) || 0)}
      />

      <Text style={styles.subLabel}>
        Expected Annual Growth: {(annualRate * 100).toFixed(1)}%
      </Text>
      <Slider
        minimumValue={0.01}
        maximumValue={0.2}
        step={0.005}
        value={annualRate}
        onValueChange={(v) => setAnnualRate(v)}
        minimumTrackTintColor="#4EFFA1"
        maximumTrackTintColor="#333"
      />

      <Text style={styles.subLabel}>Term: {years} years</Text>
      <Slider
        minimumValue={1}
        maximumValue={40}
        step={1}
        value={years}
        onValueChange={(v) => setYears(Math.floor(v))}
        minimumTrackTintColor="#4EFFA1"
        maximumTrackTintColor="#333"
      />
    </View>
  );
};

export default ProjectionInputs;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(78,255,161,0.3)",
  },
  subLabel: {
    color: "#AAA",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    fontSize: 18,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
});

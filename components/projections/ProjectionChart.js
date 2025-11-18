import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const ProjectionChart = ({
  chartDataInvestment,
  chartDataContributions,
  maxScaled,
}) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.yAxisLabel}>Value (Millions R)</Text>

      <LineChart
        data={chartDataInvestment}
        data2={chartDataContributions}
        color="#4EFFA1"
        color2="#4EB1FF"
        curved
        curved2
        thickness={3}
        thickness2={3}
        startFillColor="rgba(78,255,161,0.15)"
        endFillColor="rgba(78,255,161,0.05)"
        hideDataPoints={false}
        spacing={40}
        hideRules={true}
        yAxisLabelWidth={50}
        yAxisTextStyle={{ color: "white", fontSize: 11 }}
        xAxisLabelTextStyle={{ color: "white" }}
        xAxisThickness={0}
        yAxisThickness={0}
        height={260}
        maxValue={maxScaled}
      />
    </View>
  );
};

export default ProjectionChart;

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(78,255,161,0.3)",
  },
  yAxisLabel: {
    color: "#5affc7",
    fontSize: 14,
    marginBottom: 10,
  },
});

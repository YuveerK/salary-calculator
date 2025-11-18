import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";

const screenWidth = Dimensions.get("screen").width - 40;

const RemainingSalaryBar = ({ originalNet, updatedNet }) => {
  const progress = useSharedValue(0);

  // Percentage of salary left (0 → 1)
  const percentage = originalNet > 0 ? updatedNet / originalNet : 0;
  const remainingPercent = Math.max(0, Math.min(1, percentage));

  useEffect(() => {
    progress.value = withTiming(remainingPercent, {
      duration: 600,
    });
  }, [remainingPercent]);

  const animatedStyle = useAnimatedStyle(() => {
    const animatedWidth = progress.value * screenWidth;

    // Color thresholds:
    // 1. 100% → 60% (green)
    // 2. 60% → 30% (yellow/orange)
    // 3. 30% → 0% (red)

    const backgroundColor = interpolateColor(
      progress.value,
      [0, 0.3, 0.6, 1],
      ["#FF4D4D", "#FF8C42", "#F5D547", "#4EFFA1"]
    );

    return {
      width: animatedWidth,
      backgroundColor,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remaining Salary</Text>

      {/* Background Bar */}
      <View style={styles.barBackground}>
        <Animated.View style={[styles.barFill, animatedStyle]} />
      </View>

      {/* Labels */}
      <View style={styles.row}>
        <Text style={styles.label}>R {updatedNet.toLocaleString()}</Text>
        <Text style={styles.percent}>
          {(remainingPercent * 100).toFixed(0)}%
        </Text>
      </View>
    </View>
  );
};

export default RemainingSalaryBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 25,
  },
  title: {
    color: "#4EFFA1",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  barBackground: {
    width: "100%",
    height: 22,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.06)",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 12,
  },
  row: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  percent: {
    color: "#888",
    fontSize: 14,
  },
});

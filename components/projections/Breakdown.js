import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const Breakdown = ({ visible }) => {
  const opacity = useSharedValue(0);

  // Animate on visible change
  useEffect(() => {
    if (visible) {
      // Fade IN
      opacity.value = withTiming(1, { duration: 300 });
    } else {
      // Fade OUT
      opacity.value = withTiming(0, { duration: 250 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.explainCard, animatedStyle]}>
      <Text style={styles.explainHeader}>Understanding Your Projection</Text>

      <Text style={styles.explainTitle}>📌 What the values mean</Text>
      <Text style={styles.explainText}>
        Your investment projection estimates how your money grows over time,
        based on the lump sum you invest today, your monthly contributions, and
        the expected annual growth rate.
      </Text>

      <Text style={styles.explainTitle}>💰 Lump Sum</Text>
      <Text style={styles.explainText}>
        This is the amount you invest once-off today. It immediately starts
        compounding at the expected annual growth rate.
      </Text>

      <Text style={styles.explainTitle}>📆 Monthly Contributions</Text>
      <Text style={styles.explainText}>
        This is the amount you add every month. These contributions also grow
        with compound interest. The earlier they are added, the more time they
        have to grow.
      </Text>

      <Text style={styles.explainTitle}>📈 Expected Annual Growth</Text>
      <Text style={styles.explainText}>
        This is the percentage return your investment is expected to earn every
        year. It includes market growth, dividends, and reinvested gains.
      </Text>

      <Text style={styles.explainTitle}>🧮 How the growth is calculated</Text>
      <Text style={styles.explainText}>
        Your projection uses monthly compounding. The mathematical formula is:
      </Text>

      <Text style={styles.formula}>
        Future Value = P × (1 + r/n)^(n×t)
        {"\n"}+ M × [( (1 + r/n)^(n×t) − 1 ) / (r/n)]
      </Text>

      <Text style={styles.explainText}>
        P = lump sum {"\n"}M = monthly contribution {"\n"}r = annual growth rate{" "}
        {"\n"}n = compounding periods per year (12) {"\n"}t = number of years
      </Text>

      <Text style={styles.explainTitle}>
        📊 Why the graph is shown in millions
      </Text>
      <Text style={styles.explainText}>
        Investment values grow very quickly over time, especially with compound
        interest. Showing the graph in millions makes it easier to compare
        growth trends without compressing the curve into a flat line.
      </Text>

      <Text style={styles.explainTitle}>🟩 Green Line – Investment Growth</Text>
      <Text style={styles.explainText}>
        This line shows the total value of your investment over time, including
        compound interest. It curves upward because interest earns more interest
        as time goes on.
      </Text>

      <Text style={styles.explainTitle}>🔵 Blue Line – Your Contributions</Text>
      <Text style={styles.explainText}>
        This line shows the total amount you have personally contributed. It
        grows in a straight line because you are adding the same amount each
        month, without investment growth.
      </Text>

      <Text style={styles.explainTitle}>
        💡 The difference between the lines
      </Text>
      <Text style={styles.explainText}>
        The vertical space between the two lines represents pure investment
        growth — money earned from returns, not from your own pocket. This gap
        widens dramatically over long periods thanks to compound interest.
      </Text>

      <Text style={styles.explainFooter}>
        This projection is an estimate and actual performance may vary based on
        market conditions.
      </Text>
    </Animated.View>
  );
};

export default Breakdown;

const styles = StyleSheet.create({
  explainCard: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(78,255,161,0.3)",
    marginBottom: 80,
  },

  explainHeader: {
    color: "#4EFFA1",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 14,
  },

  explainTitle: {
    color: "#5affc7",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 4,
  },

  explainText: {
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20,
  },

  formula: {
    marginTop: 8,
    marginBottom: 8,
    color: "#4EFFA1",
    fontWeight: "bold",
    fontSize: 13,
    lineHeight: 20,
    backgroundColor: "rgba(78,255,161,0.1)",
    padding: 10,
    borderRadius: 8,
  },

  explainFooter: {
    color: "#666",
    fontSize: 12,
    marginTop: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
});

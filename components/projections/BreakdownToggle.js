import { Text, StyleSheet } from "react-native";

const BreakdownToggle = ({ showBreakdown, setShowBreakdown }) => {
  return (
    <Text
      style={styles.toggle}
      onPress={() => setShowBreakdown((prev) => !prev)}
    >
      {showBreakdown ? "Hide Explanation ▲" : "Show Explanation ▼"}
    </Text>
  );
};

export default BreakdownToggle;

const styles = StyleSheet.create({
  toggle: {
    color: "#4EFFA1",
    fontSize: 18,
    marginBottom: 10,
  },
});

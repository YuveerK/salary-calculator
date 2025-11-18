import { StyleSheet, Text, View, ScrollView, Keyboard } from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import InputField from "../components/InputField";
import HeroCard from "../components/HeroCard";
import CalculateButton from "../components/CalculateButton";
import BreakdownSection from "../components/BreakdownSection";
import { calculateNetSalary2026 } from "../utils/nett-salary-calculation.util";
import { useAtom } from "jotai";
import { salaryAtom, salaryDetailsAtom } from "../store/salaryAtoms";

const Home = () => {
  const [salary, setSalary] = useAtom(salaryAtom);
  const [details, setDetails] = useAtom(salaryDetailsAtom);
  const insets = useSafeAreaInsets();
  function handleCalculate() {
    if (!salary) return;
    const result = calculateNetSalary2026(Number(salary));
    setDetails(result);
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container} edges={"bottom"}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120, paddingTop: insets.top }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>💼 Salary Tracker</Text>
          <Text style={styles.subtitle}>
            Your money, beautifully visualised
          </Text>
        </View>

        <InputField salary={salary} setSalary={setSalary} />
        <HeroCard salary={salary} details={details} />
        <CalculateButton onPress={handleCalculate} />

        {details && <BreakdownSection details={details} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "white",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#9A9A9A",
  },
});

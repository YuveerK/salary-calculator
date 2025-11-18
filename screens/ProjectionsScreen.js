// ProjectionsScreen.js

import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useAtom } from "jotai";
import { updatedNetAtom } from "../store/salaryAtoms";
import { useProjection } from "../hooks/useProjection";
import Breakdown from "../components/projections/Breakdown";
import ProjectionInputs from "../components/projections/ProjectionInputs";
import ProjectionChart from "../components/projections/ProjectionChart";
import ProjectionSummary from "../components/projections/ProjectionSummary";
import BreakdownToggle from "../components/projections/BreakdownToggle";

const ProjectionsScreen = () => {
  const insets = useSafeAreaInsets();
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [updatedNet] = useAtom(updatedNetAtom);
  const {
    lumpSum,
    setLumpSum,
    monthlyContribution,
    setMonthlyContribution,
    annualRate,
    setAnnualRate,
    years,
    setYears,
    finalValue,
    totalContributions,
    interestEarned,
    chartDataInvestment,
    chartDataContributions,
    maxScaled,
  } = useProjection(updatedNet);

  return (
    <SafeAreaView
      style={[styles.container, { paddingTop: insets.top }]}
      edges={["bottom"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text style={styles.header}>📈 Investment Projection</Text>

        <ProjectionInputs
          lumpSum={lumpSum}
          setLumpSum={setLumpSum}
          monthlyContribution={monthlyContribution}
          setMonthlyContribution={setMonthlyContribution}
          updatedNet={updatedNet}
          annualRate={annualRate}
          setAnnualRate={setAnnualRate}
          years={years}
          setYears={setYears}
        />

        <ProjectionChart
          chartDataInvestment={chartDataInvestment}
          chartDataContributions={chartDataContributions}
          maxScaled={maxScaled}
        />

        <ProjectionSummary
          years={years}
          finalValue={finalValue}
          totalContributions={totalContributions}
          interestEarned={interestEarned}
        />

        <BreakdownToggle
          showBreakdown={showBreakdown}
          setShowBreakdown={setShowBreakdown}
        />

        <Breakdown visible={showBreakdown} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "900",
    color: "#4EFFA1",
    marginBottom: 20,
  },
});

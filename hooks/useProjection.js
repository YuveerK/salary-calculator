// hooks/useProjection.js

import { useState, useMemo } from "react";
import {
  calculateFinalValue,
  calculateTotalContributions,
  calculateInterestEarned,
  generateInvestmentChartData,
  generateContributionChartData,
  calculateMaxScaled,
} from "../utils/projection.utils";

export const useProjection = (initialMonthlyContribution) => {
  const [lumpSum, setLumpSum] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(
    initialMonthlyContribution
  );
  const [annualRate, setAnnualRate] = useState(0.08);
  const [years, setYears] = useState(10);

  const finalValue = useMemo(() => {
    return calculateFinalValue(lumpSum, monthlyContribution, annualRate, years);
  }, [lumpSum, monthlyContribution, annualRate, years]);

  const totalContributions = useMemo(() => {
    return calculateTotalContributions(lumpSum, monthlyContribution, years);
  }, [lumpSum, monthlyContribution, years]);

  const interestEarned = useMemo(() => {
    return calculateInterestEarned(finalValue, totalContributions);
  }, [finalValue, totalContributions]);

  const chartDataInvestment = useMemo(() => {
    return generateInvestmentChartData(
      years,
      lumpSum,
      monthlyContribution,
      annualRate
    );
  }, [years, lumpSum, monthlyContribution, annualRate]);

  const chartDataContributions = useMemo(() => {
    return generateContributionChartData(years, lumpSum, monthlyContribution);
  }, [years, lumpSum, monthlyContribution]);

  const maxScaled = useMemo(() => {
    return calculateMaxScaled(chartDataInvestment, chartDataContributions);
  }, [chartDataInvestment, chartDataContributions]);

  return {
    // state
    lumpSum,
    setLumpSum,
    monthlyContribution,
    setMonthlyContribution,
    annualRate,
    setAnnualRate,
    years,
    setYears,

    // calculated
    finalValue,
    totalContributions,
    interestEarned,
    chartDataInvestment,
    chartDataContributions,
    maxScaled,
  };
};

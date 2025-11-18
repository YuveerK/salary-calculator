// utils/projectionUtils.js

// Compound interest monthly
export const calculateFinalValue = (
  lumpSum,
  monthlyContribution,
  annualRate,
  years
) => {
  const n = 12;
  const P = lumpSum;
  const M = monthlyContribution;
  const r = annualRate;
  const t = years;

  const factor = Math.pow(1 + r / n, n * t);
  return P * factor + M * ((factor - 1) / (r / n));
};

// Total contributions
export const calculateTotalContributions = (
  lumpSum,
  monthlyContribution,
  years
) => {
  return lumpSum + monthlyContribution * years * 12;
};

// Interest earned
export const calculateInterestEarned = (finalValue, totalContributions) => {
  return finalValue - totalContributions;
};

// Growth curve (investment line)
export const generateInvestmentChartData = (
  years,
  lumpSum,
  monthlyContribution,
  annualRate
) => {
  const n = 12;

  return Array.from({ length: years }, (_, i) => {
    const t = i + 1;
    const factor = Math.pow(1 + annualRate / n, n * t);

    const raw =
      lumpSum * factor +
      monthlyContribution * ((factor - 1) / (annualRate / n));

    return {
      value: raw / 1_000_000,
      label: `${t}y`,
    };
  });
};

// Straight-line contributions curve
export const generateContributionChartData = (
  years,
  lumpSum,
  monthlyContribution
) => {
  return Array.from({ length: years }, (_, i) => {
    const t = i + 1;
    const raw = lumpSum + monthlyContribution * (t * 12);

    return {
      value: raw / 1_000_000,
      label: `${t}y`,
    };
  });
};

// Max scaling value for chart
export const calculateMaxScaled = (investmentData, contributionsData) => {
  const maxInvest = Math.max(...investmentData.map((d) => d.value));
  const maxContrib = Math.max(...contributionsData.map((d) => d.value));
  return Math.max(maxInvest, maxContrib);
};

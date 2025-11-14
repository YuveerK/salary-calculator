export function calculateNetSalary2026(monthlySalary, age = "under65") {
  // --- UIF ---
  const uif = Math.min(monthlySalary * 0.01, 177.12);

  // --- Annual salary ---
  const annual = monthlySalary * 12;

  // --- Rebates (2026 = unchanged from 2025) ---
  const rebates = {
    under65: 17235,
    between65and75: 17235 + 9444,
    over75: 17235 + 9444 + 3145,
  };
  const rebate = rebates[age];

  // --- SARS 2026 tax brackets ---
  const brackets = [
    { limit: 237100, base: 0, rate: 0.18 },
    { limit: 370500, base: 42678, rate: 0.26 },
    { limit: 512800, base: 77362, rate: 0.31 },
    { limit: 673000, base: 121475, rate: 0.36 },
    { limit: 857900, base: 179147, rate: 0.39 },
    { limit: 1817000, base: 251258, rate: 0.41 },
    { limit: Infinity, base: 644489, rate: 0.45 },
  ];

  // Calculate annual tax
  let tax = 0;
  let prev = 0;

  for (let i = 0; i < brackets.length; i++) {
    const { limit, base, rate } = brackets[i];
    if (annual <= limit) {
      tax = base + (annual - prev) * rate;
      break;
    }
    prev = limit;
  }

  // Apply rebate
  const annualPAYE = Math.max(0, tax - rebate);
  const monthlyPAYE = annualPAYE / 12;

  // --- Net Salary ---
  const net = monthlySalary - monthlyPAYE - uif;

  return {
    gross: monthlySalary,
    paye: Number(monthlyPAYE.toFixed(2)),
    uif: Number(uif.toFixed(2)),
    net: Number(net.toFixed(2)),
  };
}

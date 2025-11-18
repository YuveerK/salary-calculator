import { atom } from "jotai";
import { defaultFixedExpenses } from "../data/defaultFixedExpenses";

// Base salary input (string)
export const salaryAtom = atom("");

// Full salary breakdown (object)
export const salaryDetailsAtom = atom(null);

// Expenses list
export const expensesAtom = atom(defaultFixedExpenses);

// Add an expense
export const addExpenseAtom = atom(null, (get, set, newExp) => {
  const prev = get(expensesAtom);
  set(expensesAtom, [...prev, newExp]);
});

// Remove an expense
export const deleteExpenseAtom = atom(null, (get, set, index) => {
  const prev = get(expensesAtom);
  set(
    expensesAtom,
    prev.filter((_, i) => i !== index)
  );
});

// Total monthly expenses
export const totalExpensesAtom = atom((get) => {
  return get(expensesAtom).reduce((sum, e) => sum + e.amount, 0);
});

// Updated net salary after expenses
export const updatedNetAtom = atom((get) => {
  const details = get(salaryDetailsAtom);
  const totalExpenses = get(totalExpensesAtom);

  if (!details) return 0;

  return details.net - totalExpenses;
});

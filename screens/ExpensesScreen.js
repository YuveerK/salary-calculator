import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAtom } from "jotai";
import {
  expensesAtom,
  addExpenseAtom,
  deleteExpenseAtom,
  totalExpensesAtom,
  updatedNetAtom,
  salaryDetailsAtom,
} from "../store/salaryAtoms";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ExpensesHeader from "../components/expenses/ExpensesHeader";
import ExpensesSummary from "../components/expenses/ExpensesSummary";
import AddExpenseCard from "../components/expenses/AddExpenseCard";
import ExpensesList from "../components/expenses/ExpensesList";
import RemainingSalaryBar from "../components/expenses/RemainingSalaryBar";

const ExpensesScreen = () => {
  const [expenses] = useAtom(expensesAtom);
  const [, addExpense] = useAtom(addExpenseAtom);
  const [, deleteExpense] = useAtom(deleteExpenseAtom);
  const [totalExpenses] = useAtom(totalExpensesAtom);
  const [updatedNet] = useAtom(updatedNetAtom);
  const [details] = useAtom(salaryDetailsAtom);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const insets = useSafeAreaInsets();
  const handleAdd = () => {
    if (!name || !amount) return;

    addExpense({
      name,
      amount: Number(amount),
      manual: true,
    });

    setName("");
    setAmount("");
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a.manual && !b.manual) return -1;
    if (!a.manual && b.manual) return 1;
    return 0;
  });

  return (
    <SafeAreaView style={styles.container} edges={"bottom"}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120, paddingTop: insets.top }}
      >
        <ExpensesHeader />

        {details && (
          <ExpensesSummary
            totalExpenses={totalExpenses}
            updatedNet={updatedNet}
            originalNet={details.net}
          />
        )}

        <AddExpenseCard
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          onAdd={handleAdd}
        />

        <ExpensesList expenses={sortedExpenses} onDelete={deleteExpense} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
  },
});

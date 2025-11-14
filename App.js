import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { calculateNetSalary2026 } from "./utils/calculate-nett-salary.util";
import { useState } from "react";
import { LineChart } from "react-native-gifted-charts";

export default function App() {
  const [grossSalary, setGrossSalary] = useState("");
  const [result, setResult] = useState(null);

  // EXPENSE STATES
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const calculateSalary = () => {
    if (!grossSalary) return;
    const nettSalary = calculateNetSalary2026(parseFloat(grossSalary));
    setResult(nettSalary);
  };

  const saveExpense = () => {
    if (!expenseName || !expenseAmount) return;

    const newExpense = {
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    if (editingIndex !== null) {
      const updated = [...expenses];
      updated[editingIndex] = newExpense;
      setExpenses(updated);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, newExpense]);
    }

    setExpenseName("");
    setExpenseAmount("");
  };

  const editExpense = (index) => {
    setExpenseName(expenses[index].name);
    setExpenseAmount(expenses[index].amount.toString());
    setEditingIndex(index);
  };

  const deleteExpense = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const finalNet =
    result && result.net ? (result.net - totalExpenses).toFixed(2) : 0;

  return (
    <SafeAreaView className="flex-1 bg-[#0B0B0F]">
      <StatusBar style="light" />

      {/* PERFECT KEYBOARD HANDLING */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
        >
          {/* HEADER */}
          <View className="w-full pt-16 pb-6 px-6">
            <Text className="text-white text-4xl font-extrabold tracking-tight">
              Income Tax
            </Text>
            <Text className="text-gray-400 text-lg mt-1">
              Calculate your monthly take-home pay.
            </Text>
          </View>

          {/* SALARY CARD */}
          <View className="bg-white/5 mx-6 p-6 rounded-3xl border border-white/10 shadow-xl backdrop-blur-xl">
            <Text className="text-gray-300 mb-3 text-base">
              Monthly Gross Salary
            </Text>

            <View className="overflow-hidden rounded-xl bg-white/10 border border-white/20">
              <TextInput
                className="p-4 text-white text-lg"
                placeholder="e.g. 65000"
                placeholderTextColor="rgba(255,255,255,0.35)"
                keyboardType="numeric"
                onChangeText={setGrossSalary}
                value={grossSalary}
                style={{ color: "white" }}
              />
            </View>

            {grossSalary && (
              <TouchableOpacity
                onPress={calculateSalary}
                className="mt-6 bg-[#4EFFA1] p-4 rounded-xl items-center shadow-lg shadow-green-500/40"
              >
                <Text className="text-black font-extrabold text-lg tracking-wide">
                  Calculate
                </Text>
              </TouchableOpacity>
            )}

            {/* HOW IT WORKS */}
            <View className="mt-6">
              <Text className="text-white text-xl font-bold mb-3">
                How Your Salary Is Calculated
              </Text>

              <Text className="text-gray-300 mb-2">
                Your final monthly take-home pay is based on:
              </Text>

              <View className="gap-2">
                <Text className="text-gray-400">
                  • SARS PAYE tax brackets (2026)
                </Text>
                <Text className="text-gray-400">• Annualized salary</Text>
                <Text className="text-gray-400">• Standard tax rebates</Text>
                <Text className="text-gray-400">• UIF contribution</Text>
                <Text className="text-gray-400">
                  • Net = Gross – PAYE – UIF – Expenses
                </Text>
              </View>
            </View>
          </View>

          {/* RESULTS */}
          {result && (
            <View className="mx-6 mt-6 p-6 rounded-3xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-xl">
              <Text className="text-white text-2xl font-bold mb-4">
                Results
              </Text>

              <View className="flex flex-row justify-between mb-3">
                <Text className="text-gray-400">Gross Salary</Text>
                <Text className="text-white font-semibold">
                  R {result.gross.toLocaleString()}
                </Text>
              </View>

              <View className="flex flex-row justify-between mb-3">
                <Text className="text-gray-400">PAYE (Tax)</Text>
                <Text className="text-red-400 font-semibold">
                  - R {result.paye.toLocaleString()}
                </Text>
              </View>

              <View className="flex flex-row justify-between mb-3">
                <Text className="text-gray-400">UIF</Text>
                <Text className="text-red-300 font-semibold">
                  - R {result.uif.toLocaleString()}
                </Text>
              </View>

              <View className="w-full h-[1px] bg-white/10 my-4" />

              <View className="flex flex-row justify-between mb-3">
                <Text className="text-gray-300 text-lg font-semibold">
                  Net Salary
                </Text>
                <Text className="text-green-400 text-lg font-bold">
                  R {result.net.toLocaleString()}
                </Text>
              </View>

              <View className="flex flex-row justify-between mb-3">
                <Text className="text-gray-300 text-lg font-semibold">
                  Expenses
                </Text>
                <Text className="text-red-300 text-lg font-bold">
                  - R {totalExpenses.toLocaleString()}
                </Text>
              </View>

              <View className="w-full h-[1px] bg-white/10 my-4" />

              <View className="flex flex-row justify-between">
                <Text className="text-gray-200 text-xl font-bold">
                  Final Remaining
                </Text>
                <Text className="text-blue-400 text-xl font-bold">
                  R {parseFloat(finalNet).toLocaleString()}
                </Text>
              </View>
            </View>
          )}

          {/* ADD EXPENSE */}
          <View className="mx-6 mt-8 p-6 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl">
            <Text className="text-white text-xl font-bold mb-4">
              Add Expense
            </Text>

            <TextInput
              className="p-4 bg-white/10 rounded-xl text-white mb-4"
              placeholder="Expense name"
              placeholderTextColor="gray"
              value={expenseName}
              onChangeText={setExpenseName}
            />

            <TextInput
              className="p-4 bg-white/10 rounded-xl text-white mb-4"
              placeholder="Amount"
              placeholderTextColor="gray"
              value={expenseAmount}
              onChangeText={setExpenseAmount}
            />

            <TouchableOpacity
              onPress={saveExpense}
              className="bg-blue-500 p-4 rounded-xl items-center"
            >
              <Text className="text-white font-bold">
                {editingIndex !== null ? "Update Expense" : "Add Expense"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* EXPENSE LIST */}
          {expenses.length > 0 && (
            <View className="mx-6 mt-6 mb-6 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-xl backdrop-blur-xl">
              <Text className="text-white text-xl font-bold mb-4">
                Your Expenses
              </Text>

              {expenses.map((exp, index) => (
                <View
                  key={index}
                  className="flex flex-row items-center justify-between mb-3"
                >
                  <Text className="text-gray-300 text-base">
                    {exp.name} — R {exp.amount}
                  </Text>

                  <View className="flex flex-row gap-4">
                    <TouchableOpacity onPress={() => editExpense(index)}>
                      <Text className="text-blue-400 font-semibold">Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => deleteExpense(index)}>
                      <Text className="text-red-400 font-semibold">Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* PROJECTIONS */}
          {result && (
            <View className="mx-6 mt-8 p-6 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl">
              <Text className="text-white text-2xl font-extrabold mb-4">
                Savings Projections
              </Text>

              <Text className="text-gray-300 mb-4">
                Based on your remaining monthly balance, here is how much you
                can save over time.
              </Text>

              {/* Projection Values */}
              <View className="gap-3 mb-6">
                <View className="flex flex-row justify-between">
                  <Text className="text-gray-400">3 Months</Text>
                  <Text className="text-green-400 font-bold">
                    R {(finalNet * 3).toLocaleString()}
                  </Text>
                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-gray-400">6 Months</Text>
                  <Text className="text-green-400 font-bold">
                    R {(finalNet * 6).toLocaleString()}
                  </Text>
                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-gray-400">12 Months</Text>
                  <Text className="text-green-400 font-bold">
                    R {(finalNet * 12).toLocaleString()}
                  </Text>
                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-gray-400">24 Months</Text>
                  <Text className="text-green-400 font-bold">
                    R {(finalNet * 24).toLocaleString()}
                  </Text>
                </View>
              </View>

              {/* CHART */}
              <View className="bg-black/20 p-4 rounded-2xl border border-white/5">
                <Text className="text-white font-semibold mb-3">
                  Projected Growth
                </Text>
                <LineChart
                  data={[
                    { value: 0 },
                    { value: finalNet * 3, label: "3m" },
                    { value: finalNet * 6, label: "6m" },
                    { value: finalNet * 12, label: "12m" },
                    { value: finalNet * 24, label: "24m" },
                  ]}
                  thickness={4}
                  color="#4EFFA1"
                  dataPointsColor="#4EFFA1"
                  startFillColor={"rgba(78,255,161,0.25)"}
                  endFillColor={"rgba(78,255,161,0)"}
                  curved
                  hideRules
                  spacing={40}
                  animate
                  animationDuration={900}
                  backgroundColor="transparent"
                  /* AXIS COLORS */
                  xAxisColor="#ffffff"
                  yAxisColor="#ffffff"
                  /* AXIS LABEL COLORS */
                  xAxisLabelTextStyle={{ color: "white" }}
                  yAxisTextStyle={{ color: "white" }}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

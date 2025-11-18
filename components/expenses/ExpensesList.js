import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses, onDelete }) => {
  return (
    <>
      {expenses.map((e, i) => (
        <ExpenseItem
          key={i}
          name={e.name}
          amount={e.amount}
          onDelete={() => onDelete(i)}
        />
      ))}
    </>
  );
};

export default ExpensesList;


import Cards from "../UI/Cards";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, selectedYear] = useState("2021");
  const selectedFilterYear = (year) => {
    selectedYear(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() == filteredYear
  );

  return (
    <Cards className="expenses">
      <ExpenseFilter
        selectedYear={selectedFilterYear}
        filterYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filterData = {filteredExpenses} />
    </Cards>
  );
};

export default Expenses;

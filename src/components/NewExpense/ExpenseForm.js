import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
   const [enteredTitle, setTitle] =  useState('');
   const [enteredAmount, setAmount] = useState('');
   const [enteredDate, setDate] = useState('');

//  ----------------  Alternate Approach --------------
//   const [userInput, setUserInput] = useState({
//       enteredTitle: '',
//       enteredAmount: '',
//       enteredDate: ''
//   });
// ----------------  Alternate Approach --------------

  const titleChangeHandler = (event) => {
      setTitle(event.target.value) ;

    // ----------------  Alternate Approach --------------
    // setUserInput( (prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
    // ----------------  Alternate Approach --------------
  };

  const amountChangeHandler = (event) => {
      setAmount(event.target.value);

    //   ----------------  Alternate Approach --------------
    // setUserInput( (prevState) => {
    //     return {...prevState, enteredAmount: event.target.value};
    // });
    // ----------------  Alternate Approach --------------
  };

  const dateChangeHandler = (event) => {
      setDate(event.target.value);

    //   ----------------  Alternate Approach --------------
    // setUserInput( (prevState) => {
    //     return {...prevState, enteredDate: event.target.value};
    // });
    // ----------------  Alternate Approach --------------
  }

  const formSubmitHandler = (event) => {
      // event.preventDefault();
    let formData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    }
    props.expenseData(formData);
    setTitle('');
    setAmount('');
    setDate('');

    props.hideForm(true);
  };

  const cancelExpenseHandler = () => {
      props.hideForm(true);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={cancelExpenseHandler} >Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

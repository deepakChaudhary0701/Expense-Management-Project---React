
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [initialState, setFinalState] = useState(false);

    const saveExpenseDataHandler = (expense) => {
        const enteredData = {
            ...expense,
            id: 'e' + Math.random().toFixed(1).toLocaleString()*5 + 1
        }
        props.enteredExpenseData(enteredData);
    }

    const openExpenseForm = () => {
      setFinalState(true);
    }

    const formStateHandler = (state) => {
        if(state){
            setFinalState(false);
        }
    }

    return (
        <div className='new-expense'>
            { !initialState &&  <button onClick={openExpenseForm}>Add New Expense</button>}
            {  initialState && <ExpenseForm  expenseData = {saveExpenseDataHandler} hideForm={formStateHandler}/>}
        </div>
    );
}

export default NewExpense;
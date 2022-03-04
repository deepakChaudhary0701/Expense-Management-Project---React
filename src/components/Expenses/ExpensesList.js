
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    let expenseContent = <p className="expenses-list__fallback">No Expenses Found.</p>;

    if (props.filterData.length > 0) {
      expenseContent = props.filterData.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      });
    }

    return <ul className='expenses-list'>
        <li>{expenseContent}</li>
    </ul>
}

export default  ExpensesList;
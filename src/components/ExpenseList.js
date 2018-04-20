import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>The Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
);


// Method 3
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)



// Method 2
// export default connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)


// Method 1
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)

// export default ConnectedExpenseList;
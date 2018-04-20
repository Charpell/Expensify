import React from 'react'
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>The Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);


// Method 3
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
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
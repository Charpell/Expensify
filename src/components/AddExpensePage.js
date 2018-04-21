import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


const AddExchangePage = (props) => (
  <div>
    <h1> Add Expense </h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        {/* props.dispatch(addExpense(expense)) */}
        props.onSubmit(expense)
        props.history.push('/')
      }}
    />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  onSumbit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExchangePage);
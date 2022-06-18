import React from 'react'
import { useState } from 'react'

const TransactionForm = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, amount)
  }
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input type="text" required />
        </label>
        <label>
          <span>Amount ($):</span>
          <input type="text" required />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}

export default TransactionForm
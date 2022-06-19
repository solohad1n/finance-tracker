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
          <input type="text" required value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          <span>Amount ($):</span>
          <input type="number" required
            value={amount} onChange={e => setAmount(e.target.value)}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}

export default TransactionForm
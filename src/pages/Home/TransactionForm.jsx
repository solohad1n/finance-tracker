import React, { useState } from 'react'
import { useCollection } from '../../Hooks/useCollection'

const TransactionForm = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument } = useCollection()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDocument({
      userId: 'awdawdwad',
      title: name,
      amount,
      createdAt: new Date(),
    })
  }
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required value={name}
            onChange={e => setName(e.target.value)}
          />
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
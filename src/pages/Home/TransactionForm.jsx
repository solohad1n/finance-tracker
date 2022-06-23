import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useCollection } from '../../Hooks/useCollection'

const TransactionForm = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useCollection()
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDocument({
      userId: user.uid,
      title: name,
      amount: Number(amount),
      createdAt: new Date(),
    })
  }
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])
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
        {!response.isPending && <button>Add Transaction</button>}
        {response.isPending && <button disabled>is Loading...</button>}
      </form>
    </>
  )
}

export default TransactionForm
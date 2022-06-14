import React, { useState } from "react";
import { useSignup } from "../../Hooks/useSignup";
import styles from './Signup.module.css'

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup, error, isPending } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, name)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password:</span>
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        <span>Name:</span>
        <input type="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      {error && <p>{error}</p>}
      <button className="btn">Login</button>
    </form>
  )
}
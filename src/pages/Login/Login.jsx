import React, { useState } from "react";
import { useLogin } from '../../Hooks/useLogin'
import styles from './Login.module.css'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
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
      <button className="btn">Login</button>
    </form>
  )
}
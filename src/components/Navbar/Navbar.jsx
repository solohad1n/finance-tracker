import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          Мои Финансы
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  )
}

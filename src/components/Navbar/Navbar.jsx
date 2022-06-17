import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import { useAuthContext } from "../../Hooks/useAuthContext";

export const Navbar = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Мои Финансы</li>
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button className='btn'>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

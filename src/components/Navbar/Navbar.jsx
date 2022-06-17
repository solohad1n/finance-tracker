import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogin } from '../../Hooks/useLogin';

export const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogin()

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
          <>
            <li>hello, {user.name}</li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

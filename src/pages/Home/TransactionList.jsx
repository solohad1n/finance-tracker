import React from "react";
import styles from './Home.module.css'

const TransactionList = () => {
  return (
    <ul className={styles.transactions}>
      <li>
        <p className={styles.name}>Купить молоко</p>
        <p className={styles.amont}>$15</p>
      </li>
    </ul>
  )
}

export default TransactionList;
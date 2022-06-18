import React from "react";
import styles from './Home.module.css'
import TransactionForm from "./TransactionForm";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}